import React from "react";

const TransactionMaxInfo = ({ maxTransactionObject }) => {
  return (
    // <div key={name}>
    //   <h3>Informacje dotyczące najwyższej transakcji</h3>
    //   <p>Nazwa: {maxTransactionObject.name}</p>
    //   <p>Kwota w PLN {maxTransactionObject.amount}</p>
    //   <p>Kwota w EUR {maxTransactionObject.conversionAmount}</p>
    // </div>

    <div>
      <h3>Dane związane z najwyższą transakcją</h3>
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
