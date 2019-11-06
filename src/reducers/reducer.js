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
    transaction: { name: "", amount: 0, conversionAmount: 0 }
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
      console.log(
        "action.payload.transactionToDelete :",
        action.payload.transactionToDelete
      );
      return {
        ...state,
        // transactions: state.transactions.splice(
        //   action.payload.transactionToDelete,
        //   1
        // )
        transactions: state.transactions.filter(
          transaction => transaction !== action.payload.transactionToDelete
        )
      };

    default:
      return state;
  }
};
export default reducer;
