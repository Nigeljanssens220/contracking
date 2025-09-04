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
  CheckCircle,
  Clock,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complete Guide to Labor Preparation",
  description:
    "Everything you need to know to prepare for labor, from early signs to hospital arrival. A comprehensive guide for expectant mothers covering physical preparation, timing contractions, and when to seek medical care.",
  keywords: [
    "labor preparation",
    "pregnancy preparation",
    "childbirth preparation",
    "labor signs",
    "when to go to hospital",
    "contraction timing",
    "birth plan",
    "labor checklist",
  ],
  alternates: {
    canonical: "/blog/complete-guide-labor-preparation",
  },
  openGraph: {
    title: "Complete Guide to Labor Preparation | Contracking",
    description:
      "Everything you need to know to prepare for labor, from early signs to hospital arrival.",
    url: "https://contracking.me/blog/complete-guide-labor-preparation",
    images: ["/og-image.jpg"],
  },
};

export default function CompleteLaborPreparationGuide() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Complete Guide to Labor Preparation",
            description:
              "Everything you need to know to prepare for labor, from early signs to hospital arrival.",
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
            datePublished: "2024-01-15",
            dateModified: "2024-01-15",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://contracking.me/blog/complete-guide-labor-preparation",
            },
            articleSection: "Pregnancy Education",
            about: {
              "@type": "MedicalCondition",
              name: "Labor and Delivery",
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
            <Badge variant="secondary">Preparation</Badge>
            <Badge variant="outline">Featured</Badge>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Complete Guide to Labor Preparation
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Everything you need to know to prepare for labor, from early signs
            to hospital arrival. A comprehensive guide for expectant mothers.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              January 15, 2024
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              12 min read
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  Important Medical Note
                </h3>
                <p className="text-blue-800 text-sm">
                  This guide provides educational information only. Always
                  follow your healthcare provider's specific instructions and
                  contact them immediately if you have concerns about your labor
                  or pregnancy.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Understanding Labor Stages
          </h2>

          <p className="text-muted-foreground mb-6">
            Labor is divided into three main stages, each with distinct
            characteristics and duration. Understanding these stages helps you
            prepare mentally and physically for the birth of your baby.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Stage 1: Early Labor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Contractions begin and cervix starts to dilate. This is
                  typically the longest stage.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Contractions 5-20 minutes apart</li>
                  <li>• Cervix dilates 0-6 cm</li>
                  <li>• Can last 12-20 hours</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Stage 2: Active Labor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Cervix fully dilates and baby moves through birth canal.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Contractions 2-3 minutes apart</li>
                  <li>• Cervix dilates 6-10 cm</li>
                  <li>• Can last 30 minutes to 3 hours</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Stage 3: Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Baby is born and placenta is delivered.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Pushing and delivery</li>
                  <li>• Placenta delivery</li>
                  <li>• Usually 5-30 minutes</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Physical Preparation
          </h2>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            Exercise and Positioning
          </h3>
          <p className="text-muted-foreground mb-4">
            Regular exercise during pregnancy can help prepare your body for
            labor. Focus on exercises that strengthen your core, improve
            flexibility, and practice breathing techniques.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-green-900 mb-3">
              Recommended Exercises
            </h4>
            <ul className="space-y-2 text-green-800">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Prenatal yoga:</strong> Improves flexibility and
                  teaches breathing techniques
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Walking:</strong> Helps with positioning and endurance
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Squats:</strong> Strengthens legs and opens pelvis
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Pelvic tilts:</strong> Helps with back pain and
                  positioning
                </span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            Breathing Techniques
          </h3>
          <p className="text-muted-foreground mb-4">
            Proper breathing techniques can help you manage pain and stay calm
            during contractions. Practice these techniques regularly before
            labor begins.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Deep Breathing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Slow, deep breaths help you relax and provide oxygen to your
                  baby.
                </p>
                <ol className="text-sm space-y-1 list-decimal list-inside">
                  <li>Inhale slowly through your nose for 4 counts</li>
                  <li>Hold for 2 counts</li>
                  <li>Exhale slowly through your mouth for 6 counts</li>
                  <li>Repeat throughout contraction</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Patterned Breathing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Structured breathing patterns help maintain focus during
                  intense contractions.
                </p>
                <ol className="text-sm space-y-1 list-decimal list-inside">
                  <li>Light breathing: Quick, shallow breaths</li>
                  <li>Modified paced breathing: "Hee-hee-hoo" pattern</li>
                  <li>Transition breathing: Panting to avoid pushing</li>
                  <li>Practice with partner for support</li>
                </ol>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Mental and Emotional Preparation
          </h2>

          <p className="text-muted-foreground mb-6">
            Mental preparation is just as important as physical preparation.
            Labor can be intense and unpredictable, so developing coping
            strategies and maintaining a positive mindset is crucial.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            Visualization and Relaxation
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong>Practice visualization:</strong> Imagine a positive
                birth experience and visualize your cervix opening and baby
                moving down
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong>Learn relaxation techniques:</strong> Progressive muscle
                relaxation, meditation, or guided imagery
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong>Create positive affirmations:</strong> "My body knows
                how to birth my baby" or "Each contraction brings me closer to
                meeting my baby"
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            When to Use Your Contraction Timer
          </h2>

          <p className="text-muted-foreground mb-4">
            Timing contractions is crucial for determining when to head to the
            hospital. Use your contraction timer when you notice regular,
            rhythmic contractions.
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-purple-900 mb-3">
              The 5-1-1 Rule
            </h4>
            <p className="text-purple-800 mb-3">
              Contact your healthcare provider when contractions are:
            </p>
            <ul className="space-y-2 text-purple-800">
              <li>
                <strong>5 minutes apart</strong> (or closer)
              </li>
              <li>
                <strong>1 minute long</strong> (lasting 60 seconds or more)
              </li>
              <li>
                <strong>1 hour</strong> of this pattern consistently
              </li>
            </ul>
          </div>

          <div className="text-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Timing Contractions
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Hospital Bag Essentials
          </h2>

          <p className="text-muted-foreground mb-6">
            Pack your hospital bag around 36 weeks of pregnancy. Having
            everything ready reduces stress when labor begins.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">For Mom</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Comfortable labor gown or your own clothes</li>
                  <li>• Nursing bras and comfortable underwear</li>
                  <li>• Toiletries and personal care items</li>
                  <li>• Phone charger and camera</li>
                  <li>• Snacks and water bottle</li>
                  <li>• Going-home outfit (maternity size)</li>
                  <li>• Important documents and insurance cards</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">For Baby</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Going-home outfit (newborn and 0-3 months)</li>
                  <li>• Diapers (though hospital usually provides)</li>
                  <li>• Blankets and swaddles</li>
                  <li>• Car seat (properly installed)</li>
                  <li>• Burp cloths and bibs</li>
                  <li>• Any special items for photos</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Creating Your Birth Plan
          </h2>

          <p className="text-muted-foreground mb-6">
            A birth plan helps communicate your preferences to your healthcare
            team. Remember that flexibility is key, as labor doesn't always go
            according to plan.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            Key Areas to Consider
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong>Pain management preferences:</strong> Natural methods,
                epidural, or other medications
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong>Labor positions:</strong> Walking, birthing ball, water
                birth, or specific positions
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong>Support people:</strong> Who you want present during
                labor and delivery
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <strong>Immediate postpartum:</strong> Skin-to-skin contact,
                cord cutting, feeding preferences
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Emergency Situations
          </h2>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-red-900 mb-3">
              Call Your Healthcare Provider Immediately If:
            </h4>
            <ul className="space-y-2 text-red-800">
              <li>• Water breaks with green or brown fluid</li>
              <li>• Severe bleeding</li>
              <li>• Baby's movements decrease significantly</li>
              <li>• Severe headache with vision changes</li>
              <li>
                • Contractions are very painful and close together suddenly
              </li>
              <li>• You feel like you need to push</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Final Preparations
          </h2>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            Week 36-40 Checklist
          </h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span>Install and test your car seat</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span>Pack your hospital bag and keep it ready</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span>Practice timing contractions with your partner</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span>Review your birth plan with your healthcare provider</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span>Prepare your home for postpartum recovery</span>
            </li>
          </ul>

          <div className="text-center mt-12 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Ready to Track Your Contractions?
            </h3>
            <p className="text-muted-foreground mb-4">
              Use our free contraction timer to monitor your labor progress
              accurately.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Contraction Timer
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
                    href="/blog/understanding-different-types-contractions"
                    className="hover:text-primary transition-colors"
                  >
                    Understanding Different Types of Contractions
                  </Link>
                </CardTitle>
                <CardDescription>
                  Learn to distinguish between Braxton Hicks and real labor
                  contractions.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link
                    href="/resources/hospital-bag-checklist"
                    className="hover:text-primary transition-colors"
                  >
                    Hospital Bag Checklist
                  </Link>
                </CardTitle>
                <CardDescription>
                  Complete printable checklist for packing your hospital bag.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}

