import React from "react";
import styles from "./TransactionMaxInfo.module.scss";

const TransactionMaxInfo = ({ maxTransactionObject }) => {
  return (
    <div className={styles.maxInfoContainer}>
      <h3 className={styles.maxInfoTitle}>
        Informacje dotyczące najwyższej transakcji:
      </h3>
      <p className={styles.maxInfoParagraph}>
        {!maxTransactionObject
          ? ` Nie wprowadziłeś jeszcze żadnych transakcji. `
          : `Nazwa transakcji: ${
              maxTransactionObject.name
            } | Kwota do transakcji: ${parseFloat(
              maxTransactionObject.amount
            ).toFixed(2)} EUR | Wartość transakcji: ${
              maxTransactionObject.conversionAmount
            } PLN `}
      </p>
    </div>
  );
};

export default TransactionMaxInfo;
