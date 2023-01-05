import PropTypes from "prop-types";

export const linkPropTypes = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  text: PropTypes.string,
  newTab: PropTypes.bool,
});

export const mediaPropTypes = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  alternativeText: PropTypes.string,
  mime: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const buttonLinkPropTypes = PropTypes.shape({
  theme: PropTypes.string,
  text: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  icon: PropTypes.any,
});
