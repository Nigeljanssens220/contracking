"use client";

import { CompactStats } from "@/components/CompactStats";
import { ContractionChart } from "@/components/ContractionChart";
import { ContractionTable } from "@/components/ContractionTable";
import { ContractionTimer } from "@/components/ContractionTimer";
import { useContractions } from "@/hooks/useContractions";

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
  } = useContractions();

  const summary = getSummary();

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
      {/* Timer Section with Compact Stats */}
      <section className="md:max-w-md mx-auto">
        <CompactStats summary={summary} />
        <ContractionTimer
          isTracking={isTracking}
          onStart={startContraction}
          onStop={stopContraction}
          startTime={currentContraction?.startTime}
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

