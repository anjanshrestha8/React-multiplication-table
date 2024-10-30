import PropTypes from "prop-types";

import "./inputField.css";

const propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setNumber: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

const defaultProps = {
  number: "",
  setNumber: () => null,
  placeholder: ""
};

const InputField = ({ number, setNumber, placeholder }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        className="input"
        type="text"
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      />
    </div>
  );
};

InputField.propTypes = propTypes;

InputField.defaultProps = defaultProps;

export default InputField;
