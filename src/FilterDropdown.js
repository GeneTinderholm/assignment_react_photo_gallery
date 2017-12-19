import React, { Component } from "react";
import instagramResponse from "./photos";

const FilterDropdown = ({ name, onChange }) => {
  const filterOptions = ["default"];

  instagramResponse.data.forEach(post => {
    if (!filterOptions.includes(post.filter)) {
      filterOptions.push(post.filter);
    }
  });

  return (
    <select className="selectpicker" name={name} onChange={onChange}>
      {filterOptions.map(filter => <option value={filter}>{filter}</option>)}
    </select>
  );
};

export default FilterDropdown;
