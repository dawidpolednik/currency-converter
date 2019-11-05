import React from "react";
import styles from "./ChangeConverter.module.scss";

const ChangeConverter = () => (
  <div className={styles.inputContainer}>
    <label for="converterInput">Wprowadź przelicznik walutowy:</label>
    <input
      type="number"
      name="converterInput"
      min="10"
      max="100"
      className={styles.converterInput}
    />
  </div>
);

export default ChangeConverter;
