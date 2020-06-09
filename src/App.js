import React, { Component } from "react";
import "./App.css";
import Home from "./dist/pages/Home";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}
