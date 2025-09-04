import { DownloadChecklistButtons } from "@/components/DownloadChecklistButtons";
import { DownloadHospitalBagButton } from "@/components/DownloadHospitalBagButton";
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
  CheckSquare,
  Heart,
  User,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hospital Bag Checklist",
  description:
    "Complete packing list for your hospital bag, including items for mom, baby, and birth partner. Free downloadable checklist to ensure you don't forget anything important.",
  keywords: [
    "hospital bag checklist",
    "hospital bag packing list",
    "labor bag checklist",
    "delivery bag packing",
    "what to pack for hospital birth",
    "maternity hospital bag",
    "newborn hospital bag",
    "birth partner hospital bag",
  ],
  alternates: {
    canonical: "/resources/hospital-bag-checklist",
  },
  openGraph: {
    title: "Hospital Bag Checklist | Contracking",
    description:
      "Complete packing list for your hospital bag - mom, baby, and partner essentials.",
    url: "https://contracking.me/resources/hospital-bag-checklist",
    images: ["/og-image.jpg"],
  },
};

const checklistData: ChecklistData = {
  title: "Hospital Bag Checklist",
  description:
    "Complete packing list for your hospital bag, including items for mom, baby, and birth partner.",
  sections: [
    {
      title: "For Mom - Labor & Delivery",
      items: [
        { text: "Comfortable labor gown or oversized t-shirt" },
        { text: "Nursing bras (2-3, one size larger than current)" },
        { text: "Comfortable underwear (disposable or old ones)" },
        { text: "Non-slip slippers or socks" },
        { text: "Hair ties and headband" },
        { text: "Lip balm and basic toiletries" },
        { text: "Phone charger with extra-long cord" },
        { text: "Birth plan copies (3-4 printed copies)" },
        { text: "Insurance cards and ID" },
        { text: "Snacks for after delivery" },
      ],
    },
    {
      title: "For Mom - Postpartum Recovery",
      items: [
        { text: "Comfortable going-home outfit (pregnancy size)" },
        { text: "Nursing pads" },
        { text: "Maternity pads (heavy flow)" },
        { text: "Comfortable robe" },
        { text: "Nursing-friendly pajamas" },
        { text: "Flip-flops for shower" },
        { text: "Personal toiletries and skincare" },
        { text: "Nipple cream" },
        { text: "Stool softener (if recommended by provider)" },
        { text: "Any regular medications" },
      ],
    },
    {
      title: "For Baby",
      items: [
        { text: "Car seat (properly installed)" },
        { text: "Going-home outfit (newborn and 0-3 months sizes)" },
        { text: "Onesies (2-3 in each size)" },
        { text: "Sleepers (2-3 in each size)" },
        { text: "Socks and mittens" },
        { text: "Receiving blankets (2-3)" },
        { text: "Swaddle blankets" },
        { text: "Burp cloths" },
        { text: "Diapers (if you prefer specific brand)" },
        { text: "Baby book for footprints" },
      ],
    },
    {
      title: "For Birth Partner",
      items: [
        { text: "Comfortable clothes for 1-2 days" },
        { text: "Toiletries and personal items" },
        { text: "Phone charger" },
        { text: "Snacks and drinks" },
        { text: "Pillow (with colored pillowcase)" },
        { text: "Blanket" },
        { text: "Entertainment (book, tablet)" },
        { text: "Cash for parking/vending machines" },
        { text: "Camera or video camera" },
        { text: "Change of clothes" },
      ],
    },
    {
      title: "Important Documents",
      items: [
        { text: "Insurance cards" },
        { text: "Photo ID" },
        { text: "Birth plan copies" },
        { text: "Hospital pre-registration paperwork" },
        { text: "Emergency contact list" },
        { text: "Pediatrician contact information" },
        { text: "Any advance directives" },
        { text: "Marriage certificate (if needed for birth certificate)" },
      ],
    },
    {
      title: "Optional Comfort Items",
      items: [
        { text: "Essential oils or aromatherapy" },
        { text: "Massage tools" },
        { text: "Music playlist" },
        { text: "Birthing ball (check if hospital provides)" },
        { text: "Special blanket or comfort item" },
        { text: "Thank you cards for staff" },
        { text: "Favorite snacks" },
        { text: "Eye mask and earplugs" },
      ],
    },
  ],
  footer:
    "Pack your bag around 36 weeks. Check with your hospital about what they provide vs. what you need to bring.",
};

