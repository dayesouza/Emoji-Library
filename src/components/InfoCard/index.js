import React from "react";
import PropTypes from "prop-types";
import "./InfoCard.css";

export const InfoCard = ({ title, info }) => {
  return (
    <div className="card">
      <div className="card__title--web">{title}</div>
      <div className="card__title--mobile">
        <span>{title}</span>
        <span>{info}</span>
      </div>
      <div className="card__info--web">{info}</div>
    </div>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
