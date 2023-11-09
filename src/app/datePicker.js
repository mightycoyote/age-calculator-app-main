"use client";

import { useState } from "react";
// import { DateTime, Interval } from "luxon";

import NumberInput from "./numberInput";
import validateEntry from "./validateEntry";
import styles from "./datePicker.module.css";

// there are 3 kinds of form validation when submit is pressed:
// 1. each has to be filled out
// 2. each has to be within standard ranges (1-31 days, etc)
// 3. finally, the date itself has to be valid - this produces the "whole form error". Only
// one is shown, but I'll need to create a second one for "Date cannot be in the future." since
// I can only check the current year above.

function DatePicker({ setElapsed }) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const currentYear = new Date().getFullYear();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // maybe use result returned from a custom hook
        validateEntry(day, month, year);
      }}
    >
      <div className={styles.inputDiv}>
          <NumberInput
            id="day"
            placeholder="DD"
            max="31"
            value={day}
            onChange={(event) => {
              setDay(event.target.value);
            }}
          />
          {/* specific error messages inserted */}
          <NumberInput
            id="month"
            placeholder="DD"
            max="12"
            value={month}
            onChange={(event) => {
              setMonth(event.target.value);
            }}
          />
          <NumberInput
            id="year"
            placeholder="YYYY"
            max={currentYear}
            value={year}
            onChange={(event) => {
              setYear(event.target.value);
            }}
          />
      </div>
      <button>fancy arrow button</button>
    </form>
  );
}

export default DatePicker;
