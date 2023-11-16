import { useState } from "react";
import styles from "./numberInput.module.css"

function NumberInput( {id, otherTest, setPageError, ...delegated} ) {
  const [classes, setClasses] = useState(styles.numberInput);
  const [error, setError] = useState("ok");
  // this _is_ used by otherTest when checking year
  const currentYear = new Date().getFullYear();

  return (
    <div className={classes}>
      <label htmlFor={id}>{id}</label>
      <input
        className={styles.inputBox}
        id={id}
        size="2"
        required={true}
        type="number"
        onBlur={(event) => {
          if (event.target.value === "") {
            setClasses(`${styles.numberInput} ${styles.error}`);
            setError("missingField");
            return;
          }
          if (eval(otherTest)) {
            setClasses(`${styles.numberInput} ${styles.error}`);
            setError("outOfRange");
            return;
          }
        }}
        onFocus={() => {
            setClasses(styles.numberInput);
            setError("ok");
            setPageError("ok");
        }}
        {...delegated}
      />
        {(error === "missingField") && <div className={styles.errorMessage}>This field is required</div>}
        {(error === "outOfRange" && id !== "year") && <div className={styles.errorMessage}>Must be a valid {id}</div>}
        {(error === "outOfRange" && id === "year") && <div className={styles.errorMessage}>Must be in the past</div>}

    </div>
  );
}

export default NumberInput;
