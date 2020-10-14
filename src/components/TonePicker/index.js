import React from "react";
import PropTypes from "prop-types";
import "./TonePicker.css";

const TonePicker = ({ onChangeTone, skinTone }) => {
  return (
    <div className="tonePicker">
      <div
        onClick={() => onChangeTone()}
        className={["tonePicker__color", skinTone].join(" ")}
      ></div>
    </div>
  );
};

TonePicker.propTypes = {
  onChangeTone: PropTypes.func.isRequired,
  skinTone: PropTypes.string,
};

TonePicker.defaultProps = {
  skinTone: "default-skin-tone",
};

export default TonePicker;
