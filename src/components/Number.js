import PropTypes from 'prop-types';

export default function Number({ number, twoCols }) {
  return (
    <button type="button" className={twoCols ? 'c-span-2' : ''}>
      {number}
    </button>
  );
}

Number.propTypes = {
  number: PropTypes.number.isRequired,
  twoCols: PropTypes.bool,
};

Number.defaultProps = {
  twoCols: false,
};
