import React from "react";

const TransactionItem = ({
  name,
  amount,
  conversionAmount,
  index,
  toDelete,
  key
}) => {
  {
    console.log("name :", name);
  }
  return (
    <>
      <p>
        {`Nazwa: ${name} Kwota(EUR) : ${parseInt(amount).toFixed(
          2
        )} Wartość transakcji(PLN): ${conversionAmount}`}
      </p>
      <button onClick={() => toDelete(name)}>Usuń transakcje</button>
    </>
  );
};

export default TransactionItem;
