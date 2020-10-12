import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import EmojiCard from "../EmojiCard";
import Button from "../Button";

export default function EmojiCardList({ list }) {
  const [groupedList, setGroupedList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    // setFilteredList(list.slice(0, 30));
    separateGroups(list);
  }, [list]);

  const formatGroupName = (name) => {
    return name.replace("-", " & ");
  };

  const loadMore = () => {
    const loaded = filteredList.length;
    const toLoad = groupedList.length;
    if (loaded < toLoad) {
      const newList = groupedList.slice(0, loaded + 1);
      setFilteredList(newList);
    }
  };

  const separateGroups = (list) => {
    const grouped = list.reduce(function (acc, obj) {
      let key = obj["group"];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});

    const entries = Object.entries(grouped);
    setGroupedList(entries);
    setFilteredList([entries[0]]);
  };

  return filteredList.map((group, groupedIndex) => {
    return (
      <>
        <h1 className="capitalize">{formatGroupName(group[0])}</h1>
        <div className="grid-flex">
          {group[1].map((emoji, index) => (
            <EmojiCard key={index} obj={emoji} />
          ))}
        </div>
        {filteredList.length !== groupedList.length &&
          groupedIndex + 1 === filteredList.length && (
            <Button onClick={() => loadMore()} className="button button--wide">
              Load more
            </Button>
          )}
      </>
    );
  });
}

EmojiCardList.propTypes = {
  list: PropTypes.array.isRequired,
};
