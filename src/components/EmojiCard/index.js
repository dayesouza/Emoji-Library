import React from "react";
import PropTypes from "prop-types";

export default function EmojiCard({ obj }) {
  console.log(obj);
  return (
    <div className="card card--hover card__emoji">
      <h1>{obj.character}</h1>
      <span className="card__emoji__name">{obj.unicodeName}</span>
    </div>
  );
}

EmojiCard.propTypes = {
  obj: PropTypes.object.isRequired,
};
