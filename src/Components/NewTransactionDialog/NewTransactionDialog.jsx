import React, { Component } from "react";
import { connect } from "react-redux";
import { getRate, addTransaction } from "../../actions/converterActions";
import DialogAlert from "../DialogAlert/DialogAlert";
import {
  ADD_TRANSACTION_TITLE,
  ADD_TRANSACTION_ALERT
} from "../../assets/strings";
import {
  withStyles,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  TextField
} from "@material-ui/core";

import style from "./NewTransactionDialog.styles.js";

class NewTransactionDialog extends Component {
  state = {
    openDialog: false,
    isOpenAlert: false,
    transaction: {
      name: "",
      amount: ""
    }
  };

  componentDidMount = () => {
    this.props.getRate();
  };
  componentDidUpdate = prevProps => {
    const { open } = this.props;
    if (open !== prevProps.open) {
      this.setState({
        openDialog: open
      });
    }
  };

  handleDialogAlert = () =>
    this.setState(prevState => ({
      isOpenAlert: !prevState.isOpenAlert
    }));

  resetValues = () =>
    this.setState({
      transaction: {
        ...this.state.transaction,
        name: "",
        amount: ""
      }
    });

  handleChangeName = e =>
    this.setState({
      transaction: {
        ...this.state.transaction,
        name: e.target.value
      }
    });
  handleChangeAmount = e =>
    this.setState({
      transaction: {
        ...this.state.transaction,
        amount: e.target.value.replace(/,/g, ".")
      }
    });

  get isFormValid() {
    const { name, amount } = this.state.transaction;
    return (
      name &&
      name.length > 0 &&
      (amount && amount > 0 && amount <= Math.pow(10, 6))
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, amount } = this.state.transaction;
    const { rate, handleDialog, addTransaction } = this.props;
    const conversionAmount = parseFloat(amount * rate).toFixed(2);
    this.isFormValid
      ? addTransaction({ name, amount, conversionAmount })
      : this.handleDialogAlert();
    this.resetValues();
    handleDialog();
  };

  goBack = () => {
    const { handleDialog } = this.props;
    this.resetValues();
    handleDialog();
  };

  render() {
    const { classes } = this.props;
    const { openDialog, isOpenAlert, transaction } = this.state;
    const open = Boolean(openDialog);
    return (
      <>
        <Dialog
          className={classes.dialog}
          open={open}
          keepMounted
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          maxWidth={false}
          // PaperProps={{ style: { width: "100%" } }}
        >
          <DialogContent className={classes.dialogContent}>
            <DialogTitle
              className={classes.dialogTitle}
              id="alert-dialog-slide-title"
            >
              {"Wprowadź dane"}
            </DialogTitle>

            <TextField
              id="outlined-basic"
              className={classes.field}
              label="Nazwa"
              margin="normal"
              variant="outlined"
              value={transaction.name}
              onChange={this.handleChangeName}
            />

            <TextField
              id="outlined-basic"
              className={classes.field}
              label="&euro;"
              margin="normal"
              variant="outlined"
              value={transaction.amount}
              onChange={this.handleChangeAmount}
            />
          </DialogContent>
          <DialogActions className={classes.dialogActions}>
            <div className={classes.buttonsContainer}>
              <Button
                variant="contained"
                onClick={this.goBack}
                size="large"
                className={classes.button}
              >
                Wstecz
              </Button>

              <Button
                variant="contained"
                size="large"
                className={classes.button}
                onClick={this.handleSubmit}
              >
                Dodaj
              </Button>
            </div>
          </DialogActions>
        </Dialog>
        <DialogAlert
          isOpenAlert={isOpenAlert}
          handleDialogAlert={this.handleDialogAlert}
          title={ADD_TRANSACTION_TITLE}
          content={ADD_TRANSACTION_ALERT}
        />
      </>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getRate: () => dispatch(getRate()),
    addTransaction: transaction => dispatch(addTransaction(transaction))
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
)(withStyles(style)(NewTransactionDialog));
