import React from "react";

const TransactionsSumInfo = ({ sumOfTransactions }) => {
  //   console.log("sumOfTransactions :", sumOfTransactions);
  return (
    <div>
      <p>
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
