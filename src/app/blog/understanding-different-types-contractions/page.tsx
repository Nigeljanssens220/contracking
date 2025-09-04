import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertTriangle,
  ArrowLeft,
  CalendarDays,
  Clock,
  Info,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Understanding Different Types of Contractions",
  description:
    "Learn to distinguish between Braxton Hicks, early labor, and active labor contractions. Understand what each type feels like, when they occur, and what action to take.",
  keywords: [
    "types of contractions",
    "Braxton Hicks contractions",
    "real labor contractions",
    "false labor",
    "early labor contractions",
    "active labor contractions",
    "contraction differences",
    "labor signs",
  ],
  alternates: {
    canonical: "/blog/understanding-different-types-contractions",
  },
  openGraph: {
    title: "Understanding Different Types of Contractions | Contracking",
    description:
      "Learn to distinguish between Braxton Hicks and real labor contractions.",
    url: "https://contracking.me/blog/understanding-different-types-contractions",
    images: ["/og-image.jpg"],
  },
};

export default function UnderstandingContractionsPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Understanding Different Types of Contractions",
            description:
              "Learn to distinguish between Braxton Hicks, early labor, and active labor contractions.",
            author: {
              "@type": "Organization",
              name: "Contracking",
            },
            publisher: {
              "@type": "Organization",
              name: "Contracking",
              logo: {
                "@type": "ImageObject",
                url: "https://contracking.me/icon-192.png",
              },
            },
            datePublished: "2024-01-10",
            dateModified: "2024-01-10",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://contracking.me/blog/understanding-different-types-contractions",
            },
            articleSection: "Pregnancy Education",
            about: {
              "@type": "MedicalCondition",
              name: "Labor Contractions",
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">Education</Badge>
            <Badge variant="outline">Featured</Badge>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Understanding Different Types of Contractions
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Learn to distinguish between Braxton Hicks, early labor, and active
            labor contractions. Know what to expect and when to take action.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              January 10, 2024
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />8 min read
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  Quick Reference
                </h3>
                <p className="text-blue-800 text-sm">
                  Use this guide alongside your contraction timer to better
                  understand what you're experiencing. When in doubt, always
                  contact your healthcare provider.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Braxton Hicks Contractions (Practice Contractions)
          </h2>

          <p className="text-muted-foreground mb-6">
            Braxton Hicks contractions are often called "practice contractions"
            because they help your uterus prepare for labor. They typically
            start in the second trimester and become more noticeable as your due
            date approaches.
          </p>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg text-orange-700">
                Braxton Hicks Characteristics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">What They Feel Like:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Tightening sensation across the belly</li>
                    <li>• Uncomfortable but not painful</li>
                    <li>• Belly becomes hard then relaxes</li>
                    <li>• May feel like menstrual cramps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Timing Pattern:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Irregular timing and intensity</li>
                    <li>• Don't get stronger over time</li>
                    <li>• May stop with movement or rest</li>
                    <li>• Usually last 30-60 seconds</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-orange-900 mb-3">
              Managing Braxton Hicks
            </h4>
            <ul className="space-y-2 text-orange-800">
              <li>• Change positions or take a walk</li>
              <li>• Drink water to stay hydrated</li>
              <li>• Take a warm bath</li>
              <li>• Practice breathing techniques</li>
              <li>• Rest if you've been active</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Early Labor Contractions
          </h2>

          <p className="text-muted-foreground mb-6">
            Early labor contractions are the real deal - they're working to
            dilate your cervix and are different from Braxton Hicks in several
            key ways.
          </p>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg text-green-700">
                Early Labor Characteristics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">What They Feel Like:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Menstrual-like cramping</li>
                    <li>• Lower back pain that radiates forward</li>
                    <li>• Pressure in pelvis</li>
                    <li>• Gradually increasing intensity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Timing Pattern:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Regular pattern develops</li>
                    <li>• 5-20 minutes apart initially</li>
                    <li>• Last 30-70 seconds</li>
                    <li>• Don't stop with movement</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-green-900 mb-3">
              What to Do During Early Labor
            </h4>
            <ul className="space-y-2 text-green-800">
              <li>
                • <strong>Start timing contractions</strong> - Use your
                contraction timer
              </li>
              <li>• Rest and conserve energy</li>
              <li>• Eat light snacks and stay hydrated</li>
              <li>• Take a shower or bath for comfort</li>
              <li>
                • Contact your healthcare provider when contractions are regular
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Active Labor Contractions
          </h2>

          <p className="text-muted-foreground mb-6">
            Active labor contractions are intense and work to fully dilate your
            cervix. This is when most people head to the hospital or birthing
            center.
          </p>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg text-purple-700">
                Active Labor Characteristics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">What They Feel Like:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Strong, intense pain</li>
                    <li>• Peaks and valleys pattern</li>
                    <li>• Radiates from back to front</li>
                    <li>• Difficult to talk through</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Timing Pattern:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 3-5 minutes apart</li>
                    <li>• Last 45-90 seconds</li>
                    <li>• Consistent and regular</li>
                    <li>• Get stronger over time</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-purple-900 mb-3">
              The 5-1-1 Rule for Hospital Timing
            </h4>
            <p className="text-purple-800 mb-3">
              Head to the hospital when contractions are:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-purple-800">
              <div className="text-center">
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm">Minutes Apart</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1</div>
                <div className="text-sm">Minute Long</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1</div>
                <div className="text-sm">Hour Consistently</div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Comparison Chart
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">
                    Aspect
                  </th>
                  <th className="border border-border p-3 text-left font-semibold">
                    Braxton Hicks
                  </th>
                  <th className="border border-border p-3 text-left font-semibold">
                    Early Labor
                  </th>
                  <th className="border border-border p-3 text-left font-semibold">
                    Active Labor
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3 font-medium">
                    Timing
                  </td>
                  <td className="border border-border p-3">Irregular</td>
                  <td className="border border-border p-3">5-20 min apart</td>
                  <td className="border border-border p-3">3-5 min apart</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">
                    Duration
                  </td>
                  <td className="border border-border p-3">30-60 seconds</td>
                  <td className="border border-border p-3">30-70 seconds</td>
                  <td className="border border-border p-3">45-90 seconds</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">
                    Intensity
                  </td>
                  <td className="border border-border p-3">Mild to moderate</td>
                  <td className="border border-border p-3">Moderate</td>
                  <td className="border border-border p-3">
                    Strong to intense
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">
                    Pattern
                  </td>
                  <td className="border border-border p-3">No clear pattern</td>
                  <td className="border border-border p-3">Becoming regular</td>
                  <td className="border border-border p-3">Very regular</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">
                    Location
                  </td>
                  <td className="border border-border p-3">Front of belly</td>
                  <td className="border border-border p-3">Back and front</td>
                  <td className="border border-border p-3">
                    Wraps around body
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">
                    Response to Movement
                  </td>
                  <td className="border border-border p-3">Often stops</td>
                  <td className="border border-border p-3">Continues</td>
                  <td className="border border-border p-3">
                    Continues/intensifies
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            When to Start Timing
          </h2>

          <p className="text-muted-foreground mb-6">
            Not every contraction needs to be timed, but knowing when to start
            timing can help you determine if you're in labor.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-lg text-green-700">
                  Start Timing When:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>
                    • Contractions feel different from usual Braxton Hicks
                  </li>
                  <li>• They're becoming more regular</li>
                  <li>• Intensity is increasing</li>
                  <li>• They continue despite changing position</li>
                  <li>• You feel they might be "the real thing"</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-lg text-orange-700">
                  Don't Need to Time:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-orange-800 text-sm">
                  <li>• Occasional irregular tightening</li>
                  <li>• Contractions that stop with movement</li>
                  <li>• Very mild sensations</li>
                  <li>• Contractions only in front of belly</li>
                  <li>• No clear pattern after an hour</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Signs of True Labor
          </h2>

          <p className="text-muted-foreground mb-6">
            True labor contractions have specific characteristics that
            distinguish them from false labor. Here's what to look for:
          </p>

          <div className="space-y-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Progressive Pattern</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Real labor contractions follow the "3 P's": they become more{" "}
                  <strong>Powerful</strong>, more <strong>Prolonged</strong>,
                  and occur with greater <strong>Proximity</strong> (closer
                  together) over time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cervical Changes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  True labor contractions cause progressive cervical dilation
                  and effacement. Your healthcare provider can confirm these
                  changes during examination.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Physical Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Bloody show (mucus plug)</li>
                  <li>• Water breaking (rupture of membranes)</li>
                  <li>• Lower back pain that doesn't go away</li>
                  <li>• Nausea or vomiting</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Using Your Contraction Timer Effectively
          </h2>

          <p className="text-muted-foreground mb-6">
            Once you've determined you're experiencing true labor contractions,
            proper timing becomes crucial for communicating with your healthcare
            provider.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What to Track</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    • <strong>Duration:</strong> How long each contraction lasts
                  </li>
                  <li>
                    • <strong>Frequency:</strong> Time between contraction
                    starts
                  </li>
                  <li>
                    • <strong>Intensity:</strong> Subjective pain level (1-10)
                  </li>
                  <li>
                    • <strong>Pattern:</strong> Overall trends and consistency
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Timing Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    • Start timing from the beginning of one contraction to the
                    beginning of the next
                  </li>
                  <li>• Track for at least one hour to establish pattern</li>
                  <li>• Note any changes in intensity or pattern</li>
                  <li>• Share data with your healthcare provider</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Timing Contractions Now
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            When to Contact Your Healthcare Provider
          </h2>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 mb-3">
                  Call Immediately If:
                </h4>
                <ul className="space-y-2 text-red-800">
                  <li>
                    • Contractions are 5 minutes apart, lasting 1 minute, for 1
                    hour (5-1-1 rule)
                  </li>
                  <li>
                    • Water breaks, especially if fluid is green, brown, or
                    bloody
                  </li>
                  <li>• Severe bleeding</li>
                  <li>• Baby's movements decrease significantly</li>
                  <li>• Severe headache with vision changes</li>
                  <li>• You feel the urge to push</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Common Questions
          </h2>

          <div className="space-y-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Can Braxton Hicks turn into real labor?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sometimes what starts as Braxton Hicks can transition into
                  early labor. If you notice the contractions becoming more
                  regular, intense, and frequent, start timing them to track the
                  pattern.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How long can early labor last?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Early labor can last anywhere from hours to days, especially
                  for first-time mothers. This is normal and gives you time to
                  prepare mentally and physically for active labor.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What if my contractions don't follow the textbook pattern?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Every labor is different. Some people have irregular
                  contractions throughout labor, while others may have very
                  quick progression. Trust your instincts and communicate with
                  your healthcare provider about any concerns.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Ready to Time Your Contractions?
            </h3>
            <p className="text-muted-foreground mb-4">
              Use our accurate contraction timer to track duration, frequency,
              and patterns.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Open Contraction Timer
            </Link>
          </div>
        </article>

        {/* Related Articles */}
        <section className="mt-12 pt-8 border-t border-border">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Related Articles
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link
                    href="/blog/complete-guide-labor-preparation"
                    className="hover:text-primary transition-colors"
                  >
                    Complete Guide to Labor Preparation
                  </Link>
                </CardTitle>
                <CardDescription>
                  Everything you need to know to prepare for labor and delivery.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link
                    href="/how-to-use"
                    className="hover:text-primary transition-colors"
                  >
                    How to Use the Contraction Timer
                  </Link>
                </CardTitle>
                <CardDescription>
                  Step-by-step guide to using our contraction timing tool
                  effectively.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}

