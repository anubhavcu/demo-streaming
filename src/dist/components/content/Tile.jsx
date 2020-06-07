import React, { Component } from "react";
import "./tile.css";

export default class Tile extends Component {
  componentDidMount() {
    const { description, programType, releaseYear, images } = this.props;
    console.log(programType);
  }
  render() {
    return <div className="tile"> </div>;
  }
}
