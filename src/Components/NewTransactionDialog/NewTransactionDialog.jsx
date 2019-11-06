import React, { Component } from "react";
import { connect } from "react-redux";
import { getRate, addTransaction } from "../../actions/converterActions";

import {
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment
} from "@material-ui/core";

class NewTransactionDialog extends Component {
  state = {
    openDialog: false,
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
        amount: e.target.value
      }
    });

  handleSubmit = e => {
    e.preventDefault();

    const { name, amount } = this.state.transaction;
    const { rate, handleDialog } = this.props;
    const conversionAmount = parseInt(amount * rate).toFixed(2);
    this.props.addTransaction({ name, amount, conversionAmount });
    this.resetValues();
    return this.props.handleDialog();
  };

  goBack = () => {
    const { handleDialog } = this.props;
    this.resetValues();
    handleDialog();
  };

  render() {
    const { classes } = this.props;
    const { openDialog, transaction } = this.state;
    const open = Boolean(openDialog);
    return (
      <>
        <Dialog
          open={open}
          keepMounted
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Prosze wprowadź dane wymagane do przeprowadzenia transakcji."}
          </DialogTitle>

          <TextField
            id="outlined-basic"
            // className={classes.textField}
            label="Nazwa"
            margin="normal"
            variant="outlined"
            value={transaction.name}
            onChange={this.handleChangeName}
          />
          <InputLabel htmlFor="outlined-adornment-amount">Kwota</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            type="number"
            value={transaction.amount}
            onChange={this.handleChangeAmount}
            startAdornment={
              <InputAdornment position="start">&euro;</InputAdornment>
            }
            labelWidth={60}
          />

          <DialogActions>
            <Button onClick={this.handleSubmit} color="primary">
              Dodaj
            </Button>
            <Button onClick={this.goBack} color="primary">
              Wstecz
            </Button>
          </DialogActions>
        </Dialog>
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
)(NewTransactionDialog);
