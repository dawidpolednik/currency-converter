import React from "react";

const TransactionMaxInfo = ({ maxValueOfTransactions }) => {
  //   console.log("sumOfTransactions :", sumOfTransactions);
  return (
    <div>
      <p>
        Wartość najwyższej transakcji wynosi:
        <span>
          {!maxValueOfTransactions ||
          maxValueOfTransactions == Number.NEGATIVE_INFINITY
            ? ` 0 `
            : ` ${maxValueOfTransactions} `}
          PLN
        </span>
      </p>
    </div>
  );
};

export default TransactionMaxInfo;
