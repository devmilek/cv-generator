"use client";

import React from "react";

import {
  Article,
  Briefcase,
  GraduationCap,
  User,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";
import { Step, useCVStore } from "@/stores/cv-store";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type LocalStep = {
  title: string;
  icon: React.ElementType;
  step: Step;
};

const steps: LocalStep[] = [
  {
    title: "Basics",
    icon: User,
    step: "basic",
  },
  {
    title: "Summary",
    icon: Article,
    step: "summary",
  },
  {
    title: "Experience",
    icon: Briefcase,
    step: "experience",
  },
  {
    title: "Education",
    icon: GraduationCap,
    step: "education",
  },
];

const Navigation = () => {
  const { updateStep, step } = useCVStore();
  return (
    <div className="p-4 shrink-0 bg-sidebar border-r flex flex-col gap-2">
      <TooltipProvider>
        {steps.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                key={index}
                variant={step === item.step ? "default" : "ghost"}
                onClick={() => updateStep(item.step)}
              >
                <item.icon />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">{item.title}</TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default Navigation;
