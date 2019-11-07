import React, { Component } from "react";
import { connect } from "react-redux";
import ScrollAnimation from "react-animate-on-scroll";
import ChangeConverter from "./Components/ChangeConverter/ChangeConverter";
import ConverterInfo from "./Components/ConverterInfo/ConverterInfo";
import TransactionsList from "./Components/TransactionsList/TransactionList";
import TransactionsSumInfo from "./Components/TransactionsSumInfo/TransactionsSumInfo";
import TransactionMaxInfo from "./Components/TransactionMaxInfo/TransactionMaxInfo";
import NewTransactionDialog from "./Components/NewTransactionDialog/NewTransactionDialog";
import DialogAlert from "./Components/DialogAlert/DialogAlert";
import {
  CURRENCY_CONVERTER_TITLE,
  CURRENCY_CONVERTER_ALERT
} from "./assets/strings";
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
    rate && rate > 0 && rate <= 100
      ? this.setState(prevState => ({
          openDialog: !prevState.openDialog
        }))
      : this.handleDialogAlert();
  };

  render() {
    const { openDialog, isOpenAlert } = this.state;
    const { sumOfTransactions, maxTransactionObject } = this.props;
    console.log("maxTransactionObject :", maxTransactionObject);
    return (
      <div className={styles.container}>
        <ScrollAnimation
          animateIn="fadeInUp"
          initiallyVisible={false}
          duration={2}
          delay={100}
          animateOnce
          animatePreScroll
          style={{ minHeight: "100vh" }}
        >
          <div className={styles.banner}>
            <ChangeConverter />
            <ConverterInfo />
            <div className={styles.buttonContainer}>
              <button className={styles.buttonAdd} onClick={this.handleDialog}>
                Nowa transakcja
              </button>
            </div>
            <TransactionsSumInfo sumOfTransactions={sumOfTransactions} />

            <TransactionMaxInfo maxTransactionObject={maxTransactionObject} />

            <TransactionsList />
            <NewTransactionDialog
              open={openDialog}
              handleDialog={this.handleDialog}
            />
            <DialogAlert
              isOpenAlert={isOpenAlert}
              handleDialogAlert={this.handleDialogAlert}
              title={CURRENCY_CONVERTER_TITLE}
              content={CURRENCY_CONVERTER_ALERT}
            />
          </div>
        </ScrollAnimation>
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
