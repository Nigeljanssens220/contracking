import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Contracking",
  description:
    "Terms of service for using Contracking contraction timer. Important information about proper usage and medical disclaimers.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <h2 className="font-semibold text-red-800 mb-3">
              Important Medical Disclaimer
            </h2>
            <p className="text-red-700">
              Contracking is a timing tool only and is not intended to provide
              medical advice, diagnosis, or treatment. Always consult with your
              healthcare provider about your labor progress and follow their
              specific instructions.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using Contracking ("the Service"), you accept and
              agree to be bound by the terms and provision of this agreement.
            </p>
            <p className="mb-4">
              If you do not agree to these terms, please do not use the Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Description of Service
            </h2>
            <p className="mb-4">
              Contracking is a web-based application that provides tools for
              timing and tracking labor contractions. The Service includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Real-time contraction timer functionality</li>
              <li>
                Automatic calculation of contraction duration and intervals
              </li>
              <li>Visual charts and analytics for contraction patterns</li>
              <li>Data export capabilities</li>
              <li>Educational content about labor and contractions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Medical Disclaimer</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Not Medical Advice</h3>
              <p className="mb-4">
                The Service is provided for informational and timing purposes
                only. It is not intended as a substitute for professional
                medical advice, diagnosis, or treatment. Always seek the advice
                of your physician or other qualified healthcare provider with
                any questions you may have regarding a medical condition.
              </p>

              <h3 className="text-lg font-semibold">Emergency Situations</h3>
              <p className="mb-4">
                Never rely solely on this Service in emergency situations. If
                you believe you are experiencing a medical emergency, call your
                local emergency services immediately.
              </p>

              <h3 className="text-lg font-semibold">
                Healthcare Provider Consultation
              </h3>
              <p className="mb-4">
                Always follow the specific instructions provided by your
                healthcare provider regarding when to contact them or go to the
                hospital during labor. The Service's guidelines are general
                information only.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Proper Use of the Service
            </h2>
            <h3 className="text-lg font-semibold mb-2">Intended Use</h3>
            <p className="mb-4">
              The Service is designed for timing contractions during labor. It
              should be used as a tool to help you collect timing data to share
              with your healthcare provider.
            </p>

            <h3 className="text-lg font-semibold mb-2">
              User Responsibilities
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Use the Service as a timing tool only</li>
              <li>Consult healthcare providers for medical decisions</li>
              <li>Do not rely on the Service for emergency situations</li>
              <li>Backup your data regularly using the export feature</li>
              <li>
                Use the Service in accordance with medical professional guidance
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Data and Privacy</h2>
            <h3 className="text-lg font-semibold mb-2">Local Data Storage</h3>
            <p className="mb-4">
              All contraction data is stored locally on your device using
              browser local storage. We do not have access to this data, and it
              is not transmitted to our servers.
            </p>

            <h3 className="text-lg font-semibold mb-2">Data Loss</h3>
            <p className="mb-4">
              You are responsible for backing up your contraction data. Clearing
              browser data, uninstalling the app, or device issues may result in
              data loss. We cannot recover lost data.
            </p>

            <h3 className="text-lg font-semibold mb-2">Privacy Policy</h3>
            <p className="mb-4">
              For detailed information about how we handle privacy, please see
              our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Service Availability
            </h2>
            <h3 className="text-lg font-semibold mb-2">
              Uptime and Reliability
            </h3>
            <p className="mb-4">
              While we strive to maintain high availability, we cannot guarantee
              that the Service will be available 100% of the time. The Service
              may be temporarily unavailable due to maintenance, updates, or
              technical issues.
            </p>

            <h3 className="text-lg font-semibold mb-2">
              Offline Functionality
            </h3>
            <p className="mb-4">
              Once loaded, the Service works offline. However, initial loading
              requires an internet connection.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Limitation of Liability
            </h2>
            <p className="mb-4">
              The Service is provided "as is" without warranties of any kind. We
              are not liable for any damages arising from the use or inability
              to use the Service, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Medical decisions based on timing data</li>
              <li>Data loss or inaccurate timing</li>
              <li>Service unavailability during critical times</li>
              <li>Any medical outcomes or complications</li>
            </ul>
            <p className="mb-4">
              Your use of the Service is at your own risk, and you should always
              prioritize professional medical advice over any information or
              functionality provided by the Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Changes
              will be posted on this page with an updated date. Your continued
              use of the Service after changes are posted constitutes acceptance
              of the new terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="mb-4">
              If you have questions about these Terms of Service, you can
              contact us through our website or support channels.
            </p>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <p className="text-red-800">
                <strong>Medical Emergencies:</strong> These terms and contact
                information are for app-related questions only. For medical
                emergencies or questions about your labor, contact your
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

