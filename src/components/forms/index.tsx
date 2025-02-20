"use client";

import { steps, useCVStore } from "@/stores/cv-store";
import React from "react";
import BasicsForm from "./basics-form";
import EducationForm from "./education-form";
import ExperienceForm from "./experience-form";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

const CVForms = () => {
  const { step, nextStep, previousStep } = useCVStore();
  return (
    <div className="p-6 w-full flex flex-col">
      <AnimatePresence>
        <motion.div
          key={step}
          className="flex-1 flex flex-col justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {step === "basic" && <BasicsForm />}
          {step === "experience" && <ExperienceForm />}
          {step === "education" && <EducationForm />}
        </motion.div>
      </AnimatePresence>
      <div className="w-full flex justify-between">
        <Button
          variant="outline"
          onClick={previousStep}
          disabled={step === steps[0]}
        >
          Back
        </Button>
        <Button onClick={nextStep} disabled={step === steps[steps.length - 1]}>
          Next step
        </Button>
      </div>
    </div>
  );
};

export default CVForms;
