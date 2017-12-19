import React, { Component } from "react";

const FilterDropdown = ({name, onChange}) => {
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
    <select className="selectpicker" name={name} onChange={onChange}>
      {filterOptions.map(filter => <option value={filter}>{filter}</option>)}
    </select>
  );
};

export default FilterDropdown;
