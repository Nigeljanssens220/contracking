"use client";

import { Button } from "@/components/ui/button";
import {
  downloadChecklist,
  printChecklist,
  type ChecklistData,
} from "@/lib/download-utils";
import { Download, FileText } from "lucide-react";

interface DownloadChecklistButtonsProps {
  checklistData: ChecklistData;
}

export function DownloadChecklistButtons({
  checklistData,
}: DownloadChecklistButtonsProps) {
  const handleDownload = () => {
    downloadChecklist(checklistData, "txt");
  };

  const handlePrint = () => {
    printChecklist(checklistData);
  };

  return (
    <div className="flex gap-4 mb-6">
      <Button onClick={handleDownload}>
        <Download className="w-4 h-4 mr-2" />
        Download Checklist
      </Button>
      <Button variant="outline" onClick={handlePrint}>
        <FileText className="w-4 h-4 mr-2" />
        Print Checklist
      </Button>
    </div>
  );
}

