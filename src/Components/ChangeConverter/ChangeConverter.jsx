import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./ChangeConverter.module.scss";
import { setRate } from "../../actions/converterActions";

class ChangeConverter extends Component {
  state = {
    value: ""
  };
  handleChange = event => this.setState({ value: event.target.value });
  handleSubmit = event => {
    const { value } = this.state;
    const { setRate } = this.props;
    event.preventDefault();
    console.log("value :", value);
    value && value !== 0 && setRate(value);
    this.setState({ value: "" });
  };
  render() {
    return (
      <div className={styles.inputContainer}>
        <label htmlFor="converterInput">Wprowadź przelicznik walutowy:</label>
        <input
          type="number"
          name="converterInput"
          min="10"
          max="100"
          className={styles.converterInput}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Przelicz</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setRate: rate => dispatch(setRate(rate))
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