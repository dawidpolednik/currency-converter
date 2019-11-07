import React from "react";
import styles from "./TransactionsSumInfo.module.scss";

const TransactionsSumInfo = ({ sumOfTransactions }) => {
  return (
    <div className={styles.sumInfoContainer}>
      <p className={styles.sumInfoParagraph}>
        Suma wszystkich transakcji wynosi:
        <span>
          {!sumOfTransactions || isNaN(sumOfTransactions)
            ? ` 0 `
            : ` ${sumOfTransactions} `}
          PLN
        </span>
      </p>
    </div>
  );
};

export default TransactionsSumInfo;
