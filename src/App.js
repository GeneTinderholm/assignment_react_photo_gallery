import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PhotoGallery from "./PhotoGallery";
import instagramResponse from "./photos";
import PhotoGalleryMap from "./PhotoGalleryMap";
import FilterDropdown from "./FilterDropdown";
import SortButton from "./SortButton";
import SearchField from "./SearchField";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: "default",
      likes: 0,
      search: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    this.setState({
      [e.target.name]: !this.state.likes
    });
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FilterDropdown name="filter" onChange={this.onInputChange} />
        <SortButton onClick={this.onButtonClick} />
        <SearchField
          name="search"
          value={this.state.search}
          onChange={this.onInputChange}
        />
        <PhotoGalleryMap
          json={instagramResponse}
          filter={this.state.filter}
          sort={this.state.likes}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default App;
