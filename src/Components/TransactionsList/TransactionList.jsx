import React, { Component } from "react";
import { connect } from "react-redux";
// import styles from "./Transaction.module.scss";
import TransactionsItem from "./TransactionItem";
import {
  getRate,
  deleteTransaction,
  getTransactions
} from "../../actions/converterActions";

class TransactionsList extends Component {
  componentDidMount = () => {
    const { getRate } = this.props;
    getRate();
  };
  componentDidUpdate = () => {
    this.props.getTransactions();
    console.log("this.props.transactions :", this.props.transactions);
  };

  render() {
    const { transactions, deleteTransaction } = this.props;
    return (
      <ul>
        {transactions.map((transaction, index) => (
          <li key={transaction.name}>
            <TransactionsItem
              name={transaction.name}
              amount={transaction.amount}
              conversionAmount={transaction.conversionAmount}
              index={index}
              toDelete={deleteTransaction}
            />
          </li>
        ))}
      </ul>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getRate: () => dispatch(getRate()),
    deleteTransaction: transactionId =>
      dispatch(deleteTransaction(transactionId)),
    getTransactions: () => dispatch(getTransactions())
  };
};
const mapStateToProps = state => ({
  transactions: state.transactions
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsList);
