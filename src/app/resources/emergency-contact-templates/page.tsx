import {
  DownloadCardButton,
  DownloadTemplatesButton,
  DownloadTemplatesHeaderButtons,
} from "@/components/DownloadTemplatesButtons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  CheckSquare,
  Copy,
  MapPin,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Contact Templates",
  description:
    "Pre-formatted contact cards and templates for quick communication during labor emergencies. Includes healthcare provider, hospital, and family contact templates.",
  keywords: [
    "emergency contact template",
    "labor emergency contacts",
    "hospital contact information",
    "healthcare provider contacts",
    "pregnancy emergency plan",
    "labor communication",
    "emergency phone numbers",
    "birth emergency contacts",
  ],
  alternates: {
    canonical: "/resources/emergency-contact-templates",
  },
  openGraph: {
    title: "Emergency Contact Templates | Contracking",
    description:
      "Pre-formatted contact cards and templates for labor emergencies.",
    url: "https://contracking.me/resources/emergency-contact-templates",
    images: ["/og-image.jpg"],
  },
};

export default function EmergencyContactTemplatesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Navigation */}
      <Link
        href="/resources"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Resources
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">Emergency</Badge>
          <Badge variant="outline">Template</Badge>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Emergency Contact Templates
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Pre-formatted contact cards and templates for quick communication
          during labor emergencies. Keep these easily accessible on your phone
          and in your hospital bag.
        </p>
        <DownloadTemplatesHeaderButtons />
      </header>

      {/* Emergency Numbers Card */}
      <Card className="mb-8 border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2 text-red-700">
            <AlertTriangle className="w-6 h-6" />
            Emergency Numbers Template
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white rounded-lg p-6 border border-red-200">
            <h3 className="font-bold text-lg mb-4 text-center">
              🚨 LABOR EMERGENCY CONTACTS 🚨
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-700">
                    Healthcare Provider
                  </h4>
                  <div className="text-sm space-y-1">
                    <p>Name: _________________________</p>
                    <p>Office: _________________________</p>
                    <p>Emergency/After Hours: _____________</p>
                    <p>Backup Provider: __________________</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-red-700">
                    Hospital/Birth Center
                  </h4>
                  <div className="text-sm space-y-1">
                    <p>Name: _________________________</p>
                    <p>Labor & Delivery: __________________</p>
                    <p>Main Number: ____________________</p>
                    <p>Address: ________________________</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-700">Support Team</h4>
                  <div className="text-sm space-y-1">
                    <p>Doula: __________________________</p>
                    <p>Birth Coach: ______________________</p>
                    <p>Pediatrician: ____________________</p>
                    <p>Lactation Consultant: ______________</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-red-700">
                    Family/Emergency
                  </h4>
                  <div className="text-sm space-y-1">
                    <p>Partner: _________________________</p>
                    <p>Emergency Contact: ________________</p>
                    <p>Childcare Contact: ________________</p>
                    <p>Backup Support: __________________</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-100 border border-red-200 rounded-lg">
              <p className="text-red-800 text-sm font-medium text-center">
                🆘 For TRUE EMERGENCIES call 911 immediately 🆘
              </p>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <Button variant="outline" size="sm">
              <Copy className="w-4 h-4 mr-2" />
              Copy Template
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Call Script */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Phone className="w-6 h-6 text-blue-600" />
            Labor Call Script Template
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">
              When Calling Your Healthcare Provider
            </h3>
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="font-medium mb-3">
                "Hi, this is [YOUR NAME]. I'm [WEEKS] weeks pregnant and I think
                I'm in labor."
              </p>

              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold">Contraction Information:</h4>
                  <ul className="ml-4 space-y-1">
                    <li>• "My contractions are [FREQUENCY] minutes apart"</li>
                    <li>• "They last about [DURATION] seconds each"</li>
                    <li>• "This pattern has been going for [TIME PERIOD]"</li>
                    <li>• "The intensity is [MILD/MODERATE/STRONG]"</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Other Symptoms:</h4>
                  <ul className="ml-4 space-y-1">
                    <li>• "My water [HAS/HAS NOT] broken"</li>
                    <li>• "I [HAVE/HAVE NOT] had a bloody show"</li>
                    <li>• "Baby is moving [NORMALLY/LESS THAN USUAL]"</li>
                    <li>• "I [AM/AM NOT] experiencing other symptoms"</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Questions to Ask:</h4>
                  <ul className="ml-4 space-y-1">
                    <li>• "Should I come to the hospital now?"</li>
                    <li>• "What should I do while I wait?"</li>
                    <li>• "When should I call back if things change?"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <Button variant="outline" size="sm">
              <Copy className="w-4 h-4 mr-2" />
              Copy Script
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Hospital Information Card */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <MapPin className="w-6 h-6 text-green-600" />
            Hospital Information Card
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h3 className="font-bold text-lg mb-4 text-center">
                HOSPITAL INFORMATION
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Hospital/Birth Center</h4>
                    <div className="text-sm space-y-1">
                      <p>Name: _________________________</p>
                      <p>Address: _______________________</p>
                      <p>___________________________</p>
                      <p>Labor & Delivery: ________________</p>
                      <p>Main Number: __________________</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold">Parking & Entrance</h4>
                    <div className="text-sm space-y-1">
                      <p>Parking Location: __________________</p>
                      <p>After-Hours Entrance: ______________</p>
                      <p>Labor & Delivery Floor: _____________</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Pre-Registration</h4>
                    <div className="text-sm space-y-1">
                      <p>Registration #: ____________________</p>
                      <p>Room Preference: _________________</p>
                      <p>Special Instructions: _______________</p>
                      <p>___________________________</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold">Insurance Information</h4>
                    <div className="text-sm space-y-1">
                      <p>Insurance: _______________________</p>
                      <p>Policy #: _________________________</p>
                      <p>Group #: ________________________</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-green-100 border border-green-200 rounded text-center">
                <p className="text-green-800 text-sm font-medium">
                  Keep this card in your wallet and take a photo for your phone
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <Button variant="outline" size="sm">
              <Copy className="w-4 h-4 mr-2" />
              Copy Template
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Childcare Emergency Plan */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Childcare Emergency Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="font-semibold text-orange-900 mb-4">
              If You Have Other Children
            </h3>
            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Primary Childcare</h4>
                  <div className="text-sm space-y-1">
                    <p>Name: _________________________</p>
                    <p>Phone: _________________________</p>
                    <p>Address: _______________________</p>
                    <p>Relationship: ____________________</p>
                    <p>Available: Days/Times ____________</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Backup Childcare</h4>
                  <div className="text-sm space-y-1">
                    <p>Name: _________________________</p>
                    <p>Phone: _________________________</p>
                    <p>Address: _______________________</p>
                    <p>Relationship: ____________________</p>
                    <p>Available: Days/Times ____________</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">
                  Important Information for Caregivers
                </h4>
                <div className="text-sm space-y-1">
                  <p>
                    Children's Names & Ages: ________________________________
                  </p>
                  <p>
                    Allergies/Medical Needs: _______________________________
                  </p>
                  <p>Bedtime Routine: ____________________________________</p>
                  <p>Emergency Pediatrician: _______________________________</p>
                  <p>School/Daycare Info: __________________________________</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <Button variant="outline" size="sm">
              <Copy className="w-4 h-4 mr-2" />
              Copy Childcare Template
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference Cards */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Quick Reference Cards</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Print these cards and keep them in your wallet, car, and hospital
            bag for quick access during emergencies.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Medical Emergency Card */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-bold text-red-700 mb-3 text-center">
                MEDICAL EMERGENCY
              </h4>
              <div className="bg-white rounded p-3 border border-red-200 text-sm">
                <div className="space-y-2">
                  <p>
                    <strong>Name:</strong> _____________________
                  </p>
                  <p>
                    <strong>Due Date:</strong> __________________
                  </p>
                  <p>
                    <strong>Blood Type:</strong> _________________
                  </p>
                  <p>
                    <strong>Allergies:</strong> ____________________
                  </p>
                  <p>
                    <strong>Medical Conditions:</strong> ____________
                  </p>
                  <p>
                    <strong>Medications:</strong> _________________
                  </p>
                  <p>
                    <strong>Healthcare Provider:</strong> ___________
                  </p>
                  <p>
                    <strong>Emergency Contact:</strong> ____________
                  </p>
                  <p>
                    <strong>Hospital:</strong> ____________________
                  </p>
                </div>
                <div className="mt-3 p-2 bg-red-100 rounded text-center">
                  <p className="text-red-800 font-medium">
                    Present this card to emergency personnel
                  </p>
                </div>
              </div>
              <div className="mt-2 text-center">
                <DownloadCardButton />
              </div>
            </div>

            {/* Labor Progress Card */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-bold text-purple-700 mb-3 text-center">
                LABOR PROGRESS
              </h4>
              <div className="bg-white rounded p-3 border border-purple-200 text-sm">
                <div className="space-y-2">
                  <p>
                    <strong>Labor Started:</strong> ________________
                  </p>
                  <p>
                    <strong>Water Broke:</strong> _________________
                  </p>
                  <p>
                    <strong>Bloody Show:</strong> ________________
                  </p>
                  <p>
                    <strong>Contraction Pattern:</strong> ____________
                  </p>
                  <p>
                    <strong>Duration:</strong> ____________________
                  </p>
                  <p>
                    <strong>Frequency:</strong> __________________
                  </p>
                  <p>
                    <strong>Intensity (1-10):</strong> _______________
                  </p>
                  <p>
                    <strong>Other Symptoms:</strong> ______________
                  </p>
                </div>
                <div className="mt-3 p-2 bg-purple-100 rounded text-center">
                  <p className="text-purple-800 font-medium">
                    Share this info with healthcare providers
                  </p>
                </div>
              </div>
              <div className="mt-2 text-center">
                <DownloadCardButton />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Communication Templates */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Text Message Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Pre-written messages you can quickly send to family and friends
            during labor.
          </p>

          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">
                Early Labor Update
              </h4>
              <div className="bg-white rounded p-3 border border-green-200">
                <p className="text-sm italic">
                  "Hi! I'm in early labor and heading to the hospital.
                  Contractions are [FREQUENCY] apart. Will update you when we
                  have news. Please keep us in your thoughts! ❤️"
                </p>
              </div>
              <Button variant="outline" size="sm" className="mt-2">
                <Copy className="w-4 h-4 mr-2" />
                Copy Message
              </Button>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">
                Baby Born Announcement
              </h4>
              <div className="bg-white rounded p-3 border border-blue-200">
                <p className="text-sm italic">
                  "🎉 [BABY NAME] has arrived! Born at [TIME] on [DATE].
                  [WEIGHT] and [LENGTH]. Mom and baby are doing well. More
                  details to follow when we're settled. Thank you for all your
                  love and support! 👶❤️"
                </p>
              </div>
              <Button variant="outline" size="sm" className="mt-2">
                <Copy className="w-4 h-4 mr-2" />
                Copy Message
              </Button>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-700 mb-2">
                Need Help Message
              </h4>
              <div className="bg-white rounded p-3 border border-orange-200">
                <p className="text-sm italic">
                  "Labor is progressing and we need help with [SPECIFIC NEED -
                  childcare/pet care/etc.]. Can you help us out? We're at
                  [HOSPITAL NAME]. Thank you!"
                </p>
              </div>
              <Button variant="outline" size="sm" className="mt-2">
                <Copy className="w-4 h-4 mr-2" />
                Copy Message
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Scenarios */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Emergency Scenario Plans</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-700 mb-3">
                Rapid Labor (Partner Not Available)
              </h4>
              <div className="bg-white rounded p-3 border border-red-200 text-sm">
                <ol className="space-y-1 list-decimal list-inside">
                  <li>Call 911 immediately</li>
                  <li>Call backup emergency contact: ____________________</li>
                  <li>Call healthcare provider: _________________________</li>
                  <li>Call hospital to notify them: ______________________</li>
                  <li>If driving yourself is unsafe, wait for ambulance</li>
                </ol>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-700 mb-3">
                Water Breaks at Night
              </h4>
              <div className="bg-white rounded p-3 border border-yellow-200 text-sm">
                <ol className="space-y-1 list-decimal list-inside">
                  <li>Note the time and fluid color/smell</li>
                  <li>Call healthcare provider's emergency line</li>
                  <li>Wake partner and prepare to leave</li>
                  <li>Put on a pad and comfortable clothes</li>
                  <li>Grab hospital bag and head to hospital</li>
                </ol>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-700 mb-3">
                Severe Bleeding or Emergency
              </h4>
              <div className="bg-white rounded p-3 border border-purple-200 text-sm">
                <ol className="space-y-1 list-decimal list-inside">
                  <li>
                    <strong>Call 911 immediately - don't drive yourself</strong>
                  </li>
                  <li>Call healthcare provider</li>
                  <li>Call partner/emergency contact</li>
                  <li>Lie down and stay calm</li>
                  <li>Have someone meet you at the hospital</li>
                </ol>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Digital Storage Tips */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Digital Storage Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Save to Your Phone</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Take photos of all contact cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Save important numbers in contacts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Add hospital address to maps app</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Create emergency contact group</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Save message templates as drafts</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Share with Partner</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Send copies of all contact information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Review emergency scenarios together</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Practice making the calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Ensure they know hospital route</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Give them copies of important documents</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <DownloadTemplatesButton size="lg" />
          <Link href="/">
            <Button size="lg">Start Timing Contractions</Button>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          Fill out these templates now, before labor begins
        </p>
      </div>

      {/* Related Resources */}
      <section className="mt-12 pt-8 border-t border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">
          Related Resources
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                <Link
                  href="/resources/labor-preparation-checklist"
                  className="hover:text-primary transition-colors"
                >
                  Labor Preparation Checklist
                </Link>
              </CardTitle>
              <CardDescription>
                Complete checklist for preparing for labor from 36 weeks onward.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                <Link
                  href="/faq"
                  className="hover:text-primary transition-colors"
                >
                  Frequently Asked Questions
                </Link>
              </CardTitle>
              <CardDescription>
                Common questions about labor, contractions, and when to seek
                help.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
}

