import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PhotoGallery from "./PhotoGallery";
import instagramResponse from "./photos";
import PhotoGalleryMap from "./PhotoGalleryMap";
import FilterDropdown from "./FilterDropdown";

class App extends Component {
  constructor() {
    super()
    this.state = {
      filter: 'default'
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

onInputChange(e) {
    this.setState({
      [e.target.name]: [e.target.value]
    })
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
        <PhotoGalleryMap json={instagramResponse} filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
