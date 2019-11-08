import React from "react";
import styles from "./TransactionMaxInfo.module.scss";
import {
  NAME_TITLE,
  AMOUNT_TITLE,
  CONVERSION_AMOUNT_TITLE
} from "../TransactionsList/TransactionItem";

const TransactionMaxInfo = ({ maxTransactionObject }) => {
  const amountValue = `${parseFloat(maxTransactionObject.amount).toFixed(
    2
  )} EUR`;

  const conversionAmountValue = `${maxTransactionObject.conversionAmount} PLN`;

  return (
    <>
      <div className={styles.maxInfoContainer}>
        <h3 className={styles.maxInfoTitle}>
          Informacje dotyczące najwyższej transakcji:
        </h3>
      </div>

      {maxTransactionObject ? (
        <div className={styles.itemContainer}>
          <div className={styles.dataContainer}>
            <p className={styles.itemParagraph}>{NAME_TITLE}</p>
            <p className={styles.itemParagraph}>{maxTransactionObject.name}</p>
          </div>
          <div className={styles.dataContainer}>
            <p className={styles.itemParagraph}>{AMOUNT_TITLE}</p>
            <p className={styles.itemParagraph}>{amountValue}</p>
          </div>
          <div className={styles.dataContainer}>
            <p className={styles.itemParagraph}>{CONVERSION_AMOUNT_TITLE}</p>
            <p className={styles.itemParagraph}>{conversionAmountValue}</p>
          </div>
        </div>
      ) : (
        <p className={styles.maxInfoParagraph}>
          Nie wprowadziłeś jeszcze żadnych transakcji.
        </p>
      )}
    </>
  );
};

export default TransactionMaxInfo;
