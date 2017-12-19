import React, {Component} from 'react';
import instagramResponse from './photos';
import PhotoGallery from './PhotoGallery';

const FilterPass = ({x}) => {
  return (
    <div className="col-md-4">
      <PhotoGallery photos={x} />
    </div>
  );
};

const FilterFail = () => {
  return null;
};

const PhotoGalleryMap = ({json, filter}) => {
  if (filter === 'default') {
    filter = /^/;
  } else {
    filter = new RegExp(filter);
  }
  return (
    <div className="container">
      <div className="row">
        {json.data.map(x => {
          if (filter.test(x.filter)) {
            return <FilterPass x={x} />;
          }
        })}
      </div>
    </div>
  );
};

export default PhotoGalleryMap;
