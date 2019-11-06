import React, { Component } from "react";
import { connect } from "react-redux";
import ChangeConverter from "./Components/ChangeConverter/ChangeConverter";
import ConverterInfo from "./Components/ConverterInfo/ConverterInfo";
import TransactionsList from "./Components/TransactionsList/TransactionList";
import TransactionsSumInfo from "./Components/TransactionsSumInfo/TransactionsSumInfo";
import TransactionMaxInfo from "./Components/TransactionMaxInfo/TransactionMaxInfo";
import NewTransactionDialog from "./Components/NewTransactionDialog/NewTransactionDialog";
import DialogAlert from "./Components/DialogAlert/DialogAlert";
import styles from "./App.module.scss";
import {
  getTransactions,
  sumTransactions,
  getMaxTransaction
} from "./actions/converterActions";

class App extends Component {
  state = {
    openDialog: false,
    isOpenAlert: false
  };

  componentDidUpdate = () => {
    this.props.getTransactions();
    this.props.sumTransactions();
    this.props.getMaxTransaction();
  };

  handleDialogAlert = () =>
    this.setState(prevState => ({
      isOpenAlert: !prevState.isOpenAlert
    }));

  handleDialog = () => {
    const { rate } = this.props;
    rate && rate > 0
      ? this.setState(prevState => ({
          openDialog: !prevState.openDialog
        }))
      : this.handleDialogAlert();
  };

  render() {
    const { openDialog, isOpenAlert } = this.state;
    const {
      transactions,
      sumOfTransactions,
      maxTransactionObject
    } = this.props;
    console.log("maxTransactionObject :", maxTransactionObject);
    return (
      <div className={styles.container}>
        <ChangeConverter />
        <ConverterInfo />
        <button onClick={this.handleDialog}>Dodaj transakcje</button>

        <TransactionsList />
        <TransactionsSumInfo sumOfTransactions={sumOfTransactions} />

        <TransactionMaxInfo maxTransactionObject={maxTransactionObject} />

        <NewTransactionDialog
          open={openDialog}
          handleDialog={this.handleDialog}
        />
        <DialogAlert
          isOpenAlert={isOpenAlert}
          handleDialogAlert={this.handleDialogAlert}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getTransactions: () => dispatch(getTransactions()),
    sumTransactions: () => dispatch(sumTransactions()),
    getMaxTransaction: () => dispatch(getMaxTransaction())
  };
};
const mapStateToProps = state => ({
  transaction: state.transaction,
  transactions: state.transactions,
  rate: state.rate,
  sumOfTransactions: state.sumOfTransactions,
  maxTransactionObject: state.maxTransactionObject
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
