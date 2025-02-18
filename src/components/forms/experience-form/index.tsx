"use client";

import AddExperienceModal from "@/components/modals/add-experience-modal";
import { Button } from "@/components/ui/button";
import { useCVStore } from "@/stores/cv-store";
import { format } from "date-fns";
import { MoreVertical } from "lucide-react";
import React from "react";

const ExperienceForm = () => {
  const { experience } = useCVStore();
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      <div className="gap-4 grid mb-4">
        {experience.map((entry) => (
          <div
            key={entry.id}
            className="space-y-1 border rounded p-3 flex items-center gap-4"
          >
            <div className="flex-1">
              <h3 className="font-semibold">
                {entry.jobTitle} at {entry.employer}
              </h3>
              <p className="text-sm text-muted-foreground">
                {entry.startDate && format(entry.startDate, "MMM yyyy")} -{" "}
                {entry.endDate ? format(entry.endDate, "MMM yyyy") : "Present"}
              </p>
            </div>
            <AddExperienceModal data={entry}>
              <Button variant="ghost">
                <MoreVertical />
              </Button>
            </AddExperienceModal>
          </div>
        ))}
      </div>
      <AddExperienceModal>
        <Button variant="outline">Add item</Button>
      </AddExperienceModal>
    </div>
  );
};

export default ExperienceForm;
