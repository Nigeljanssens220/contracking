import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Contracktions",
    default: "Contracktions - Free Labor Contraction Timer & Tracker",
  },
  description:
    "Track your labor contractions with precision using our free, easy-to-use contraction timer. Monitor duration, frequency, and patterns to help determine when to go to the hospital.",
  keywords: [
    "contraction timer",
    "labor tracker",
    "pregnancy app",
    "birth timing",
    "contraction counter",
    "labor progress",
    "pregnancy tools",
    "childbirth preparation",
  ],
  authors: [{ name: "Mama Pulse Watch" }],
  creator: "Mama Pulse Watch",
  publisher: "Mama Pulse Watch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://your-domain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Contracktions - Free Labor Contraction Timer & Tracker",
    description:
      "Track your labor contractions with precision using our free, easy-to-use contraction timer. Monitor duration, frequency, and patterns.",
    url: "https://your-domain.com",
    siteName: "Contracktions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contracktions - Labor Contraction Timer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contracktions - Free Labor Contraction Timer & Tracker",
    description:
      "Track your labor contractions with precision using our free, easy-to-use contraction timer.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "health",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              name: "Contracktions - Labor Contraction Timer",
              description:
                "Free contraction timer and tracker for monitoring labor progress",
              url: "https://your-domain.com",
              audience: {
                "@type": "PeopleAudience",
                audienceType: "Pregnant Women",
              },
              about: {
                "@type": "MedicalCondition",
                name: "Labor Contractions",
              },
              applicationCategory: "HealthApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              mainEntity: {
                "@type": "SoftwareApplication",
                name: "Contracktions",
                applicationCategory: "HealthApplication",
                operatingSystem: "Web Browser",
                description:
                  "Free labor contraction timer and tracker for expectant mothers",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
              },
            }),
          }}
        />
        {/* Medical/Health Specific Meta Tags */}
        <meta
          name="health-topics"
          content="pregnancy, labor, childbirth, contractions"
        />
        <meta
          name="audience"
          content="pregnant women, expectant mothers, healthcare professionals"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Contracktions" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gradient-subtle">
            <Navbar />
            {children}
          </div>
        </Providers>

        {/* Footer */}
        <footer className="bg-white/60 backdrop-blur-sm border-t border-slate-200/50">
          <div className="container mx-auto px-4 py-6 text-center">
            <p className="text-sm text-muted-foreground">
              Always consult with your healthcare provider about your labor
              progress. This tool is for tracking purposes only and does not
              replace professional medical advice.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

