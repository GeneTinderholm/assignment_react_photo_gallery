import React, { Component } from "react";
import instagramResponse from "./photos";
import PhotoGallery from "./PhotoGallery";

const FilterPass = ({ x }) => {
  return (
    <div className="col-md-4">
      <PhotoGallery photos={x} />
    </div>
  );
};

const FilterFail = () => {
  return null;
};

const PhotoGalleryMap = ({
  json,
  filter,
  sort,
  search,
  currentPage,
  onClick
}) => {
  if (filter == "default") {
    filter = new RegExp(".+");
  } else {
    filter = new RegExp(filter);
  }

  if (search === "") {
    search = new RegExp(".+");
  } else {
    search = new RegExp(search);
  }

  if (sort) {
    json = json.data.sort(function(a, b) {
      return a.likes.count - b.likes.count;
    });
  } else {
    json = json.data.sort(function(a, b) {
      return b.likes.count - a.likes.count;
    });
  }

  // testing stuff out

  let testArray = json.map(x => {
    x.caption = x.caption || {};
    if (
      filter.test(x.filter) &&
      (search.test(x.caption.text) || search.test(x.user.username))
    ) {
      if (typeof x !== "undefined") {
        return x;
      }
    }
  });
  let filteredArray = [];

  testArray.forEach(x => {
    if (typeof x !== "undefined") {
      filteredArray.push(x);
    }
  });

  let displayArray = filteredArray.slice(
    (currentPage - 1) * 12,
    currentPage * 12
  );

  let groupedArray = [];

  for (let i = 0; i < Math.ceil(filteredArray.length / 12); i++) {
    groupedArray.push(
      <button name="currentPage" value={i + 1} onClick={onClick}>
        {i + 1}
      </button>
    );
  }

  return (
    <div className="container">
      <div className="row">{displayArray.map(x => <FilterPass x={x} />)}</div>
      {groupedArray.map(x => x)}
    </div>
  );
};

export default PhotoGalleryMap;
