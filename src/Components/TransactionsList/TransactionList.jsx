import React, { Component } from "react";
import { connect } from "react-redux";
// import styles from "./Transaction.module.scss";
import TransactionsItem from "./TransactionItem";
import { getRate } from "../../actions/converterActions";

class TransactionsList extends Component {
  componentDidMount = () => {
    const { getRate } = this.props;
    getRate();
  };
  componentDidUpdate(prevProps) {}
  render() {
    const { transactions } = this.props;
    return (
      <ul>
        {transactions.map((transaction, index) => (
          <li key={transaction.name}>
            <TransactionsItem
              name={transaction.name}
              amount={transaction.amount}
              conversionAmount={transaction.conversionAmount}
              index={index}
            />
          </li>
        ))}
      </ul>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getRate: () => dispatch(getRate())
  };
};
const mapStateToProps = state => ({
  transactions: state.transactions
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsList);
