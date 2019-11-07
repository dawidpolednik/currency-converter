import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./ChangeConverter.module.scss";
import { setRate, refreshTransactions } from "../../actions/converterActions";

class ChangeConverter extends Component {
  state = {
    value: ""
  };

  handleChange = async event => {
    const { value } = this.state;
    const { setRate, refreshTransactions } = this.props;
    await this.setState({ value: event.target.value });
    value && value !== 0 && setRate(value);
    value && value !== 0 && refreshTransactions(value);
    console.log("value :", value);
  };

  handleSubmit = () => {
    const { value } = this.state;
    const { setRate, refreshTransactions } = this.props;
    value && value !== 0 && setRate(value);
    value && value !== 0 && refreshTransactions(value);
  };

  handleChange = event => {
    this.setState(
      { ...this.state, value: event.target.value },
      this.handleSubmit
    );
  };

  render() {
    return (
      <div className={styles.inputContainer}>
        <label htmlFor="converterInput">Wprowadź przelicznik walutowy:</label>
        <input
          type="number"
          name="converterInput"
          min="0"
          className={styles.converterInput}
          value={this.state.value}
          onChange={this.handleChange}
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
