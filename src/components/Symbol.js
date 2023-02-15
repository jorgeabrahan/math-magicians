import PropTypes from 'prop-types';

export default function Symbol({ symbol, orange, onClick }) {
  return (
    <button type="button" className={orange ? 'orange' : ''} onClick={() => onClick(symbol)}>
      {symbol}
    </button>
  );
}

Symbol.propTypes = {
  symbol: PropTypes.string.isRequired,
  orange: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Symbol.defaultProps = {
  orange: false,
};
