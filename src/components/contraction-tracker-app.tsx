"use client";

import { CompactStats } from "@/components/CompactStats";
import { ContractionChart } from "@/components/ContractionChart";
import { ContractionTable } from "@/components/ContractionTable";
import { ContractionTimer } from "@/components/ContractionTimer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useContractions } from "@/hooks/useContractions";
import { Bell, Hospital } from "lucide-react";
import { useEffect, useState } from "react";

export function ContractionTrackerApp() {
  const {
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
  } = useContractions();

  const [notificationPermissionRequested, setNotificationPermissionRequested] =
    useState(false);
  const summary = getSummary();
  const meetsRule = check511Rule(contractions);

  // Request notification permission when app loads
  useEffect(() => {
    if (isHydrated && !notificationPermissionRequested) {
      setNotificationPermissionRequested(true);
      if ("Notification" in window && Notification.permission === "default") {
        requestNotificationPermission();
      }
    }
  }, [
    isHydrated,
    notificationPermissionRequested,
    requestNotificationPermission,
  ]);

  const handleRequestNotifications = async () => {
    await requestNotificationPermission();
  };

  // Show loading state until hydration is complete to prevent hydration mismatches
  if (!isHydrated) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground">
            Loading your contraction data...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 space-y-8">
      {/* Hospital Alert - Show when 5-1-1 rule is met */}
      {meetsRule && (
        <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
          <Hospital className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertTitle className="text-green-800 dark:text-green-200">
            Time to Contact Your Healthcare Provider
          </AlertTitle>
          <AlertDescription className="text-green-700 dark:text-green-300">
            Your contractions meet the <strong>5-1-1 rule</strong>: 5 minutes
            apart, lasting 1 minute, for 1 hour consistently. It's time to call
            your hospital or healthcare provider.
          </AlertDescription>
        </Alert>
      )}

      {/* Notification Permission Request */}
      {"Notification" in window && Notification.permission === "default" && (
        <Alert>
          <Bell className="h-4 w-4" />
          <AlertTitle>Enable Notifications</AlertTitle>
          <AlertDescription className="flex items-center justify-between">
            <span>
              Get notified when it's time to contact your healthcare provider.
            </span>
            <Button
              onClick={handleRequestNotifications}
              size="sm"
              className="ml-4"
            >
              Enable
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* Timer Section with Compact Stats */}
      <section className="md:max-w-md mx-auto">
        <CompactStats
          summary={summary}
          isTracking={isTracking}
          currentContraction={currentContraction}
        />
        <ContractionTimer
          isTracking={isTracking}
          onStart={startContraction}
          onStop={stopContraction}
          startTime={currentContraction?.startTime}
          meetsHospitalRule={meetsRule}
        />
      </section>

      {/* Table - moved up for easier access */}
      <section>
        <ContractionTable
          contractions={contractions}
          onDelete={deleteContraction}
          onEdit={editContraction}
          onAdd={addManualContraction}
          onClearAll={clearAllContractions}
        />
      </section>

      {/* Charts */}
      <section>
        <ContractionChart contractions={contractions} />
      </section>
    </main>
  );
}

