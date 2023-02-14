import PropTypes from 'prop-types';

export default function Screen({ content }) {
  return <p className="calculator__screen">{content}</p>;
}

Screen.propTypes = {
  content: PropTypes.string,
};

Screen.defaultProps = {
  content: '0',
};
