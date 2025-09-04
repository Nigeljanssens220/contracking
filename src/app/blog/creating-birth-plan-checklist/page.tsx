import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, CalendarDays, Clock, FileText, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creating Your Birth Plan Checklist",
  description:
    "Step-by-step guide to creating a comprehensive birth plan that communicates your preferences to your healthcare team. Includes printable checklist and template.",
  keywords: [
    "birth plan",
    "birth plan checklist",
    "birth plan template",
    "labor preferences",
    "delivery preferences",
    "birth plan guide",
    "pregnancy planning",
    "childbirth planning",
  ],
  alternates: {
    canonical: "/blog/creating-birth-plan-checklist",
  },
  openGraph: {
    title: "Creating Your Birth Plan Checklist | Contracking",
    description:
      "Step-by-step guide to creating a comprehensive birth plan with printable checklist.",
    url: "https://contracking.me/blog/creating-birth-plan-checklist",
    images: ["/og-image.jpg"],
  },
};

export default function CreatingBirthPlanChecklistPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Creating Your Birth Plan Checklist",
            description:
              "Step-by-step guide to creating a comprehensive birth plan that communicates your preferences to your healthcare team.",
            image: "https://contracking.me/og-image.jpg",
            estimatedCost: {
              "@type": "MonetaryAmount",
              currency: "USD",
              value: "0",
            },
            totalTime: "PT30M",
            supply: [
              {
                "@type": "HowToSupply",
                name: "Birth plan template or checklist",
              },
              {
                "@type": "HowToSupply",
                name: "Pen or computer for writing",
              },
            ],
            step: [
              {
                "@type": "HowToStep",
                name: "Gather Information",
                text: "Research your options for labor and delivery preferences",
              },
              {
                "@type": "HowToStep",
                name: "Discuss with Partner",
                text: "Talk through preferences with your support person",
              },
              {
                "@type": "HowToStep",
                name: "Create Your Plan",
                text: "Write down your preferences using our checklist",
              },
              {
                "@type": "HowToStep",
                name: "Review with Provider",
                text: "Discuss your birth plan with your healthcare team",
              },
            ],
            author: {
              "@type": "Organization",
              name: "Contracking",
            },
            publisher: {
              "@type": "Organization",
              name: "Contracking",
            },
            datePublished: "2024-01-01",
            dateModified: "2024-01-01",
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
            <Badge variant="secondary">Planning</Badge>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Creating Your Birth Plan Checklist
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Step-by-step guide to creating a comprehensive birth plan that
            communicates your preferences to your healthcare team.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              January 1, 2024
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              10 min read
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8 text-lg">
            A birth plan is a document that outlines your preferences for labor
            and delivery. While birth doesn't always go according to plan,
            having your preferences documented helps your healthcare team
            provide care that aligns with your values and desires.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-amber-900 mb-2">
              Remember: Flexibility is Key
            </h3>
            <p className="text-amber-800 text-sm">
              Birth plans are preferences, not demands. Medical situations may
              require changes to your plan, and that's completely normal. The
              goal is communication, not rigid adherence to a document.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Step 1: Research Your Options
          </h2>

          <p className="text-muted-foreground mb-6">
            Before creating your birth plan, it's important to understand the
            options available to you. Research different approaches and discuss
            them with your healthcare provider.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Research Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Pain management options</li>
                  <li>• Labor positions and movement</li>
                  <li>• Interventions and procedures</li>
                  <li>• Immediate postpartum care</li>
                  <li>• Newborn procedures</li>
                  <li>• Breastfeeding support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Information Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Childbirth education classes</li>
                  <li>• Healthcare provider discussions</li>
                  <li>• Evidence-based pregnancy resources</li>
                  <li>• Hospital or birth center tours</li>
                  <li>• Trusted pregnancy websites and books</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Step 2: Birth Plan Categories
          </h2>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            Labor Environment
          </h3>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">
                    Atmosphere Preferences:
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>□ Dimmed lighting</li>
                    <li>□ Music or silence</li>
                    <li>□ Aromatherapy</li>
                    <li>□ Room temperature preferences</li>
                    <li>□ Photography/video permissions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Support People:</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ Partner present</li>
                    <li>□ Doula support</li>
                    <li>□ Family members</li>
                    <li>□ Children present (if applicable)</li>
                    <li>□ Religious/spiritual support</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            Pain Management
          </h3>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Natural Methods:</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ Breathing techniques</li>
                    <li>□ Movement and position changes</li>
                    <li>□ Hydrotherapy (shower/tub)</li>
                    <li>□ Massage and counter-pressure</li>
                    <li>□ Heat/cold therapy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Medical Options:</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ Epidural anesthesia</li>
                    <li>□ Nitrous oxide (laughing gas)</li>
                    <li>□ IV pain medications</li>
                    <li>□ Local anesthetics</li>
                    <li>□ Open to all options</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            Labor Positions and Mobility
          </h3>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Movement:</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ Freedom to walk</li>
                    <li>□ Position changes</li>
                    <li>□ Birthing ball use</li>
                    <li>□ Squatting bar</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Delivery Positions:</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ Upright positions</li>
                    <li>□ Side-lying</li>
                    <li>□ Squatting</li>
                    <li>□ Hands and knees</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Equipment:</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ Continuous fetal monitoring</li>
                    <li>□ Intermittent monitoring</li>
                    <li>□ Wireless monitoring</li>
                    <li>□ IV fluids</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            Delivery Preferences
          </h3>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Pushing and Delivery:</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ Directed vs. spontaneous pushing</li>
                    <li>□ Mirror to see baby's head</li>
                    <li>□ Touch baby's head while crowning</li>
                    <li>□ Episiotomy preferences</li>
                    <li>□ Vacuum/forceps preferences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cord and Placenta:</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ Delayed cord clamping</li>
                    <li>□ Who cuts the cord</li>
                    <li>□ Cord blood banking</li>
                    <li>□ Placenta delivery preferences</li>
                    <li>□ Placenta examination/keeping</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            Immediate Postpartum
          </h3>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Baby Care:</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ Immediate skin-to-skin contact</li>
                    <li>□ First feeding preferences</li>
                    <li>□ Eye ointment timing</li>
                    <li>□ Vitamin K shot</li>
                    <li>□ Newborn procedures timing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Recovery:</h4>
                  <ul className="text-sm space-y-1">
                    <li>□ Rooming-in preferences</li>
                    <li>□ Visitor policies</li>
                    <li>□ Breastfeeding support</li>
                    <li>□ Pain management postpartum</li>
                    <li>□ Length of stay preferences</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Step 3: Special Considerations
          </h2>

          <div className="space-y-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Multiple Birth Plans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Consider creating different versions of your birth plan for
                  different scenarios:
                </p>
                <ul className="text-sm space-y-1">
                  <li>
                    • <strong>Plan A:</strong> Ideal vaginal delivery
                  </li>
                  <li>
                    • <strong>Plan B:</strong> Vaginal delivery with
                    interventions
                  </li>
                  <li>
                    • <strong>Plan C:</strong> Planned cesarean delivery
                  </li>
                  <li>
                    • <strong>Plan D:</strong> Emergency cesarean delivery
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Cultural and Religious Considerations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Religious ceremonies or prayers</li>
                  <li>• Cultural practices around birth</li>
                  <li>• Dietary restrictions</li>
                  <li>• Modesty preferences</li>
                  <li>• Language interpretation needs</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Step 4: Writing Your Birth Plan
          </h2>

          <p className="text-muted-foreground mb-6">
            Keep your birth plan concise, positive, and flexible. Focus on your
            most important preferences and be open to medical recommendations.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-lg text-green-700">
                  Effective Birth Plan Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• Keep it to 1-2 pages maximum</li>
                  <li>• Use positive, collaborative language</li>
                  <li>• Prioritize your most important preferences</li>
                  <li>• Include "I prefer" rather than "I demand"</li>
                  <li>• Leave room for medical recommendations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-lg text-orange-700">
                  Things to Avoid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-orange-800 text-sm">
                  <li>• Overly detailed or lengthy documents</li>
                  <li>• Demanding or inflexible language</li>
                  <li>• Unrealistic expectations</li>
                  <li>• Refusing all medical interventions</li>
                  <li>• Not discussing with your provider first</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Birth Plan Template
          </h2>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-slate-900 mb-4">
              Basic Birth Plan Template
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <strong>Mother's Name:</strong> _____________________{" "}
                <strong>Due Date:</strong> _____________________
              </div>
              <div>
                <strong>Partner's Name:</strong> _____________________{" "}
                <strong>Healthcare Provider:</strong> _____________________
              </div>
              <div>
                <strong>Hospital/Birth Center:</strong> _____________________{" "}
                <strong>Pediatrician:</strong> _____________________
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            Labor Preferences
          </h3>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Environment:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>□ I would like the room to be quiet and calm</li>
                    <li>□ I prefer dim lighting during labor</li>
                    <li>□ I would like to play my own music</li>
                    <li>□ I prefer minimal interruptions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">
                    Movement and Positioning:
                  </h4>
                  <ul className="space-y-1 ml-4">
                    <li>□ I would like to move freely during labor</li>
                    <li>
                      □ I prefer to avoid continuous fetal monitoring if
                      possible
                    </li>
                    <li>
                      □ I would like access to a birthing ball, squat bar, or
                      other positioning aids
                    </li>
                    <li>□ I prefer to labor in upright positions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Pain Management:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>
                      □ I plan to use natural pain management techniques first
                    </li>
                    <li>□ I am open to an epidural if needed</li>
                    <li>
                      □ Please offer pain relief options without my asking
                    </li>
                    <li>
                      □ I prefer to request pain relief when I feel I need it
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            Delivery Preferences
          </h3>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Pushing and Birth:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>□ I prefer to push when I feel the urge</li>
                    <li>□ I would like to see the birth with a mirror</li>
                    <li>
                      □ I prefer to avoid an episiotomy unless medically
                      necessary
                    </li>
                    <li>□ I would like to touch my baby's head as it crowns</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">
                    Immediately After Birth:
                  </h4>
                  <ul className="space-y-1 ml-4">
                    <li>□ I would like immediate skin-to-skin contact</li>
                    <li>□ I prefer delayed cord clamping</li>
                    <li>□ My partner would like to cut the cord</li>
                    <li>□ I plan to breastfeed immediately</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-xl font-semibold text-foreground mb-3">
            Newborn Care Preferences
          </h3>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">
                    Immediate Newborn Care:
                  </h4>
                  <ul className="space-y-1 ml-4">
                    <li>
                      □ I prefer all newborn procedures be done in my presence
                    </li>
                    <li>□ I consent to Vitamin K injection</li>
                    <li>□ I consent to eye ointment</li>
                    <li>
                      □ I prefer to delay non-essential procedures for bonding
                      time
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Feeding:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>□ I plan to breastfeed exclusively</li>
                    <li>
                      □ I am open to formula supplementation if medically
                      necessary
                    </li>
                    <li>□ I would like lactation consultant support</li>
                    <li>
                      □ Please no bottles or pacifiers unless medically
                      necessary
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Step 5: Reviewing and Sharing
          </h2>

          <p className="text-muted-foreground mb-6">
            Once you've completed your birth plan, it's important to review it
            with your healthcare provider and birth support team.
          </p>

          <div className="space-y-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Review with Healthcare Provider
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>
                    • Schedule a dedicated appointment to discuss your birth
                    plan
                  </li>
                  <li>• Ask about hospital or birth center policies</li>
                  <li>• Understand which preferences may not be possible</li>
                  <li>• Get clarification on medical procedures</li>
                  <li>• Make revisions based on professional input</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Share with Your Team</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Give copies to your partner and doula</li>
                  <li>• Include in your hospital bag</li>
                  <li>• Send to your healthcare provider's office</li>
                  <li>• Keep a digital copy on your phone</li>
                  <li>• Review with labor and delivery nurses upon arrival</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Sample Birth Plan Language
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-blue-900 mb-3">
              Positive, Collaborative Phrasing
            </h4>
            <div className="grid md:grid-cols-2 gap-6 text-blue-800 text-sm">
              <div>
                <h5 className="font-medium mb-2">Instead of saying:</h5>
                <ul className="space-y-1">
                  <li>• "I don't want..."</li>
                  <li>• "No interventions"</li>
                  <li>• "I refuse..."</li>
                  <li>• "I demand..."</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Try saying:</h5>
                <ul className="space-y-1">
                  <li>
                    • "I would prefer to avoid... unless medically necessary"
                  </li>
                  <li>
                    • "I hope to have a natural birth with minimal
                    interventions"
                  </li>
                  <li>• "I would like to discuss alternatives to..."</li>
                  <li>• "It's important to me that..."</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <Link
              href="/resources/birth-plan-template"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Download Printable Birth Plan Template
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Remember: Plans Can Change
          </h2>

          <p className="text-muted-foreground mb-6">
            The most important thing to remember about birth plans is that
            they're flexible documents. Medical situations, labor progression,
            and your own feelings may require adjustments to your original plan.
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-purple-900 mb-3">
              Staying Flexible
            </h4>
            <ul className="space-y-2 text-purple-800">
              <li>• Trust your healthcare team's expertise</li>
              <li>• Be open to recommendations during labor</li>
              <li>
                • Remember that a healthy baby and mother are the top priorities
              </li>
              <li>• Don't feel like you've "failed" if your plan changes</li>
              <li>• Focus on the experience, not just the plan</li>
            </ul>
          </div>

          <div className="text-center mt-12 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Ready for Labor?
            </h3>
            <p className="text-muted-foreground mb-4">
              Use our contraction timer to track your labor progress and
              communicate effectively with your healthcare team.
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

