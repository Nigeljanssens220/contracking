import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Contracking",
  description:
    "Our privacy policy explains how Contracking protects your personal data and contraction tracking information. All data stays private on your device.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <h2 className="font-semibold text-green-800 mb-3">
              Privacy-First Design
            </h2>
            <p className="text-green-700">
              Contracking is designed with privacy as the top priority. All your
              contraction data stays on your device and is never transmitted to
              our servers or any third parties.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Information We Collect
            </h2>
            <h3 className="text-lg font-semibold mb-2">Personal Data: None</h3>
            <p className="mb-4">
              We do not collect, store, or process any personal information. You
              can use Contracking without providing any personal details,
              creating accounts, or sharing any identifying information.
            </p>

            <h3 className="text-lg font-semibold mb-2">
              Contraction Data: Local Only
            </h3>
            <p className="mb-4">
              All contraction timing data (start times, durations, intervals) is
              stored exclusively on your device using your browser's local
              storage. This data never leaves your device.
            </p>

            <h3 className="text-lg font-semibold mb-2">
              Usage Analytics: Minimal
            </h3>
            <p className="mb-4">
              We may collect basic, anonymous usage statistics to improve the
              app (such as page views and feature usage), but this data cannot
              be linked to you personally or to your contraction data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              How We Protect Your Privacy
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>No user accounts or registration required</li>
              <li>No cookies used for tracking</li>
              <li>No third-party analytics that track individuals</li>
              <li>No data sharing with partners or advertisers</li>
              <li>No email collection or marketing communications</li>
              <li>All data processing happens locally on your device</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Your Data Rights</h2>
            <h3 className="text-lg font-semibold mb-2">Complete Control</h3>
            <p className="mb-4">
              Since all data is stored locally on your device, you have complete
              control over your contraction data:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>View all your data anytime in the app</li>
              <li>Export your data to keep permanent records</li>
              <li>Delete individual contractions or clear all data</li>
              <li>
                No data remains on our servers (because we don't store any)
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Data Portability</h3>
            <p className="mb-4">
              You can export your contraction data at any time in standard
              formats to share with healthcare providers or transfer to other
              devices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Medical Privacy</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
              <h3 className="font-semibold text-blue-800 mb-3">
                HIPAA Compliance
              </h3>
              <p className="text-blue-700 mb-4">
                While Contracking is not a covered entity under HIPAA, we follow
                privacy principles that align with medical data protection
                standards:
              </p>
              <ul className="text-blue-700 space-y-1">
                <li>• No transmission of health information</li>
                <li>• No storage of personal health data on servers</li>
                <li>• No sharing of health information with third parties</li>
                <li>• User maintains complete control over their data</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Third-Party Services
            </h2>
            <p className="mb-4">
              Contracking is designed to minimize third-party dependencies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Web Hosting</strong>: Static files are served through
                secure hosting providers, but no personal data is transmitted
              </li>
              <li>
                <strong>Analytics</strong>: If enabled, only anonymous usage
                statistics are collected without personal identification
              </li>
              <li>
                <strong>No Advertising</strong>: We do not use advertising
                networks or tracking pixels
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <h3 className="text-lg font-semibold mb-2">
              Local Storage Security
            </h3>
            <p className="mb-4">
              Your contraction data is stored using your browser's secure local
              storage mechanism. This data is:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Isolated to your browser and device</li>
              <li>Not accessible to other websites</li>
              <li>Protected by your device's security measures</li>
              <li>Automatically encrypted by modern browsers</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">
              Data Backup Recommendations
            </h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-800">
                <strong>Important:</strong> Since data is stored locally,
                clearing your browser data or switching devices will result in
                data loss. We recommend regularly exporting your contraction
                data as a backup.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Changes to This Policy
            </h2>
            <p className="mb-4">
              We may update this privacy policy occasionally to reflect changes
              in our practices or legal requirements. Any changes will be posted
              on this page with an updated date.
            </p>
            <p className="mb-4">
              Since we don't collect contact information, we cannot notify users
              directly of policy changes. We recommend checking this page
              periodically if you use the app regularly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-4">
              If you have questions about this privacy policy or our privacy
              practices, you can contact us through our website or support
              channels.
            </p>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <p className="text-red-800">
                <strong>Medical Emergencies:</strong> This privacy policy and
                contact information are for app-related questions only. For
                medical emergencies or questions about your labor, contact your
                healthcare provider or emergency services immediately.
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

