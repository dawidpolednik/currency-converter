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

const getSumPropertyObjects = transactionList =>
  transactionList.reduce((prev, current) =>
    (
      parseFloat(prev.conversionAmount) + parseFloat(current.conversionAmount)
    ).toFixed(2)
  );

const getPropertyOneObject = transactionList =>
  transactionList &&
  transactionList.length === 1 &&
  transactionList[0].conversionAmount;

const getObjectWithMaxProperty = transactionList =>
  transactionList.reduce((prev, current) =>
    parseFloat(prev.conversionAmount) > parseFloat(current.conversionAmount)
      ? prev
      : current
  );

const getOneObject = transactionList =>
  transactionList && transactionList.length === 1 && transactionList[0];

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
      return {
        ...state,
        sumOfTransactions:
          state.transactions && state.transactions.length > 1
            ? getSumPropertyObjects(state.transactions)
            : getPropertyOneObject(state.transactions)
      };
    case GET_MAX_TRANSACTION:
      const findObjectMaxValue = () => {
        return state.transactions && state.transactions.length > 1
          ? getObjectWithMaxProperty(state.transactions)
          : getOneObject(state.transactions);
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
