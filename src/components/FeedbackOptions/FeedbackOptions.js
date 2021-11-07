import { Component } from "react";
import PropTypes from "prop-types";
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

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
