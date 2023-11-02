import styles from "./dateDisplay.module.css";

function DateDisplay() {
    return (
        <div className={styles.ymd}>
            <p><span>- -</span> years</p>
            <p><span>- -</span> months</p>
            <p><span>- -</span> days</p>
        </div>
    )
}

export default DateDisplay;