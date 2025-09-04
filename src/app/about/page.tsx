import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Contracktions - Labor Tracking Tool",
  description:
    "Learn about Contracktions, a free, privacy-focused contraction timer designed to help expectant mothers track their labor progress accurately and safely.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">About Contracktions</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg mb-6">
              Contracktions was created to provide expectant mothers with a
              simple, accurate, and private tool for tracking labor
              contractions. We believe that having reliable data about your
              labor progress empowers you to make informed decisions and
              communicate effectively with your healthcare team.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Why We Built This</h2>
            <div className="space-y-4">
              <p>
                During labor, timing contractions accurately can be challenging
                when you're focused on managing pain and preparing for your
                baby's arrival. Many existing apps are overly complicated,
                require accounts, or don't prioritize privacy during this
                intimate time.
              </p>
              <p>We designed Contracktions to be:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Simple to use</strong> - Large, clear buttons that
                  work even when you're distracted
                </li>
                <li>
                  <strong>Completely private</strong> - All data stays on your
                  device, no accounts required
                </li>
                <li>
                  <strong>Medically accurate</strong> - Precise timing
                  algorithms designed for clinical use
                </li>
                <li>
                  <strong>Always available</strong> - Works offline, no internet
                  connection needed
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-3">Real-Time Timer</h3>
                <p className="text-muted-foreground text-sm">
                  Large, easy-to-use start/stop timer with clear visual feedback
                  and precise timing down to the second.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-3">Automatic Calculations</h3>
                <p className="text-muted-foreground text-sm">
                  Automatically calculates contraction duration, intervals
                  between contractions, and provides summary statistics.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-3">Visual Analytics</h3>
                <p className="text-muted-foreground text-sm">
                  Charts and graphs help you visualize contraction patterns and
                  trends over time for better understanding.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-3">Data Export</h3>
                <p className="text-muted-foreground text-sm">
                  Export your contraction data to share with healthcare
                  providers or keep for your personal records.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-3">Manual Entry</h3>
                <p className="text-muted-foreground text-sm">
                  Add or edit contractions manually if you missed timing them or
                  need to make corrections to your data.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-3">Privacy Focused</h3>
                <p className="text-muted-foreground text-sm">
                  No accounts, no data collection, no tracking. Everything stays
                  private on your device using local storage.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Privacy & Security</h2>
            <div className="bg-green-50 border-l-4 border-green-400 p-6">
              <h3 className="font-semibold text-green-800 mb-3">
                Your Data Stays With You
              </h3>
              <ul className="text-green-700 space-y-2">
                <li>• All contraction data is stored locally on your device</li>
                <li>• No personal information is collected or transmitted</li>
                <li>• No user accounts or registration required</li>
                <li>• No cookies or tracking technologies used</li>
                <li>• No data is shared with third parties</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Medical Disclaimer</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <p className="text-yellow-800">
                <strong>Important Medical Notice:</strong> Contracktions is a
                timing tool only and is not intended to provide medical advice,
                diagnosis, or treatment. Always consult with your healthcare
                provider about your labor progress and follow their specific
                instructions. This app does not replace professional medical
                care or emergency services.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Technical Information
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Browser Compatibility
                </h3>
                <p className="text-muted-foreground">
                  Contracktions works on all modern web browsers including
                  Chrome, Safari, Firefox, and Edge. It's optimized for mobile
                  devices and works on both iOS and Android.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Offline Usage</h3>
                <p className="text-muted-foreground">
                  Once loaded, the app works completely offline. Your
                  contraction data is automatically saved to your device's local
                  storage and will persist between sessions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Data Backup</h3>
                <p className="text-muted-foreground">
                  Since data is stored locally, we recommend exporting your
                  contraction data periodically as a backup. If you clear your
                  browser data or switch devices, your timing history will be
                  lost.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Support & Feedback</h2>
            <p className="mb-4">
              We're committed to providing a helpful tool for expectant mothers.
              If you encounter any issues or have suggestions for improvement,
              we'd love to hear from you.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <p className="text-blue-800">
                <strong>Remember:</strong> For any medical concerns or questions
                about your labor, always contact your healthcare provider first.
                This app is a tool to help you track timing, but your medical
                team is your best resource for guidance and care.
              </p>
            </div>
          </section>
        </article>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Start Tracking Your Contractions
          </Link>
        </div>
      </div>
    </div>
  );
}

