import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default function Button({ className, children, onClick }) {
  return (
    <button onClick={onClick} className={["button", className].join(", ")}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: "",
};
