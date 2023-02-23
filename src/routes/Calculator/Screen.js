// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export default function Screen({ displayValue }) {
  const value = displayValue();
  return (
    <p className="calculator__screen" data-testid="calcScreen">
      {value === null ? '0' : value}
    </p>
  );
}

Screen.propTypes = {
  displayValue: PropTypes.func,
};

Screen.defaultProps = {
  displayValue: () => {},
};
