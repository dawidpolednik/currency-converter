import React from "react";
import styles from "./TransactionList.module.scss";
const TransactionItem = ({
  name,
  amount,
  conversionAmount,
  index,
  toDelete,
  key
}) => {
  return (
    <div className={styles.itemContainer}>
      <p className={styles.itemParagraph}>
        {`Nazwa: ${name} Kwota(EUR) : ${parseInt(amount).toFixed(
          2
        )} Wartość transakcji(PLN): ${conversionAmount}`}
      </p>
      <button className={styles.deleteButton} onClick={() => toDelete()}>
        Usuń
      </button>
    </div>
  );
};

export default TransactionItem;
