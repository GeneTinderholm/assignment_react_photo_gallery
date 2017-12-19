import React, { Component } from "react";
import instagramResponse from "./photos";
import PhotoGallery from "./PhotoGallery";

const PhotoGalleryMap = ({ json }) => {
  return (
    <div className="container">
      <div className="row">
        {json.data.map(x => (
          <div className="col-md-4">
            <PhotoGallery photos={x} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGalleryMap;
