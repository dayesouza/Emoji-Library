import React from "react";
import { InfoCard } from "../InfoCard";
import "./InfoCardList.css";
import PropTypes from "prop-types";

const InfoCardList = ({ list }) => {
  const getTotalCategories = () => {
    return [...new Set(list.flatMap((x) => x.group))].length;
  };

  const getTotalWithColorVariation = () => {
    return list.flatMap((x) => x.variants ?? {}).length;
  };

  return (
    <div className="infoList">
      <InfoCard title="Total" info={getTotalWithColorVariation()} />
      <InfoCard title="Unique ones" info={list.length} />
      <InfoCard title="Categories" info={getTotalCategories()} />
    </div>
  );
};

InfoCardList.propTypes = {
  list: PropTypes.array,
};

InfoCard.defaultProps = {
  list: [],
};

export default InfoCardList;
