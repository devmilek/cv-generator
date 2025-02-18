"use client";

import { cn } from "@/lib/utils";
import { useCVStore } from "@/stores/cv-store";
import { IBM_Plex_Sans } from "next/font/google";
import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { format } from "date-fns";

const font = IBM_Plex_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const PdfExample = () => {
  const { basics, experience } = useCVStore();
  return (
    <div
      style={{
        width: "595px",
        height: "842px",
      }}
      className={cn(font.className, "bg-white p-8")}
    >
      <div className="flex items-center gap-4">
        {basics.imageSrc && (
          <Image
            unoptimized
            src={basics.imageSrc}
            alt="Profile image"
            width={20}
            height={20}
            className="size-20 rounded-full"
          />
        )}
        <div className="space-y-2">
          {basics.jobTitle && <p className="text-sm">{basics.jobTitle}</p>}
          <h2 className="text-3xl font-bold">
            {basics.firstName} {basics.lastName}
          </h2>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold">Profile</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Graphic designer with +8 years of experience in branding and print
            design. Skilled at Adobe Creative Suite (Photoshop, Illustrator,
            InDesign) as well as sketching and hand drawing. Supervised 23 print
            design projects that resulted in an increase of 32% in savings.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Details</h3>
          <ul className="text-xs text-muted-foreground mt-1 list-disc list-inside">
            {basics.email && <li>{basics.email}</li>}
            {basics.phone && <li>{basics.phone}</li>}
          </ul>
        </div>
      </div>
      <Separator className="my-6" />
      <h3 className="text-xl font-bold">Experience</h3>
      <div className="grid gap-4 mt-4">
        {experience.map((entry) => (
          <div key={entry.id} className="space-y-1">
            <h4 className="font-semibold">
              {entry.jobTitle} at {entry.employer}
            </h4>
            <p className="text-muted-foreground text-xs">
              {entry.startDate && format(entry.startDate, "MMM yyyy")} -{" "}
              {entry.endDate ? format(entry.endDate, "MMM yyyy") : "Present"}
            </p>
            <p className="text-muted-foreground text-xs">{entry.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfExample;
