import { ContractionTrackerApp } from "@/components/contraction-tracker-app";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contracktions - Free Labor Contraction Timer & Tracker",
  description:
    "Track your labor contractions with precision. Monitor duration, frequency, and patterns to help determine when to go to the hospital. Free, private, and easy to use.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Main App */}
      <section className="app-section">
        <ContractionTrackerApp />
      </section>

      {/* Hero Section with Enhanced Content */}
      <section className="hero-section py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Track Your Labor Contractions with Precision
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Free, private, and easy-to-use contraction timer to help you monitor
            your labor progress and make informed decisions about when to go to
            the hospital
          </p>
        </div>
      </section>

      {/* SEO Content Sections */}
      <section id="features" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need to Track Your Labor
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Timing</h3>
              <p className="text-muted-foreground">
                Accurate contraction timing with start/stop functionality and
                automatic duration calculation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Visual Analytics</h3>
              <p className="text-muted-foreground">
                Charts and statistics to help you understand your contraction
                patterns and frequency
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Private & Secure</h3>
              <p className="text-muted-foreground">
                All data stays on your device. No accounts required, no data
                sharing, complete privacy
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How to Track Your Contractions
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  When to Start Timing
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• When contractions become regular and painful</li>
                  <li>• If you're unsure whether labor has started</li>
                  <li>• When contractions last 30-60 seconds</li>
                  <li>• If you're approaching your due date</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">The 5-1-1 Rule</h3>
                <p className="text-muted-foreground mb-4">
                  Contact your healthcare provider when contractions are:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <strong>5 minutes apart</strong>
                  </li>
                  <li>
                    • <strong>1 minute long</strong>
                  </li>
                  <li>
                    • For <strong>1 hour</strong> consistently
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="trust" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Trusted by Expectant Mothers
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Designed with healthcare professionals to provide accurate timing
              and helpful insights during one of the most important moments of
              your life.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Medical Grade Accuracy</h4>
                <p className="text-sm text-muted-foreground">
                  Precise timing algorithms designed for clinical accuracy
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Privacy First</h4>
                <p className="text-sm text-muted-foreground">
                  All data stored locally on your device, never shared
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Always Available</h4>
                <p className="text-sm text-muted-foreground">
                  Works offline, no internet connection required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

