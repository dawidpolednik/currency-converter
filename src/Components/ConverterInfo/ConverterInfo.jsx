import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./ConverterInfo.module.scss";
import { getRate } from "../../actions/converterActions";

class ConverterInfo extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.rate !== this.props.rate && this.props.rate) {
      this.props.getRate();
    }
  }

  render() {
    const { rate } = this.props;
    console.log(rate, typeof rate);
    const euroChar = `1.00 EUR`;
    return (
      <div className={styles.infoContainer}>
        <p>
          {euroChar} = <span>{!rate || isNaN(rate) ? `x` : rate}</span> PLN
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
