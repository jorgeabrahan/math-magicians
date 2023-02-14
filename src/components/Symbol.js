import PropTypes from 'prop-types';

export default function Symbol({ symbol, orange }) {
  return (
    <button type="button" className={orange ? 'orange' : ''}>
      {symbol}
    </button>
  );
}

Symbol.propTypes = {
  symbol: PropTypes.string.isRequired,
  orange: PropTypes.bool,
};

Symbol.defaultProps = {
  orange: false,
};
