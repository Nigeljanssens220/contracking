import { DownloadChecklistButtons } from "@/components/DownloadChecklistButtons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ChecklistData } from "@/lib/download-utils";
import {
  ArrowLeft,
  Baby,
  Briefcase,
  Calendar,
  CheckSquare,
  Download,
  FileText,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Labor Preparation Checklist",
  description:
    "Comprehensive checklist covering everything you need to prepare for labor, from 36 weeks to delivery day. Free downloadable and printable resource.",
  keywords: [
    "labor preparation checklist",
    "pregnancy checklist",
    "birth preparation",
    "labor planning",
    "delivery preparation",
    "pregnancy planning",
    "childbirth checklist",
    "hospital preparation",
  ],
  alternates: {
    canonical: "/resources/labor-preparation-checklist",
  },
  openGraph: {
    title: "Labor Preparation Checklist | Contracking",
    description:
      "Comprehensive checklist for preparing for labor and delivery.",
    url: "https://contracking.me/resources/labor-preparation-checklist",
    images: ["/og-image.jpg"],
  },
};

const checklistData: ChecklistData = {
  title: "Labor Preparation Checklist",
  description:
    "Comprehensive checklist covering everything you need to prepare for labor, from 36 weeks to delivery day.",
  sections: [
    {
      title: "36 Weeks - Initial Preparation",
      items: [
        { text: "Complete birth plan and review with healthcare provider" },
        { text: "Pack hospital bag (keep it accessible)" },
        { text: "Install car seat and have it inspected" },
        { text: "Confirm childcare arrangements for other children" },
        { text: "Prepare freezer meals for postpartum period" },
        { text: "Wash and organize baby clothes (newborn and 0-3 months)" },
        { text: "Set up nursery essentials" },
        { text: "Review insurance coverage and hospital pre-registration" },
      ],
    },
    {
      title: "Emergency Preparedness",
      items: [
        { text: "Program important phone numbers into phone" },
        { text: "Healthcare provider's emergency line: ___________" },
        { text: "Hospital labor & delivery: ___________" },
        { text: "Backup healthcare provider: ___________" },
        { text: "Emergency contact for other children: ___________" },
        { text: "Know multiple routes to hospital" },
        { text: "Keep gas tank full after 36 weeks" },
        { text: "Know signs of emergency (bleeding, decreased movement)" },
        { text: "Have emergency cash and important documents ready" },
      ],
    },
    {
      title: "38 Weeks - Final Preparations",
      items: [
        { text: "Confirm all emergency contacts are updated" },
        { text: "Practice timing contractions with your partner" },
        { text: "Review pain management options" },
        { text: "Confirm pediatrician for newborn" },
        { text: "Prepare postpartum recovery area at home" },
        { text: "Stock up on postpartum supplies" },
        { text: "Prepare siblings for baby's arrival" },
        { text: "Take final maternity photos if desired" },
      ],
    },
    {
      title: "Final Week Before Due Date",
      items: [
        { text: "Double-check hospital bag contents" },
        { text: "Charge all electronic devices" },
        { text: "Confirm childcare is on standby" },
        { text: "Review birth plan one final time" },
        { text: "Stay close to home (within 30 minutes of hospital)" },
        { text: "Get plenty of rest and stay hydrated" },
        { text: "Have contraction timer ready and practice using it" },
        { text: "Prepare snacks for early labor" },
      ],
    },
    {
      title: "When Labor Begins",
      items: [
        { text: "Start timing contractions when they become regular" },
        { text: "Stay calm and conserve energy" },
        {
          text: "Contact healthcare provider when contractions follow 5-1-1 rule",
        },
        { text: "Gather hospital bag and important documents" },
        { text: "Notify designated emergency contacts" },
        { text: "Head to hospital when advised by healthcare provider" },
      ],
    },
  ],
  footer:
    "Remember: Every labor is different. Follow your healthcare provider's specific instructions and trust your instincts.",
};

