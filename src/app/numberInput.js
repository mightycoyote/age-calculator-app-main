import { useState, useContext } from "react";
import { PageErrorContext } from "./datePicker";
import styles from "./numberInput.module.css";

function NumberInput({ id, otherTest, ...delegated }) {
  // need to figure out how to make a change in pageError state also change to the error styles without breaking everything
  const { pageError, setPageError } = useContext(PageErrorContext);
  const [status, setStatus] = useState("ok");
  const [classes, setClasses] = useState(`${styles.numberInput}`);


  // this _is_ used by otherTest when checking year
  const currentYear = new Date().getFullYear();

  return (
    // should be numberInput class
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
            setStatus("missingField",);
            setClasses(`${styles.numberInput} ${styles.error}`)
            return;
          }
          if (eval(otherTest)) {
            setStatus("outOfRange",);
            setClasses(`${styles.numberInput} ${styles.error}`)
            return;
          }
        }}
        onFocus={() => {
          setStatus("ok");
          setClasses(`${styles.numberInput}`);
          setPageError("ok");
        }}
        {...delegated}
      />
      {status === "missingField" && (
        <div className={styles.errorMessage}>This field is required</div>
      )}
      {status === "outOfRange" && id !== "year" && (
        <div className={styles.errorMessage}>Must be a valid {id}</div>
      )}
      {status === "outOfRange" && id === "year" && (
        <div className={styles.errorMessage}>Must be in the past</div>
      )}
    </div>
  );
}

// function determineClasses(status, pageError) {
//   let classes;
//   if (status === "ok" && pageError === "ok") {
//     classes = `${styles.numberInput}`;
//   }
//   else {
//     classes = `${styles.numberInput} ${styles.error}`;
//   }
//   return classes;
// }

export default NumberInput;
