import React, { Component } from "react";

const SortButton = ({ onClick }) => {
  return (
    <button name="likes" className="btn btn-default" onClick={onClick}>
      Likes
    </button>
  );
};

export default SortButton;
