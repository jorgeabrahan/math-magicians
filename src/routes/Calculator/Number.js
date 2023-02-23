// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export default function Number({ number, twoCols, onClick }) {
  return (
    <button type="button" className={twoCols ? 'c-span-2' : ''} onClick={() => onClick(number)}>
      {number}
    </button>
  );
}

Number.propTypes = {
  number: PropTypes.number.isRequired,
  twoCols: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Number.defaultProps = {
  twoCols: false,
};
