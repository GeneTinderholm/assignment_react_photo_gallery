import React, { Component } from "react";

const FilterDropdown = () => {
  const filterOptions = [
    "Default",
    "Lark",
    "Reyes",
    "Normal",
    "Ludwig",
    "Valencia",
    "Inkwell"
  ];

  return (
    <select className="selectpicker">
      {filterOptions.map(filter => <option value={filter}>{filter}</option>)}
    </select>
  );
};

export default FilterDropdown;
