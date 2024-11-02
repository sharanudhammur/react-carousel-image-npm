// src/stories/Input.jsx
import React from "react";
import PropTypes from "prop-types";
import "./Input.css"; // Optional: Include your CSS styles

const Input = ({ size, value, onChange, placeholder }) => {
  return (
    <input
      className={`my-input ${size}`} // Add class based on size
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]), // Accepts 'small' or 'large'
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  size: "medium", // Default size
  placeholder: "Enter text..." // Default placeholder
};

export default Input;
