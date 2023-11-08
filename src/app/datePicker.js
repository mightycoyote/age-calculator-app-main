"use client";

import { useState } from "react";
// import { DateTime, Interval } from "luxon";

import validateEntry from "./validateEntry";
import styles from "./datePicker.module.css";

// there are 3 kinds of form validation when submit is pressed:
// 1. each has to be filled out
// 2. each has to be within standard ranges (1-31 days, etc)
// 3. finally, the date itself has to be valid - this produces the "whole form error". Only
// one is shown, but I'll need to create a second one for "Date cannot be in the future." since
// I can only check the current year above.

function DatePicker({ elapsed, setElapsed }) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const currentYear = new Date().getFullYear();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        validateEntry(day, month, year);
      }}
    >
      <div className={styles.inputDiv}>
        <div className={styles.dmy}>
          <label htmlFor="day">Day</label>
          <input
            id="day"
            size="4"
            placeholder="DD"
            required
            type="number"
            min="1"
            max="31"
            value={day}
            onChange={(event) => {
              setDay(event.target.value);
            }}
          ></input>
        </div>
        <div className={styles.dmy}>
          <label htmlFor="month">Month</label>
          <input
            id="month"
            size="4"
            placeholder="MM"
            required
            type="number"
            min="1"
            max="12"
            value={month}
            onChange={(event) => {
              setMonth(event.target.value);
            }}
          ></input>
        </div>
        <div className={styles.dmy}>
          <label htmlFor="year">Year</label>
          <input
            id="year"
            size="4"
            placeholder="YYYY"
            required
            type="number"
            min="1"
            max={currentYear}
            value={year}
            onChange={(event) => {
              setYear(event.target.value);
            }}
          ></input>
        </div>
      </div>
      <button>arrow thing</button>
    </form>
  );
}

export default DatePicker;
