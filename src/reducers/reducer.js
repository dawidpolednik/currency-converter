import {
  GET_RATE,
  SET_RATE,
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  REFRESH_TRANSACTIONS,
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
    maxTransactionObject: {}
  },
  action
) => {
  switch (action.type) {
    case GET_RATE:
      return {
        ...state,
        rate: parseFloat(state.rate).toFixed(2)
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
    case REFRESH_TRANSACTIONS:
      return {
        ...state,
        transactions: state.transactions.map(({ name, amount }) => ({
          name,
          amount,
          conversionAmount: parseFloat(amount * action.payload.newRate).toFixed(
            2
          )
        }))
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
                  parseFloat(prevTransaction.conversionAmount) +
                  parseFloat(currentTransaction.conversionAmount)
                ).toFixed(2)
              )
            : state.transactions &&
              state.transactions.length === 1 &&
              state.transactions[0].conversionAmount
      };
    case GET_MAX_TRANSACTION:
      const findObjectMaxValue = () => {
        return state.transactions && state.transactions.length > 1
          ? state.transactions.reduce((prevTransaction, currentTransaction) =>
              parseFloat(prevTransaction.conversionAmount) >
              parseFloat(currentTransaction.conversionAmount)
                ? prevTransaction
                : currentTransaction
            )
          : state.transactions &&
              state.transactions.length === 1 &&
              state.transactions[0];
      };

      return {
        ...state,
        maxTransactionObject: findObjectMaxValue()
      };
    default:
      return state;
  }
};
export default reducer;
