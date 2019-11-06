import {
  GET_RATE,
  SET_RATE,
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  SUM_TRANSACTIONS,
  GET_MAX_TRANSACTION
} from "../actions/converterActions";

const reducer = (
  state = {
    transactions: [],
    transaction: {
      name: "",
      amount: 0,
      conversionAmount: 0
    },
    sumOfTransactions: 0,
    maxValueOfTransactions: ""
  },
  action
) => {
  switch (action.type) {
    case GET_RATE:
      return {
        ...state,
        rate: parseInt(state.rate).toFixed(2)
      };
    case SET_RATE:
      return {
        ...state,
        rate: action.payload.rate
      };
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: state.transactions
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload.transaction, ...state.transactions]
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction !== action.payload.transactionToDelete
        )
      };
    case SUM_TRANSACTIONS:
      console.log("state.transactions :", state.transactions);
      return {
        ...state,
        sumOfTransactions:
          state.transactions && state.transactions.length > 1
            ? state.transactions.reduce((prevTransaction, currentTransaction) =>
                (
                  parseInt(prevTransaction.conversionAmount) +
                  parseInt(currentTransaction.conversionAmount)
                ).toFixed(2)
              )
            : state.transactions &&
              state.transactions.length === 1 &&
              state.transactions[0].conversionAmount
      };
    case GET_MAX_TRANSACTION:
      return {
        ...state,
        maxValueOfTransactions:
          state.transactions &&
          Math.max
            .apply(
              Math,
              state.transactions.map(
                transaction => transaction.conversionAmount
              )
            )
            .toFixed(2)
      };
    default:
      return state;
  }
};
export default reducer;
