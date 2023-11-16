import { useState } from "react";
import styles from "./numberInput.module.css";

function NumberInput({ id, otherTest, setPageError, ...delegated }) {

  const [error, setError] = useState({
    status: "ok",
    classes: `${styles.numberInput}`,
  });

  // this _is_ used by otherTest when checking year
  const currentYear = new Date().getFullYear();

  return (
    // should be numberInput class
    <div className={error.classes}>
      <label htmlFor={id}>{id}</label>
      <input
        className={styles.inputBox}
        id={id}
        size="2"
        required={true}
        type="number"
        onBlur={(event) => {
          if (event.target.value === "") {
            setError({
              status: "missingField",
              classes: `${styles.numberInput} ${styles.error}`,
            });
            return;
          }
          if (eval(otherTest)) {
            setError({
              status: "outOfRange",
              classes: `${styles.numberInput} ${styles.error}`,
            });
            return;
          }
        }}
        onFocus={() => {
          setError({
            status: "ok",
            classes: `${styles.numberInput}`,
          });
          setPageError("ok");
        }}
        {...delegated}
      />
      {error.status === "missingField" && (
        <div className={styles.errorMessage}>This field is required</div>
      )}
      {error.status === "outOfRange" && id !== "year" && (
        <div className={styles.errorMessage}>Must be a valid {id}</div>
      )}
      {error.status === "outOfRange" && id === "year" && (
        <div className={styles.errorMessage}>Must be in the past</div>
      )}
    </div>
  );
}

export default NumberInput;
