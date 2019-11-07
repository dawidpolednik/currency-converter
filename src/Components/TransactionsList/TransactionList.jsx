import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./TransactionList.module.scss";
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
  };

  render() {
    const { transactions, deleteTransaction } = this.props;
    return (
      <div className={styles.listContainer}>
        {transactions && transactions.length !== 0 && (
          <p className={styles.listTitle}>Lista transakcji</p>
        )}
        <ul className={styles.listTransactions}>
          {transactions.map((transaction, index) => (
            <TransactionsItem
              name={transaction.name}
              amount={transaction.amount}
              conversionAmount={transaction.conversionAmount}
              index={index}
              toDelete={() => deleteTransaction(transaction)}
              key={index}
            />
          ))}
        </ul>
      </div>
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
