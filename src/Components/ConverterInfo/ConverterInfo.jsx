import React from "react";
import styles from "./ConverterInfo.module.scss";

const ConverterInfo = () => {
  const euroChar = `1 EUR`;
  return (
    <div className={styles.infoContainer}>
      <p>
        {euroChar} = <span></span> PLN
      </p>
    </div>
  );
};

export default ConverterInfo;
