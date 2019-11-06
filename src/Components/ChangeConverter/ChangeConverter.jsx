import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./ChangeConverter.module.scss";
import { setRate, refreshTransactions } from "../../actions/converterActions";

class ChangeConverter extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    const { value } = this.state;
    const { setRate, refreshTransactions } = this.props;
    this.setState({ value: event.target.value }, () => {
      value && value !== 0 && setRate(value);
      value && value !== 0 && refreshTransactions(value);
    });

    console.log("value :", value);
  };

  handleSubmit = event => {
    const { value } = this.state;
    const { setRate, refreshTransactions } = this.props;
    event.preventDefault();
    console.log("value :", typeof value);
    value && value !== 0 && setRate(value);
    value && value !== 0 && refreshTransactions(value);
    // this.setState({ ...this.state, value: "" });
  };

  render() {
    return (
      <div className={styles.inputContainer}>
        <label htmlFor="converterInput">Wprowadź przelicznik walutowy:</label>
        <input
          type="number"
          name="converterInput"
          min="0"
          max="100"
          className={styles.converterInput}
          value={this.state.value}
          onChange={e => this.handleChange(e)}
        />
        {/* <button onClick={this.handleSubmit}>Przelicz</button> */}
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
