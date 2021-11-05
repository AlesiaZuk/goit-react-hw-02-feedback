import { Component } from "react";
import s from "./Statistics.module.css";

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <p className={s.text}>Good:{good}</p>
        <p className={s.text}>Neutral:{neutral}</p>
        <p className={s.text}>Bad:{bad}</p>
        <p className={s.text}>Total:{total}</p>
        <p className={s.text}>
          Positive feedback:
          {positivePercentage}%
        </p>
      </>
    );
  }
}

export default Statistics;
