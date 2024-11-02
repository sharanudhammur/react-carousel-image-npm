import React from "react";
import PropTypes from "prop-types";
import "./Button.css"; // Add your CSS styles here

const Button = ({ label, onClick, style }) => {
  return (
    <button className="my-button" style={style} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object
};

export default Button;
