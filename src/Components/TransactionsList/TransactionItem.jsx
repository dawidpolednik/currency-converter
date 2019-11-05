import React from "react";

const TransactionItem = ({ name, amount, conversionAmount, index }) => (
  <p>
    {`Nazwa: ${name} Kwota(EUR): ${amount} Wartość transakcji: ${conversionAmount}`}
  </p>
);

export default TransactionItem;
