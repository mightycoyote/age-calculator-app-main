"use client";

import { useState } from "react";
import DatePicker from "./datePicker";
import DateDisplay from "./dateDisplay";

import styles from "./page.module.css";

export default function Home() {

  const [elapsed, setElapsed] = useState("");

  return (
    <main className={styles.main}>
      <DatePicker setElapsed={setElapsed} />
      <DateDisplay />
    </main>
  );
}
