import styles from "./dateDisplay.module.css";

function DateDisplay({ elapsed }) {
  // If I try to put the blanks (" - -") in State, React drops one.
  // parseInt() eliminates leading zeroes, but when I had "years || " - -"" it would show the blanks if the value was 0
  // adding "toFixed()" gives you a 0 when the value is 0, but then "NaN" when the page is first loaded
  const years = parseInt(elapsed[0]).toFixed();
  const months = parseInt(elapsed[1]).toFixed();
  const days = parseInt(elapsed[2]).toFixed();

  return (
    <div className={styles.ymd}>
      <p>
        <span>{years !== "NaN" ? years : " - -"}</span>{" "}
        {years === "1" ? "year" : "years"}
      </p>
      <p>
        <span>{months !== "NaN" ? months : " - -"}</span>{" "}
        {months === "1" ? "month" : "months"}
      </p>
      <p>
        <span>{days !== "NaN" ? days : " - -"}</span>{" "}
        {days === "1" ? "day" : "days"}
      </p>
    </div>
  );
}

export default DateDisplay;
