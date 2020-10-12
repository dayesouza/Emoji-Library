import React from "react";
import PropTypes from "prop-types";

export default function EmojiCard({ obj }) {
  console.log(obj);
  return (
    <div className="card card--hover">
      <h1>{obj.character}</h1>
    </div>
  );
}

EmojiCard.propTypes = {
  obj: PropTypes.object.isRequired,
};
