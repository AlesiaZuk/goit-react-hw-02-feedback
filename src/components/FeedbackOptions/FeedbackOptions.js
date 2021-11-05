import { Component } from "react";
import s from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        <button
          className={s.button}
          type="button"
          name={options}
          onClick={onLeaveFeedback}
        >
          {options}
        </button>
      </>
    );
  }
}

export default FeedbackOptions;
