import React, { Component } from "react";
import instagramResponse from "./photos";
import moment from "moment";

const PhotoGallery = ({ photos }) => {
  let dateString = moment.unix(photos.created_time).format("MM/DD/YYYY");

  return (
    <div className="panel panel-primary">
      <a href={photos.link}>
        <img src={photos.images.standard_resolution.url} className="sizing" />
      </a>
      <p> {photos.caption ? photos.caption.text : ""} </p>
      <p>
        by{" "}
        <a href={`http://instagram.com/${photos.user.username}`}>
          {photos.user.username}
        </a>{" "}
        at {dateString}
      </p>
      <p>likes: {photos.likes.count}</p>
      <p>comments: {photos.comments.count}</p>
    </div>
  );
};

export default PhotoGallery;
