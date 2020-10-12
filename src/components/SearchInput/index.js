import React from "react";
import PropTypes from "prop-types";
import "./SearchInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchInput = ({ onInput }) => {
  return (
    <div className="divSearch">
      <FontAwesomeIcon className="divSearch__icon" icon="search" />
      <input
        placeholder="Search Emoji"
        onChange={(e) => onInput(e.target.value)}
        className="divSearch__input"
      ></input>
    </div>
  );
};

SearchInput.propTypes = {
  onInput: PropTypes.func.isRequired,
};

export default SearchInput;
