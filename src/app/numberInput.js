import { useState } from "react";
import styles from "./numberInput.module.css"

function NumberInput( {id, otherTest, ...delegated} ) {
  const [classes, setClasses] = useState(styles.inputBox);
  const [error, setError] = useState("ok");

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
          if (otherTest) {
            setClasses(`${styles.inputBox} ${styles.error}`);
            setError("outOfRange");
            return;
          }
        }}
        onFocus={() => {
            setClasses(styles.inputBox);
            setError("ok");
        }}
        {...delegated}
      />
        {(error === "missingField") && <div>This field is required</div>}
        {(error === "outOfRange") && <div>Must be a valid {id}</div>}

    </div>
  );
}

export default NumberInput;