export default function HospitalBagChecklistPage() {
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
          Hospital Bag Checklist
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Complete packing list for your hospital bag, including items for mom,
          baby, and birth partner. Pack around 36 weeks to be prepared.
        </p>
        <DownloadChecklistButtons checklistData={checklistData} />
      </header>

      {/* Quick Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-blue-900 mb-3">Packing Tips</h3>
        <ul className="grid md:grid-cols-2 gap-2 text-blue-800 text-sm">
          <li>• Pack around 36 weeks of pregnancy</li>
          <li>• Use a rolling suitcase for easy transport</li>
          <li>• Pack for 2-3 days (even for vaginal delivery)</li>
          <li>• Bring comfortable, loose-fitting clothes</li>
          <li>• Pack extra items - you can always leave them in the car</li>
          <li>• Include snacks for energy during labor</li>
        </ul>
      </div>

      {/* For Mom */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Heart className="w-6 h-6 text-pink-600" />
            For Mom
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Labor Essentials</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Comfortable labor gown (front-opening) or your own nightgown
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Robe or cardigan for walking the halls</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Non-slip socks or slippers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Hair ties and headband</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Lip balm and lotion</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Massage oil or tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Music playlist or relaxation audio</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Postpartum Recovery</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Nursing bras (2-3, one size larger than current)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Nursing pads</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Comfortable, disposable underwear</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Maternity pads (heavy flow)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Nipple cream</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Stool softener (ask your provider)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Going-home outfit (maternity size)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-3">Personal Care & Comfort</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Toothbrush and toothpaste</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Shampoo and conditioner</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Body wash or soap</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Deodorant</span>
                </li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Face wash and moisturizer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Glasses or contact lens supplies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Any prescription medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Breast pump (if planning to pump)</span>
                </li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Phone charger and portable battery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Camera for first photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Snacks (energy bars, crackers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Water bottle</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* For Baby */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Baby className="w-6 h-6 text-blue-600" />
            For Baby
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Clothing</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Going-home outfit (newborn and 0-3 months sizes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Onesies or bodysuits (2-3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Sleepers or gowns (2-3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Socks or booties</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Hat or cap</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Mittens (to prevent scratching)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Care Items</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Receiving blankets (2-3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Swaddle blankets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Burp cloths (4-6)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Bibs (2-3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Newborn diapers (backup - hospital usually provides)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Baby wipes (sensitive skin)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Pacifiers (if planning to use)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">
              🚗 Car Seat - REQUIRED
            </h4>
            <p className="text-green-800 text-sm">
              You cannot leave the hospital without a properly installed car
              seat. Have it inspected by a certified technician before your due
              date.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* For Partner */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <User className="w-6 h-6 text-purple-600" />
            For Birth Partner
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Personal Items</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Change of clothes (2-3 days worth)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Comfortable shoes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Toiletries and personal care items</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Sleepwear and underwear</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Medications (if any)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support & Entertainment</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Phone charger and portable battery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Snacks and drinks (energy bars, crackers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Entertainment (books, tablet, games)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Pillow from home (with colored pillowcase)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Birth plan copies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Cash for parking and vending machines</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Documents */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-orange-600" />
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
                  <span>Photo identification (driver's license)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Insurance cards (health and hospital)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Hospital pre-registration paperwork</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Birth plan (multiple copies)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Emergency contact list</span>
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
                  <span>List of medications and allergies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Healthcare provider contact information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Pediatrician contact information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Blood type and Group B Strep status</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Optional Comfort Items */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Optional Comfort Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Labor Comfort</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Essential oils or aromatherapy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Birthing ball (check if hospital provides)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Massage tools or tennis balls</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Comfortable pillow from home</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Focal point object for breathing</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Special Items</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Special blanket for baby's first photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Religious or cultural items</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Thank you cards for hospital staff</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Baby book for footprints</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Nursing pillow (if you have one)</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Packing Timeline */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Packing Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium min-w-fit">
                36 Weeks
              </div>
              <div>
                <h4 className="font-semibold mb-2">Start Gathering Items</h4>
                <p className="text-sm text-muted-foreground">
                  Begin collecting items and washing baby clothes. Make a list
                  of last-minute items to add.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium min-w-fit">
                38 Weeks
              </div>
              <div>
                <h4 className="font-semibold mb-2">Pack Main Bag</h4>
                <p className="text-sm text-muted-foreground">
                  Pack everything except last-minute items like phone charger,
                  toiletries you use daily, and fresh snacks.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium min-w-fit">
                39+ Weeks
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  Final Items & Car Loading
                </h4>
                <p className="text-sm text-muted-foreground">
                  Add final items, check car seat installation, and keep bag in
                  car or by the door.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What NOT to Pack */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">What NOT to Pack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Leave at Home</h4>
              <ul className="space-y-2 text-sm">
                <li>• Valuable jewelry or expensive items</li>
                <li>• Large amounts of cash</li>
                <li>• Too many clothing options (keep it simple)</li>
                <li>• Heavy books or magazines</li>
                <li>• Perfumes or strong scents</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Hospital Usually Provides</h4>
              <ul className="space-y-2 text-sm">
                <li>• Diapers and wipes</li>
                <li>• Basic baby care items</li>
                <li>• Maternity pads</li>
                <li>• Basic toiletries</li>
                <li>• Hospital gowns</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Last-Minute Additions */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-yellow-900 mb-3">
          Last-Minute Additions (Add when labor starts)
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-yellow-800 text-sm">
          <ul className="space-y-1">
            <li>• Phone chargers</li>
            <li>• Fresh snacks</li>
            <li>• Current medications</li>
          </ul>
          <ul className="space-y-1">
            <li>• Glasses or contacts</li>
            <li>• Daily-use toiletries</li>
            <li>• Contraction timing notes</li>
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <DownloadHospitalBagButton />
          <Link href="/">
            <Button size="lg">Start Timing Contractions</Button>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          Print this checklist and check off items as you pack
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
                  href="/blog/complete-guide-labor-preparation"
                  className="hover:text-primary transition-colors"
                >
                  Complete Guide to Labor Preparation
                </Link>
              </CardTitle>
              <CardDescription>
                Comprehensive guide covering all aspects of labor preparation.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
}

