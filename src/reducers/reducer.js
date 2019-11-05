import {
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  DELETE_TRANSACTION
} from "../actions/converterActions";

const reducer = (
  state = { transactions: [], transaction: { name: "", value: 0 } },
  action
) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload.transactions
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
