import PropTypes from "prop-types";

import "./button.css";

const propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
};

const defaultProps = {
  onClick: () => null,
  title: "ButtonName",
};

const Button = ({ onClick, title }) => {
  return (
    <>
      <button className="button" onClick={onClick}>
        {title}
      </button>
    </>
  );
};

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

export default Button;
