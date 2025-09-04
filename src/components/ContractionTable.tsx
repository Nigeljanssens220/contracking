"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Contraction } from "@/types/contraction";
import { format, formatDuration, intervalToDuration } from "date-fns";
import { Clock, Edit, MoreVertical, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { AddContractionDialog } from "./AddContractionDialog";
import { EditContractionDialog } from "./EditContractionDialog";

interface ContractionTableProps {
  contractions: Contraction[];
  onDelete: (id: string) => void;
  onEdit: (id: string, data: { startTime: Date; endTime: Date | null }) => void;
  onAdd: (startTime: Date, endTime: Date | null) => void;
  onClearAll: () => void;
}

export function ContractionTable({
  contractions,
  onDelete,
  onEdit,
  onAdd,
  onClearAll,
}: ContractionTableProps) {
  const [editingContraction, setEditingContraction] =
    useState<Contraction | null>(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showClearDialog, setShowClearDialog] = useState(false);
  const formatTime = (date: Date) => format(date, "HH:mm:ss");

  const formatDurationFromSeconds = (seconds: number) => {
    const duration = intervalToDuration({ start: 0, end: seconds * 1000 });
    return formatDuration(duration, { format: ["minutes", "seconds"] });
  };

  if (contractions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Contraction History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            No contractions recorded yet. Start tracking your first contraction
            above!
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Contraction History ({contractions.length})
        </CardTitle>
        <div className="flex gap-2">
          {/* Mobile dropdown (screens < 768px) */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-background border shadow-md"
              >
                <DropdownMenuItem onClick={() => setShowAddDialog(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Manual
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setShowClearDialog(true)}
                  className="text-destructive focus:text-destructive"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear All
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop buttons (screens >= 768px) */}
          <div className="hidden md:flex gap-2">
            <Button
              onClick={() => setShowAddDialog(true)}
              variant="outline"
              size="sm"
              className="text-primary hover:text-primary"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add Manual
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-destructive hover:text-destructive"
                >
                  Clear All
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Clear All Contractions?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete all your contraction history.
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={onClearAll}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Clear All
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="rounded-md border">
          {/* Fixed Header */}
          <div className="bg-muted/50 border-b">
            <div className="grid grid-cols-4 gap-4 px-4 py-3">
              <div className="font-medium text-sm text-muted-foreground">
                Start Time
              </div>
              <div className="font-medium text-sm text-muted-foreground">
                End Time
              </div>
              <div className="font-medium text-sm text-muted-foreground">
                Duration
              </div>
              <div className="font-medium text-sm text-muted-foreground w-[120px]">
                Actions
              </div>
            </div>
          </div>

          {/* Scrollable Body */}
          <div className="max-h-[50dvh] overflow-auto">
            {contractions.map((contraction) => (
              <div
                key={contraction.id}
                className="grid grid-cols-4 gap-4 px-4 py-3 border-b last:border-b-0 hover:bg-muted/50"
              >
                <div className="font-mono text-sm">
                  {formatTime(new Date(contraction.startTime))}
                </div>
                <div className="font-mono text-sm">
                  {contraction.endTime
                    ? formatTime(new Date(contraction.endTime))
                    : "N/A"}
                </div>
                <div className="font-semibold text-sm">
                  {contraction.duration
                    ? formatDurationFromSeconds(contraction.duration)
                    : "In progress"}
                </div>
                <div className="w-[120px]">
                  {/* Mobile dropdown (screens < 768px) */}
                  <div className="md:hidden">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="bg-background border shadow-md"
                      >
                        <DropdownMenuItem
                          onClick={() => setEditingContraction(contraction)}
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onDelete(contraction.id)}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Desktop buttons (screens >= 768px) */}
                  <div className="hidden md:flex gap-1">
                    <Button
                      onClick={() => setEditingContraction(contraction)}
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => onDelete(contraction.id)}
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <EditContractionDialog
        contraction={editingContraction}
        open={!!editingContraction}
        onClose={() => setEditingContraction(null)}
        onSave={onEdit}
      />

      <AddContractionDialog
        open={showAddDialog}
        onClose={() => setShowAddDialog(false)}
        onAdd={onAdd}
      />

      {/* Clear All Dialog for mobile dropdown */}
      <AlertDialog open={showClearDialog} onOpenChange={setShowClearDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Clear All Contractions?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete all your contraction history. This
              action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                onClearAll();
                setShowClearDialog(false);
              }}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Clear All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}

