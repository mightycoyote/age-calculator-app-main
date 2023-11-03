"use client";

import { useState } from "react";

import styles from "./datePicker.module.css";

function validateEntry(day, month, year) {

};

function DatePicker() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

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
            // make these all regexes
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
