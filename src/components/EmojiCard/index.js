import React from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toastr from "toastr";

export default function EmojiCard({ obj, skinTone }) {
  const getCharacter = (obj) => {
    if (!obj.variants || skinTone === "default-skin-tone") return obj.character;
    if (obj.variants.length !== 5) return obj.character;

    return getVariant(obj);
  };

  const getVariant = (obj) => {
    const emoji = obj.variants.filter((o) => o.slug.includes(skinTone));
    if (emoji.length > 1) {
      if (skinTone.includes("medium"))
        return emoji.find((e) => e.slug.includes("medium")).character;
      return emoji.find((e) => !e.slug.includes("medium")).character;
    }
    return emoji.pop().character;
  };

  const onCopy = (character) => {
    toastr.options = {
      positionClass: "toast-bottom-center",
      hideDuration: 300,
      timeOut: 5000,
    };
    toastr.clear();
    toastr.info(`Emoji copied to clipboard ${character}`);
  };

  const character = getCharacter(obj);
  return (
    <CopyToClipboard text={character} onCopy={() => onCopy(character)}>
      <div className="card card--hover card__emoji">
        <h1>{character}</h1>
        <span className="card__emoji__name">{obj.unicodeName}</span>
      </div>
    </CopyToClipboard>
  );
}

EmojiCard.propTypes = {
  obj: PropTypes.object.isRequired,
  skinTone: PropTypes.string,
};

EmojiCard.defaultProps = {
  skinTone: "light-skin-tone",
};
