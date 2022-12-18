import PropTypes from 'prop-types';

const capitalizeFirst = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function FeedbackOptions({ text, onLeaveFeedback }) {
  return (
    <button type="button" name={text} onClick={onLeaveFeedback}>
      {capitalizeFirst(text)}
    </button>
  );
}

FeedbackOptions.propTypes = {
  text: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
