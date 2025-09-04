import { Contraction, ContractionSummary } from "@/types/contraction";
import { useEffect, useRef, useState } from "react";
import { toast } from "./use-toast";
import { useLocalStorage } from "./useLocalStorage";

export function useContractions() {
  const [storedContractions, setStoredContractions, isHydrated] =
    useLocalStorage<Contraction[]>("contractions", []);

  // Convert date strings back to Date objects when loading from localStorage
  const contractions = storedContractions.map((contraction) => ({
    ...contraction,
    startTime: new Date(contraction.startTime),
    endTime: contraction.endTime ? new Date(contraction.endTime) : null,
  }));

  const setContractions = (
    value: Contraction[] | ((prev: Contraction[]) => Contraction[])
  ) => {
    setStoredContractions(value);
  };
  const [currentContraction, setCurrentContraction] =
    useState<Contraction | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [hasShownHospitalAlert, setHasShownHospitalAlert] = useState(false);
  const lastNotificationTimeRef = useRef<number>(0);

  // Monitor contractions for 5-1-1 rule
  useEffect(() => {
    if (!isHydrated || contractions.length === 0) return;

    const meetsRule = check511Rule(contractions);
    const now = Date.now();

    // Only show notification once every 30 minutes to avoid spam
    const thirtyMinutes = 30 * 60 * 1000;
    const timeSinceLastNotification = now - lastNotificationTimeRef.current;

    if (
      meetsRule &&
      (!hasShownHospitalAlert || timeSinceLastNotification > thirtyMinutes)
    ) {
      setHasShownHospitalAlert(true);
      lastNotificationTimeRef.current = now;

      toast({
        title: "🏥 Time to Contact Your Healthcare Provider",
        description:
          "Your contractions meet the 5-1-1 rule: 5 minutes apart, lasting 1 minute, for 1 hour consistently. It's time to call your hospital or healthcare provider.",
        variant: "destructive",
        duration: 10000, // Show for 10 seconds
      });

      // Browser notification if permission granted
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification("Mama Pulse Watch - Hospital Alert", {
          body: "Your contractions meet the 5-1-1 rule. Time to contact your healthcare provider!",
          icon: "/icon-192.png",
          tag: "hospital-alert",
        });
      }
    }
  }, [contractions, isHydrated, hasShownHospitalAlert]);

  const startContraction = () => {
    const newContraction: Contraction = {
      id: crypto.randomUUID(),
      startTime: new Date(),
      endTime: null,
      duration: null,
    };
    setCurrentContraction(newContraction);
    setIsTracking(true);
  };

  const stopContraction = () => {
    if (currentContraction) {
      const endTime = new Date();
      const duration = Math.round(
        (endTime.getTime() - currentContraction.startTime.getTime()) / 1000
      );

      // Only record contractions that are at least 1 second long
      if (duration >= 1) {
        const completedContraction: Contraction = {
          ...currentContraction,
          endTime,
          duration,
        };

        setContractions((prev) => [completedContraction, ...prev]);
      }

      setCurrentContraction(null);
      setIsTracking(false);
    }
  };

  const deleteContraction = (id: string) => {
    setContractions((prev) => prev.filter((c) => c.id !== id));
  };

  const editContraction = (
    id: string,
    updatedData: { startTime: Date; endTime: Date | null }
  ) => {
    setContractions((prev) =>
      prev.map((contraction) => {
        if (contraction.id === id) {
          const duration = updatedData.endTime
            ? Math.round(
                (updatedData.endTime.getTime() -
                  updatedData.startTime.getTime()) /
                  1000
              )
            : null;

          return {
            ...contraction,
            startTime: updatedData.startTime,
            endTime: updatedData.endTime,
            duration,
          };
        }
        return contraction;
      })
    );
  };

  const addManualContraction = (startTime: Date, endTime: Date | null) => {
    const duration = endTime
      ? Math.round((endTime.getTime() - startTime.getTime()) / 1000)
      : null;

    const newContraction: Contraction = {
      id: crypto.randomUUID(),
      startTime,
      endTime,
      duration,
    };

    setContractions((prev) =>
      [newContraction, ...prev].sort(
        (a, b) => b.startTime.getTime() - a.startTime.getTime()
      )
    );
  };

  const clearAllContractions = () => {
    setContractions([]);
    setCurrentContraction(null);
    setIsTracking(false);
    setHasShownHospitalAlert(false);
  };

  const requestNotificationPermission = async () => {
    if ("Notification" in window && Notification.permission === "default") {
      const permission = await Notification.requestPermission();
      return permission === "granted";
    }
    return Notification.permission === "granted";
  };

  // Check if contractions meet the 5-1-1 rule
  const check511Rule = (contractionsToCheck: Contraction[]): boolean => {
    const completedContractions = contractionsToCheck.filter(
      (c) => c.duration !== null && c.endTime !== null
    );

    // Need at least 12 contractions to check for 1 hour of consistent pattern
    if (completedContractions.length < 12) return false;

    // Check the most recent hour of contractions
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);

    const recentContractions = completedContractions.filter(
      (c) => c.startTime >= oneHourAgo
    );

    if (recentContractions.length < 12) return false;

    // Check if contractions are consistently:
    // - 5 minutes apart (300 seconds ± 60 seconds tolerance)
    // - 1 minute long (60 seconds ± 15 seconds tolerance)
    let validContractions = 0;

    for (let i = 0; i < recentContractions.length - 1; i++) {
      const current = recentContractions[i];
      const next = recentContractions[i + 1];

      // Check duration (around 60 seconds)
      const duration = current.duration || 0;
      const isDurationValid = duration >= 45 && duration <= 75;

      // Check interval (around 300 seconds)
      const interval =
        (current.startTime.getTime() - next.startTime.getTime()) / 1000;
      const isIntervalValid = interval >= 240 && interval <= 360; // 4-6 minutes

      if (isDurationValid && isIntervalValid) {
        validContractions++;
      }
    }

    // Need at least 10 out of the last 11 intervals to be valid for a consistent pattern
    return validContractions >= 10;
  };

  const getSummary = (): ContractionSummary => {
    const completedContractions = contractions.filter(
      (c) => c.duration !== null
    );

    if (completedContractions.length === 0) {
      return {
        totalContractions: 0,
        averageDuration: 0,
        averageInterval: 0,
        lastContraction: null,
      };
    }

    const totalDuration = completedContractions.reduce(
      (sum, c) => sum + (c.duration || 0),
      0
    );
    const averageDuration = totalDuration / completedContractions.length;

    let averageInterval = 0;
    if (completedContractions.length > 1) {
      const intervals: number[] = [];
      for (let i = 0; i < completedContractions.length - 1; i++) {
        const current = completedContractions[i];
        const next = completedContractions[i + 1];
        const interval =
          (current.startTime.getTime() - next.startTime.getTime()) / 1000;
        intervals.push(interval);
      }
      averageInterval =
        intervals.reduce((sum, interval) => sum + interval, 0) /
        intervals.length;
    }

    return {
      totalContractions: completedContractions.length,
      averageDuration,
      averageInterval,
      lastContraction: completedContractions[0] || null,
    };
  };

  return {
    contractions,
    currentContraction,
    isTracking,
    startContraction,
    stopContraction,
    deleteContraction,
    editContraction,
    addManualContraction,
    clearAllContractions,
    getSummary,
    isHydrated,
    requestNotificationPermission,
    hasShownHospitalAlert,
    check511Rule,
  };
}

