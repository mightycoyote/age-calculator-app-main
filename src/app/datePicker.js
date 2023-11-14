"use client";

import { useState } from "react";
// import { DateTime, Interval } from "luxon";

import NumberInput from "./numberInput";
import validateEntry from "./validateEntry";
import styles from "./datePicker.module.css";

// there are 3 kinds of form validation when submit is pressed:
// 1. each has to be filled out
// 2. each has to be within standard ranges (1-31 days, etc), and not past the current year
// 3. validation through the library to check for errors like Feb 30 AND date in the future of current year
// (may need to add another "whole form error" state for this latter case?)

function DatePicker({ setElapsed }) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [pageError, setPageError] = useState("ok");

  return (
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
          setPageError={setPageError}
          onChange={(event) => {
            setDay(event.target.value);
          }}
        />
        <NumberInput
          id="month"
          placeholder="DD"
          otherTest="event.target.value > 12 || event.target.value < 1"
          value={month}
          setPageError={setPageError}
          onChange={(event) => {
            setMonth(event.target.value);
          }}
        />
        <NumberInput
          id="year"
          placeholder="YYYY"
          otherTest="event.target.value > currentYear"
          value={year}
          setPageError={setPageError}
          onChange={(event) => {
            setYear(event.target.value);
          }}
        />
      </div>
      {(pageError === "invalidDate") && <div>Must be a valid date</div>}
      {(pageError === "inFuture") && <div>Must not be in the future</div>}
      <button>fancy arrow button</button>
    </form>
  );
}

export default DatePicker;
