import React from "react";
import styles from "./TransactionMaxInfo.module.scss";

const TransactionMaxInfo = ({ maxTransactionObject }) => {
  return (
    <div className={styles.maxInfoContainer}>
      <h3 className={styles.maxInfoTitle}>
        Informacje dotyczące najwyższej transakcji:
      </h3>
      <p>
        {!maxTransactionObject
          ? ` Nie wprowadziłeś jeszcze żadnych transakcji. `
          : `Nazwa transkacji: ${
              maxTransactionObject.name
            } Kwota do transakcji: ${parseInt(
              maxTransactionObject.amount
            ).toFixed(2)} EUR Wartość transakcji: ${
              maxTransactionObject.conversionAmount
            } PLN `}
      </p>
    </div>
  );
};

export default TransactionMaxInfo;
