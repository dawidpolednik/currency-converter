import React, { Component } from "react";
import { connect } from "react-redux";
import ChangeConverter from "./Components/ChangeConverter/ChangeConverter";
import ConverterInfo from "./Components/ConverterInfo/ConverterInfo";
import NewTransactionDialog from "./Components/NewTransactionDialog/NewTransactionDialog";
import styles from "./App.module.scss";
import { getTransactions } from "./actions/converterActions";

class App extends Component {
  state = {
    openDialog: false
  };

  componentDidUpdate = () => {
    this.props.getTransactions();
  };

  handleDialog = () => {
    this.setState(prevState => ({
      openDialog: !prevState.openDialog
    }));
  };

  render() {
    const { openDialog } = this.state;
    const { transaction } = this.props;
    console.log("transaction :", transaction);
    return (
      <div className={styles.container}>
        <ChangeConverter />
        <ConverterInfo />
        <button onClick={this.handleDialog}>Dodaj transakcje</button>
        <NewTransactionDialog
          open={openDialog}
          handleDialog={this.handleDialog}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getTransactions: () => dispatch(getTransactions())
  };
};
const mapStateToProps = state => ({
  transaction: state.transaction,
  transactions: state.transactions,
  rate: state.rate
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
