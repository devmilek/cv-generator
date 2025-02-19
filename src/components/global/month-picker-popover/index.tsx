"use client";

import { Button } from "@/components/ui/button";
import MonthPicker from "@/components/ui/month-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React from "react";

const MonthPickerPopover = ({
  value,
  onChange,
}: {
  value?: Date;
  onChange: (date?: Date) => void;
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "pl-3 text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          {value ? format(value, "MMMM yyyy") : <span>Pick a month</span>}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <MonthPicker
          currentMonth={value || undefined}
          onMonthChange={onChange}
        />
      </PopoverContent>
    </Popover>
  );
};

export default MonthPickerPopover;
