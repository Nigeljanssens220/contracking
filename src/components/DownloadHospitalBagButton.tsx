"use client";

import { Button } from "@/components/ui/button";
import { downloadChecklist, type ChecklistData } from "@/lib/download-utils";
import { Download } from "lucide-react";

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

interface DownloadHospitalBagButtonProps {
  size?: "sm" | "lg" | "default";
  variant?: "default" | "outline";
}

export function DownloadHospitalBagButton({
  size = "lg",
  variant = "outline",
}: DownloadHospitalBagButtonProps) {
  const handleDownload = () => {
    downloadChecklist(checklistData, "txt");
  };

  return (
    <Button variant={variant} size={size} onClick={handleDownload}>
      <Download className="w-4 h-4 mr-2" />
      Download Checklist
    </Button>
  );
}

