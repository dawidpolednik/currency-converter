import React from "react";
import styles from "./TransactionList.module.scss";

export const NAME_TITLE = "Nazwa:";
export const AMOUNT_TITLE = "Kwota do przeliczenia:";
export const CONVERSION_AMOUNT_TITLE = "Wartość transakcji:";

export const renderData = (title, value) => (
  <div className={styles.dataContainer}>
    <p className={styles.itemParagraph}>{title}</p>
    <p className={styles.itemParagraph}>{value}</p>
  </div>
);

const TransactionItem = ({
  name,
  amount,
  conversionAmount,
  index,
  toDelete
}) => {
  const amountValue = `${parseFloat(amount).toFixed(2)} EUR`;
  const conversionAmountValue = `${conversionAmount} PLN`;
  return (
    <li key={index} className={styles.itemContainer}>
      {renderData(NAME_TITLE, name)}
      {renderData(AMOUNT_TITLE, amountValue)}
      {renderData(CONVERSION_AMOUNT_TITLE, conversionAmountValue)}
      <button className={styles.deleteButton} onClick={() => toDelete()}>
        Usuń
      </button>
    </li>
  );
};

export default TransactionItem;