export default function LaborPreparationChecklistPage() {
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
          <Badge variant="secondary">Preparation</Badge>
          <Badge variant="outline">Checklist</Badge>
          <Badge variant="outline">Featured</Badge>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Labor Preparation Checklist
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Comprehensive checklist covering everything you need to prepare for
          labor, from 36 weeks to delivery day.
        </p>
        <DownloadChecklistButtons checklistData={checklistData} />
      </header>

      {/* Checklist Content */}
      <div className="space-y-8">
        {/* 36 Weeks */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Calendar className="w-6 h-6 text-blue-600" />
              36 Weeks - Early Preparation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Medical Preparations</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Schedule weekly prenatal appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Discuss birth plan with healthcare provider</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Get Group B Strep test results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Confirm pediatrician for baby</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Review insurance coverage and hospital policies</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Physical Preparations</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Install and inspect car seat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Start packing hospital bag</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Prepare home for postpartum recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Stock up on postpartum supplies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Prepare freezer meals</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 38 Weeks */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Calendar className="w-6 h-6 text-purple-600" />
              38 Weeks - Active Preparation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">
                  Documentation & Communication
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Finalize birth plan and share with care team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Create emergency contact list</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Confirm hospital registration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Download contraction timing app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Practice timing contractions with partner</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Home Preparations</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Set up nursery essentials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Wash and organize baby clothes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Charge all electronic devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Fill car with gas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Know multiple routes to hospital</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 39-40 Weeks */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Calendar className="w-6 h-6 text-pink-600" />
              39-40 Weeks - Final Preparations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Last-Minute Tasks</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Complete hospital bag packing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Put hospital bag in car</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Double-check car seat installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Confirm childcare arrangements for other children
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Review labor signs and when to call provider</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Mental Preparation</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Practice relaxation and breathing techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Visualize positive birth experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Discuss fears and concerns with support team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Create positive affirmations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Get adequate rest and nutrition</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Preparedness */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Phone className="w-6 h-6 text-red-600" />
              Emergency Preparedness
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Important Numbers</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Healthcare provider's emergency line: ___________
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Hospital labor & delivery: ___________</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Backup healthcare provider: ___________</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Doula or birth coach: ___________</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Emergency contact for other children: ___________
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Emergency Scenarios</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Know signs of emergency (bleeding, decreased movement)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Plan for rapid labor (less than 3 hours)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Know what to do if water breaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Plan for partner being away when labor starts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Know backup transportation to hospital</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hospital Bag */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-purple-600" />
              Hospital Bag Essentials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">For Mom</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Comfortable labor gown or nightgown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Nursing bras (2-3)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Comfortable underwear (disposable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Going-home outfit (maternity size)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Toiletries and personal care items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Phone charger and camera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Snacks and water bottle</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">For Baby</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Going-home outfit (newborn & 0-3 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Receiving blankets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Swaddle blankets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Burp cloths</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Newborn diapers (backup)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Car seat (properly installed)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">For Partner</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Change of clothes (2-3 days)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Toiletries and personal items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Phone charger</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Snacks and drinks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Entertainment (books, tablet)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Comfortable shoes</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documents and Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <FileText className="w-6 h-6 text-orange-600" />
              Important Documents & Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Required Documents</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Photo ID and insurance cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Hospital pre-registration paperwork</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Birth plan copies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Emergency contact information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Pediatrician contact information</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Medical Information</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Prenatal records and test results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Medication list and allergies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Blood type information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Group B Strep test results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Any special medical considerations</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Postpartum Preparation */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Baby className="w-6 h-6 text-green-600" />
              Postpartum Preparation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Home Setup</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Set up changing station</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Prepare comfortable nursing area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Stock up on newborn supplies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Prepare recovery supplies for mom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Arrange help for household tasks</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Support System</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Arrange postpartum doula or helper</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Schedule lactation consultant if needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Plan meal delivery or meal prep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Arrange childcare for other children</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Plan visitor guidelines and boundaries</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Week Checklist */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              Final Week Before Due Date
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Daily Tasks</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Monitor baby's movements daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Stay hydrated and eat regular meals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Practice relaxation techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Keep phone charged and nearby</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Stay close to home (within 30 minutes of hospital)
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Signs to Watch For</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Regular contractions (start timing!)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Water breaking or leaking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Bloody show or mucus plug</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Severe or persistent back pain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Feeling like you need to push</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="text-center mt-12 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" size="lg">
            <Download className="w-4 h-4 mr-2" />
            Download Complete Checklist
          </Button>
          <Link href="/">
            <Button size="lg">Start Timing Contractions</Button>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          Save this checklist to your phone or print it for easy reference
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
                  href="/resources/hospital-bag-checklist"
                  className="hover:text-primary transition-colors"
                >
                  Hospital Bag Checklist
                </Link>
              </CardTitle>
              <CardDescription>
                Detailed packing list for your hospital stay.
              </CardDescription>
            </CardHeader>
          </Card>
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
                In-depth article about preparing for labor and delivery.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
}

