import React, { Component } from "react";
import Tile from "./Tile";
import "./content.css";

export default class Content extends Component {
  render() {
    return (
      <div>
        <Tile />
        <div className="movies-tile"></div>
        <div className="series-tile"></div>
      </div>
    );
  }
}
