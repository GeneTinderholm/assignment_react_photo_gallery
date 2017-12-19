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

const PhotoGalleryMap = ({ json, filter, sort, search }) => {
  if (filter == "default") {
    filter = new RegExp(".+");
  } else {
    filter = new RegExp(filter);
  }

  console.log("search---------------");
  console.log(search);

  if (search === "") {
    search = new RegExp(".+");
  } else {
    search = new RegExp(search);
  }
  console.log("search************");
  console.log(search);

  if (sort) {
    json = json.data.sort(function(a, b) {
      return a.likes.count - b.likes.count;
    });
  } else {
    json = json.data.sort(function(a, b) {
      return b.likes.count - a.likes.count;
    });
  }

  return (
    <div className="container">
      <div className="row">
        {json.map(x => {
          x.caption = x.caption || {};
          if (
            filter.test(x.filter) &&
            (search.test(x.caption.text) || search.test(x.user.username))
          ) {
            return <FilterPass x={x} />;
          }
        })}
      </div>
    </div>
  );
};

export default PhotoGalleryMap;
