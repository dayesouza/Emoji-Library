import React from "react";
import PropTypes from "prop-types";

export default function EmojiCard({ obj, skinTone }) {
  const getCharacter = (obj) => {
    if (!obj.variants || skinTone === "default-skin-tone") return obj.character;
    if (obj.variants.length !== 5) return obj.character;

    return getVariant(obj);
  };

  const getVariant = (obj) => {
    if (!obj.variants.find((o) => o.slug.includes(skinTone))) {
    }
    return obj.variants.find((o) => o.slug.includes(skinTone)).character;
  };

  return (
    <div className="card card--hover card__emoji">
      <h1>{getCharacter(obj)}</h1>
      <span className="card__emoji__name">{obj.unicodeName}</span>
    </div>
  );
}

EmojiCard.propTypes = {
  obj: PropTypes.object.isRequired,
  skinTone: PropTypes.string,
};

EmojiCard.defaultProps = {
  skinTone: "light-skin-tone",
};
