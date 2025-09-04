import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ - Contraction Timer Questions",
  description:
    "Frequently asked questions about timing contractions, understanding labor patterns, and using our contraction tracker effectively.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">
            Frequently Asked Questions
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                About Contraction Timing
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    How accurate should my timing be?
                  </h3>
                  <p className="text-muted-foreground">
                    Don't worry about being perfectly precise to the second.
                    Healthcare providers are looking for overall patterns rather
                    than exact timing. Being within 10-15 seconds is generally
                    accurate enough.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    What if I miss timing a contraction?
                  </h3>
                  <p className="text-muted-foreground">
                    That's completely normal! You can add contractions manually
                    using the "Add Manual" feature in the table. Just estimate
                    the start and end times as best you can remember.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Should I time every single contraction?
                  </h3>
                  <p className="text-muted-foreground">
                    No, especially in early labor. Start timing when
                    contractions become regular and uncomfortable. You can take
                    breaks and resume timing when needed.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    What's the difference between Braxton Hicks and real labor
                    contractions?
                  </h3>
                  <p className="text-muted-foreground">
                    Real labor contractions get stronger, longer, and closer
                    together over time. They don't stop when you change
                    positions or rest. Braxton Hicks are usually irregular and
                    may stop with movement or rest.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Using the App</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Is my data private and secure?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes! All your contraction data is stored locally on your
                    device only. Nothing is sent to servers or shared with
                    anyone. Your privacy is completely protected.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Can I use this app offline?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, the app works completely offline once it's loaded. This
                    is especially important during labor when internet
                    connectivity might be unreliable.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    How do I export my contraction data?
                  </h3>
                  <p className="text-muted-foreground">
                    You can export your data using the export button in the
                    contraction table. This creates a file you can share with
                    your healthcare provider or save for your records.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    What if I accidentally delete my data?
                  </h3>
                  <p className="text-muted-foreground">
                    Unfortunately, deleted data cannot be recovered since
                    everything is stored locally. We recommend exporting your
                    data periodically as a backup, especially during active
                    labor.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Medical Questions</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Can this app tell me if I'm in labor?
                  </h3>
                  <p className="text-muted-foreground">
                    No, this app is a timing tool only. Only your healthcare
                    provider can determine if you're in labor. The app helps you
                    collect data to share with them for better assessment.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    What if my contractions don't follow the 5-1-1 rule?
                  </h3>
                  <p className="text-muted-foreground">
                    Every labor is different. Some people have irregular
                    contractions but are still in active labor. Trust your
                    instincts and contact your healthcare provider if you're
                    concerned, regardless of timing patterns.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Should I bring this data to the hospital?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes! Healthcare providers appreciate having contraction
                    timing data. You can export the data or simply show them the
                    charts and statistics on your phone.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Emergency Situations
              </h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-semibold text-red-800 mb-4">
                  Contact your healthcare provider immediately if:
                </h3>
                <ul className="text-red-700 space-y-2">
                  <li>• You have severe, constant abdominal pain</li>
                  <li>• You experience heavy bleeding</li>
                  <li>• Your water breaks and the fluid is green or brown</li>
                  <li>• You notice decreased baby movement</li>
                  <li>• You have a high fever</li>
                  <li>• You feel something is seriously wrong</li>
                </ul>
                <p className="text-red-700 mt-4 font-medium">
                  Don't wait to time contractions in emergency situations. Trust
                  your instincts and seek immediate medical attention.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start Tracking Your Contractions
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

