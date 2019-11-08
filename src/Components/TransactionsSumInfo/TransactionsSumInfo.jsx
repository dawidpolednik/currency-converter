import React from "react";
import styles from "./TransactionsSumInfo.module.scss";

const TransactionsSumInfo = ({ sumOfTransactions }) => {
  const getValidSum =
    !sumOfTransactions || isNaN(sumOfTransactions)
      ? ` 0 PLN`
      : ` ${sumOfTransactions} PLN`;

  return (
    <div className={styles.sumInfoContainer}>
      <p className={styles.sumInfoParagraph}>
        Suma wszystkich transakcji wynosi:
        <span>{getValidSum}</span>
      </p>
    </div>
  );
};

export default TransactionsSumInfo;
