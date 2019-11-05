export const GET_TRANSACTIONS = "GET_TRANSACTIONS";
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";

export const getTransactions = data => ({
  type: GET_TRANSACTIONS,
  payload: {
    transactions: data.transactions
  }
});

export const addTransaction = transaction => ({
  type: ADD_TRANSACTION,
  payload: {
    transaction: transaction
  }
});

export const deleteTransaction = transaction => ({
  type: DELETE_TRANSACTION,
  payload: {
    transactionToDelete: transaction
  }
});
