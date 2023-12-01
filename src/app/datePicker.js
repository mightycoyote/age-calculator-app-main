"use client";

import { useState, createContext, useMemo } from "react";
// import { DateTime, Interval } from "luxon";

import NumberInput from "./numberInput";
import validateEntry from "./validateEntry";
import styles from "./datePicker.module.css";

// there are 3 kinds of form validation when submit is pressed:
// 1. each has to be filled out
// 2. each has to be within standard ranges (1-31 days, etc), and not past the current year
// 3. validation through the library to check for errors like Feb 30 AND date in the future of current year
// (may need to add another "whole form error" state for this latter case?)

export const PageErrorContext = createContext();

function DatePicker({ setElapsed }) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  // making setPageError available to inputs allows them to clear the Luxon page error on focus as it does for the onBlur errors
  const [pageError, setPageError] = useState("ok");
  // useMemo should keep this from generating new error object on each render
  const value = useMemo(() => {
    return { pageError, setPageError };
  }, [pageError]);

  return (
    <PageErrorContext.Provider value={value}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // setPageError("ok");
          // this last validation step goes through Luxon, can return errors for invalid days or future in current year
          validateEntry(day, month, year, setPageError, setElapsed);
        }}
      >
        <div className={styles.inputDiv}>
          <NumberInput
            id="day"
            placeholder="DD"
            otherTest="event.target.value > 31 || event.target.value < 1"
            value={day}
            onChange={(event) => {
              setDay(event.target.value);
            }}
          />
          <NumberInput
            id="month"
            placeholder="DD"
            otherTest="event.target.value > 12 || event.target.value < 1"
            value={month}
            onChange={(event) => {
              setMonth(event.target.value);
            }}
          />
          <NumberInput
            id="year"
            placeholder="YYYY"
            otherTest="event.target.value > currentYear"
            value={year}
            onChange={(event) => {
              setYear(event.target.value);
            }}
          />
        </div>
        {pageError === "invalidDate" && (
          <div className={styles.errorMessage}>Must be a valid date</div>
        )}
        {pageError === "inFuture" && (
          <div className={styles.errorMessage}>Must not be in the future</div>
        )}
        <button>fancy arrow button</button>
      </form>
    </PageErrorContext.Provider>
  );
}

export default DatePicker;
