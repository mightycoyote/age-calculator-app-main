import styles from "./dateDisplay.module.css";

function DateDisplay( {elapsed} ) {
    // parseInt() makes it possible to eliminate leading zeroes and show singular "day" etc
    // however, now I have to figure out how to make it show 0 as needed instead of reverting to blanks
    const years = parseInt(elapsed[0]);
    const months = parseInt(elapsed[1]);
    const days = parseInt(elapsed[2]);

    return (
        <div className={styles.ymd}>
            <p><span>{years || " - -"}</span> {years === 1 ? "year" : "years"}</p>
            <p><span>{months || " - -"}</span> {months === 1 ? "month" : "months"}</p>
            <p><span>{days || " - -"}</span> {days === 1 ? "day" : "days"}</p>
        </div>
    )
}

export default DateDisplay;