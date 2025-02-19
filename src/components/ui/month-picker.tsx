import {
  add,
  eachMonthOfInterval,
  endOfYear,
  format,
  isEqual,
  parse,
  startOfToday,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { Button } from "./button";

interface MonthPickerProps {
  currentMonth?: Date;
  onMonthChange: (newMonth?: Date) => void;
}

export default function MonthPicker({
  currentMonth,
  onMonthChange,
}: MonthPickerProps) {
  const today = startOfToday();
  const [currentYear, setCurrentYear] = React.useState(
    currentMonth ? format(currentMonth, "yyyy") : format(today, "yyyy")
  );
  const firstDayCurrentYear = parse(currentYear, "yyyy", new Date());

  const months = eachMonthOfInterval({
    start: firstDayCurrentYear,
    end: endOfYear(firstDayCurrentYear),
  });

  function previousYear() {
    const firstDayNextYear = add(firstDayCurrentYear, { years: -1 });
    setCurrentYear(format(firstDayNextYear, "yyyy"));
  }

  function nextYear() {
    const firstDayNextYear = add(firstDayCurrentYear, { years: 1 });
    setCurrentYear(format(firstDayNextYear, "yyyy"));
  }

  return (
    <div className="p-3">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-1 justify-between w-full">
          <Button
            variant="outline"
            size="icon"
            className="size-7"
            type="button"
            onClick={previousYear}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="text-sm font-medium flex-1 text-center">
            {format(firstDayCurrentYear, "yyyy")}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="size-7"
            type="button"
            onClick={nextYear}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid w-full grid-cols-3 gap-2" role="grid">
          {months.map((month) => (
            <Button
              key={month.toISOString()}
              tabIndex={-1}
              onClick={() => {
                if (currentMonth && isEqual(month, currentMonth)) {
                  onMonthChange(undefined);
                  return;
                }
                onMonthChange(month);
              }}
              // if is the same year and month variant should be 'default' if same month but diffrent yeart variant should be 'secondary' else should be default
              variant={
                currentMonth
                  ? isEqual(
                      parse(format(month, "MM-yyyy"), "MM-yyyy", new Date()),
                      parse(
                        format(currentMonth, "MM-yyyy"),
                        "MM-yyyy",
                        new Date()
                      )
                    )
                    ? "default"
                    : format(month, "MMM") === format(currentMonth, "MMM")
                    ? "secondary"
                    : "ghost"
                  : "ghost"
              }
            >
              {format(month, "MMM")}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
