"use client";

import { useState } from "react";

import styles from "./datePicker.module.css";

function validateEntry(day, month, year) {
  const enteredDate = new Date(year, month - 1, day);
  const currentDate = new Date();
  console.log(enteredDate);

// validating entries like "April 31" is extremely difficult and may need a library added

  if (currentDate - enteredDate < 0) {
    console.log("date cannot be in the future")
    return;
  }
};

function DatePicker() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const currentYear = new Date().getFullYear();

  return (
    <form onSubmit={event => {
        event.preventDefault();
        validateEntry(day, month, year);
    }}>
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
