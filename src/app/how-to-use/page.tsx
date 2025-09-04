import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Track Contractions - Complete Guide",
  description:
    "Learn when and how to time contractions during labor. Understand the 5-1-1 rule, contraction patterns, and when to contact your healthcare provider.",
  alternates: {
    canonical: "/how-to-use",
  },
};

export default function HowToUsePage() {
  return (
    <>
      {/* HowTo Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Track Labor Contractions",
            description:
              "Step-by-step guide for timing contractions during labor using a contraction timer",
            image: "https://contracking.me/og-image.jpg",
            totalTime: "PT5M",
            supply: [
              {
                "@type": "HowToSupply",
                name: "Smartphone or computer with internet access",
              },
            ],
            tool: [
              {
                "@type": "HowToTool",
                name: "Contracking Timer App",
              },
            ],
            step: [
              {
                "@type": "HowToStep",
                name: "Start Timing",
                text: "Press the Start button as soon as you feel a contraction beginning. The timer will begin counting.",
                url: "https://contracking.me/how-to-use#start-timing",
              },
              {
                "@type": "HowToStep",
                name: "Stop When It Ends",
                text: "Press Stop when the contraction completely ends and you feel the muscle relaxation.",
                url: "https://contracking.me/how-to-use#stop-timing",
              },
              {
                "@type": "HowToStep",
                name: "Review Your Data",
                text: "Check the table and charts to see your contraction patterns, frequency, and duration trends.",
                url: "https://contracking.me/how-to-use#review-data",
              },
              {
                "@type": "HowToStep",
                name: "Share with Healthcare Provider",
                text: "Export your data or share the information with your healthcare team for better labor management.",
                url: "https://contracking.me/how-to-use#share-data",
              },
            ],
          }),
        }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-8">
              How to Track Your Labor Contractions
            </h1>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                When to Start Timing Contractions
              </h2>
              <p className="mb-4">
                Not all contractions need to be timed. Start tracking when:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Contractions become regular and noticeable</li>
                <li>They last 30 seconds or longer</li>
                <li>You feel them in your abdomen and possibly your back</li>
                <li>They don't go away when you change positions</li>
                <li>They gradually become stronger and more frequent</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-blue-800">
                  <strong>Early Labor Tip:</strong> You don't need to time every
                  single contraction from the very beginning. Start timing when
                  they become uncomfortable and regular.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                Understanding the 5-1-1 Rule
              </h2>
              <p className="mb-4">
                The 5-1-1 rule is a guideline for when to contact your
                healthcare provider or go to the hospital:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <h3 className="font-semibold mb-2">Minutes Apart</h3>
                  <p className="text-sm text-muted-foreground">
                    Contractions are consistently 5 minutes apart
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <h3 className="font-semibold mb-2">Minute Long</h3>
                  <p className="text-sm text-muted-foreground">
                    Each contraction lasts about 1 minute
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <h3 className="font-semibold mb-2">Hour Duration</h3>
                  <p className="text-sm text-muted-foreground">
                    This pattern continues for at least 1 hour
                  </p>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-yellow-800">
                  <strong>Important:</strong> Every labor is different. Some
                  people may need to go to the hospital before reaching the
                  5-1-1 pattern. Always follow your healthcare provider's
                  specific instructions.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                Using the Contraction Timer
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Start Timing</h4>
                    <p className="text-muted-foreground">
                      Press the "Start" button as soon as you feel a contraction
                      beginning. The timer will begin counting.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Stop When It Ends</h4>
                    <p className="text-muted-foreground">
                      Press "Stop" when the contraction completely ends and you
                      feel the muscle relaxation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Review Your Data</h4>
                    <p className="text-muted-foreground">
                      Check the table and charts to see your contraction
                      patterns, frequency, and duration trends.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Share with Healthcare Provider
                    </h4>
                    <p className="text-muted-foreground">
                      Export your data or share the information with your
                      healthcare team for better labor management.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                When to Contact Your Healthcare Provider
              </h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                <h4 className="font-semibold text-red-800 mb-2">
                  Contact immediately if you experience:
                </h4>
                <ul className="text-red-700 space-y-1">
                  <li>• Severe, constant pain</li>
                  <li>• Heavy bleeding</li>
                  <li>• Water breaking with green or brown fluid</li>
                  <li>• Decreased baby movement</li>
                  <li>• High fever or signs of infection</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-4">Regular Check-ins</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>When contractions follow the 5-1-1 pattern</li>
                <li>If you're unsure whether you're in labor</li>
                <li>When contractions are very painful or concerning</li>
                <li>If your water breaks</li>
                <li>According to your birth plan timeline</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Understanding Your Contraction Data
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Duration</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    How long each contraction lasts, typically measured in
                    seconds. Early labor: 30-45 seconds, Active labor: 60-90
                    seconds.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Frequency</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Time between the start of one contraction and the start of
                    the next. Measured from peak to peak.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Intensity</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    While this app tracks timing, intensity is something you'll
                    assess subjectively and discuss with your healthcare
                    provider.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Patterns</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Look for increasing regularity, frequency, and duration over
                    time. True labor contractions become more predictable.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}

