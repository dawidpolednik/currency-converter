import {
  GET_RATE,
  SET_RATE,
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  DELETE_TRANSACTION
} from "../actions/converterActions";

const reducer = (
  state = {
    transactions: [],
    transaction: { name: "", amount: 0, amountConversion: 0 }
  },
  action
) => {
  switch (action.type) {
    case GET_RATE:
      return {
        ...state,
        rate: state.rate
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
          transaction =>
            transaction.Id !== action.payload.transactionToDelete.Id
        )
      };

    default:
      return state;
  }
};
export default reducer;
