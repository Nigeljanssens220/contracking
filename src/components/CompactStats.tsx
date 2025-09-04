"use client";

import {
  Contraction,
  ContractionSummary as SummaryData,
} from "@/types/contraction";
import { formatDuration, intervalToDuration } from "date-fns";
import { Clock, History, Timer } from "lucide-react";
import { useEffect, useState } from "react";

interface CompactStatsProps {
  summary: SummaryData;
  isTracking: boolean;
  currentContraction: Contraction | null;
}

export function CompactStats({
  summary,
  isTracking,
  currentContraction,
}: CompactStatsProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second, but pause when tracking a contraction
  useEffect(() => {
    if (isTracking) {
      return; // Don't update time while tracking
    }

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [isTracking]);

  const formatDurationFromSeconds = (seconds: number) => {
    if (seconds === 0) return "0 seconds";
    const duration = intervalToDuration({ start: 0, end: seconds * 1000 });
    return formatDuration(duration, { format: ["minutes", "seconds"] });
  };

  const getTimeSinceLastContraction = () => {
    if (!summary.lastContraction) return "0 seconds";

    // If currently tracking, show time frozen at the moment tracking started
    if (isTracking && currentContraction) {
      const lastContractionEndTime =
        summary.lastContraction.endTime || summary.lastContraction.startTime;
      const timeDiffInSeconds = Math.floor(
        (currentContraction.startTime.getTime() -
          lastContractionEndTime.getTime()) /
          1000
      );

      if (timeDiffInSeconds < 0) return "0 seconds";

      const duration = intervalToDuration({
        start: 0,
        end: timeDiffInSeconds * 1000,
      });
      return formatDuration(duration, {
        format: ["hours", "minutes", "seconds"],
      });
    }

    // Use end time if available, otherwise start time
    const lastContractionTime =
      summary.lastContraction.endTime || summary.lastContraction.startTime;
    const timeDiffInSeconds = Math.floor(
      (currentTime.getTime() - lastContractionTime.getTime()) / 1000
    );

    if (timeDiffInSeconds < 0) return "0 seconds";

    const duration = intervalToDuration({
      start: 0,
      end: timeDiffInSeconds * 1000,
    });
    return formatDuration(duration, {
      format: ["hours", "minutes", "seconds"],
    });
  };

  return (
    <div className="flex justify-center gap-8 mb-6">
      <div className="flex flex-col items-center gap-1 text-sm">
        <Timer className="w-5 h-5 text-primary" />
        <span className="text-muted-foreground">Avg Duration</span>
        <span className="font-semibold text-foreground">
          {formatDurationFromSeconds(summary.averageDuration)}
        </span>
      </div>

      <div className="flex flex-col items-center gap-1 text-sm">
        <Clock className="w-5 h-5 text-primary" />
        <span className="text-muted-foreground">Avg Interval</span>
        <span className="font-semibold text-foreground">
          {summary.averageInterval > 0
            ? formatDurationFromSeconds(summary.averageInterval)
            : "0 seconds"}
        </span>
      </div>

      <div className="flex flex-col items-center gap-1 text-sm">
        <History className="w-5 h-5 text-primary" />
        <span className="text-muted-foreground">Last Contraction</span>
        <span className="font-semibold text-foreground">
          {getTimeSinceLastContraction()} ago
        </span>
      </div>
    </div>
  );
}

