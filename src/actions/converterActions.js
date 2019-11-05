export const GET_TRANSACTIONS = "GET_TRANSACTIONS";
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const SET_RATE = "SET_RATE";
export const GET_RATE = "GET_RATE";

export const getRate = () => ({
  type: GET_RATE
});

export const setRate = rate => ({
  type: SET_RATE,
  payload: {
    rate
  }
});

export const getTransactions = () => ({
  type: GET_TRANSACTIONS
});

export const addTransaction = transaction => ({
  type: ADD_TRANSACTION,
  payload: {
    transaction
  }
});

export const deleteTransaction = transaction => ({
  type: DELETE_TRANSACTION,
  payload: {
    transactionToDelete: transaction
  }
});
