import styles from "./datePicker.module.css";

function DatePicker() {
    return (
        <form className={styles.form}>
            <div className={styles.dmy}>
                <label htmlFor="day">Day</label>
                <input id="day"></input>
            </div>
            <div className={styles.dmy}>
                <label htmlFor="month">Month</label>
                <input id="month"></input>
            </div>
            <div className={styles.dmy}>
                <label htmlFor="year">Year</label>
                <input id="year"></input>
            </div>
        </form>
    )
}

export default DatePicker;