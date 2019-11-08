import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./ConverterInfo.module.scss";
import { getRate } from "../../actions/converterActions";

const EURO_CHAR = `1.00 EUR`;

class ConverterInfo extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.rate) {
      this.props.getRate();
    }
  }

  render() {
    const { rate } = this.props;
    return (
      <div className={styles.infoContainer}>
        <p>
          {EURO_CHAR} = <span>{!rate || isNaN(rate) ? `x` : rate}</span> PLN
        </p>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getRate: () => dispatch(getRate())
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
)(ConverterInfo);
