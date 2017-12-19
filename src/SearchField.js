import React, { Component } from "react";

const SearchField = ({ name, value, onChange }) => {
  return <input type="text" name={name} value={value} onChange={onChange} />;
};

export default SearchField;
