import PropTypes from 'prop-types';

export default function Screen({ displayValue }) {
  const value = displayValue();
  return <p className="calculator__screen">{value === null ? '0' : value}</p>;
}

Screen.propTypes = {
  displayValue: PropTypes.func,
};

Screen.defaultProps = {
  displayValue: () => {},
};
