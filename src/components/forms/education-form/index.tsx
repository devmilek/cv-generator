"use client";

import EducationModal from "@/components/modals/education-modal";
import { Button } from "@/components/ui/button";
import { useCVStore } from "@/stores/cv-store";
import { format } from "date-fns";
import { MoreVertical } from "lucide-react";
import React from "react";

const EducationForm = () => {
  const { education } = useCVStore();
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      <div className="gap-2 grid mb-2">
        {education.map((entry) => (
          <div
            key={entry.id}
            className="space-y-1 border rounded-md p-3 flex items-center gap-4"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-sm">
                {entry.degree} at {entry.institution}
              </h3>
              <p className="text-sm text-muted-foreground">
                {entry.startDate && `${format(entry.startDate, "MMM yyyy")} - `}
                {entry.endDate ? format(entry.endDate, "MMM yyyy") : "Present"}
              </p>
            </div>
            <EducationModal data={entry}>
              <Button variant="ghost" size="icon">
                <MoreVertical />
              </Button>
            </EducationModal>
          </div>
        ))}
      </div>
      <EducationModal>
        <Button variant="outline">Add item</Button>
      </EducationModal>
    </div>
  );
};

export default EducationForm;
