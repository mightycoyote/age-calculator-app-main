import { useState } from "react";
import styles from "./numberInput.module.css"

function NumberInput( {id, otherTest, setPageError, ...delegated} ) {
  const [classes, setClasses] = useState(styles.inputBox);
  const [error, setError] = useState("ok");
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.numberInput}>
      <label htmlFor={id}>{id}</label>
      <input
        className={classes}
        id={id}
        size="4"
        required={true}
        type="number"
        onBlur={(event) => {
          if (event.target.value === "") {
            setClasses(`${styles.inputBox} ${styles.error}`);
            setError("missingField");
            return;
          }
          if (eval(otherTest)) {
            setClasses(`${styles.inputBox} ${styles.error}`);
            setError("outOfRange");
            return;
          }
        }}
        onFocus={() => {
            setClasses(styles.inputBox);
            setError("ok");
            setPageError("ok");
        }}
        {...delegated}
      />
        {(error === "missingField") && <div>This field is required</div>}
        {(error === "outOfRange" && id !== "year") && <div>Must be a valid {id}</div>}
        {(error === "outOfRange" && id === "year") && <div>Must be in the past</div>}

    </div>
  );
}

export default NumberInput;
