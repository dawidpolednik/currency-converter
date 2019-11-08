import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./ChangeConverter.module.scss";
import { setRate, refreshTransactions } from "../../actions/converterActions";
import DialogAlert from "../DialogAlert/DialogAlert";
import {
  CURRENCY_CONVERTER_TITLE,
  CURRENCY_CONVERTER_ALERT
} from "../../assets/strings";

class ChangeConverter extends Component {
  state = {
    value: "",
    isOpenAlert: false
  };

  handleDialogAlert = () =>
    this.setState(prevState => ({
      isOpenAlert: !prevState.isOpenAlert
    }));

  handleSubmit = () => {
    const { value } = this.state;
    const { setRate, refreshTransactions } = this.props;
    value && value !== 0 && setRate(value);
    value && value !== 0 && refreshTransactions(value);
  };

  handleDialog = async () => {
    await this.handleDialogAlert();
    this.setState({
      ...this.state,
      value: ""
    });
  };

  handleChange = event => {
    this.setState(
      { ...this.state, value: event.target.value.replace(/,/g, ".") },
      parseFloat(event.target.value) > 100 ||
        isNaN(event.target.value.replace(/,/g, "."))
        ? this.handleDialog
        : this.handleSubmit
    );
  };

  render() {
    const { isOpenAlert } = this.state;
    return (
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel} htmlFor="converterInput">
          Wprowadź przelicznik walutowy:
        </label>
        <input
          name="converterInput"
          className={styles.converterInput}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <DialogAlert
          isOpenAlert={isOpenAlert}
          handleDialogAlert={this.handleDialogAlert}
          title={CURRENCY_CONVERTER_TITLE}
          content={CURRENCY_CONVERTER_ALERT}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setRate: rate => dispatch(setRate(rate)),
    refreshTransactions: newRate => dispatch(refreshTransactions(newRate))
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
)(ChangeConverter);
