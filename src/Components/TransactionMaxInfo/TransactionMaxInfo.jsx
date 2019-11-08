import React from "react";
import styles from "./TransactionMaxInfo.module.scss";

const TransactionMaxInfo = ({ maxTransactionObject }) => {
  const transactionName = `Nazwa transakcji: ${maxTransactionObject.name}`;

  const transactionValue = `Kwota do transakcji: ${parseFloat(
    maxTransactionObject.amount
  ).toFixed(2)} EUR`;

  const transactionResult = `Wartość transakcji: ${maxTransactionObject.conversionAmount} PLN `;

  return (
    <div className={styles.maxInfoContainer}>
      <h3 className={styles.maxInfoTitle}>
        Informacje dotyczące najwyższej transakcji:
      </h3>
      <p className={styles.maxInfoParagraph}>
        {!maxTransactionObject
          ? ` Nie wprowadziłeś jeszcze żadnych transakcji. `
          : `${transactionName} | ${transactionValue} | ${transactionResult}`}
      </p>
    </div>
  );
};

export default TransactionMaxInfo;
