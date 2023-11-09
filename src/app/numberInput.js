import styles from "./numberInput.module.css"

function NumberInput( {id, ...delegated} ) {
  return (
    <div className={styles.numberInput}>
      <label htmlFor={id}>{id}</label>
      <input
        className={styles.inputBox}
        id={id}
        size="4"
        required={true}
        type="number"
        min="1"
        {...delegated}
      />
    </div>
  );
}

export default NumberInput;
