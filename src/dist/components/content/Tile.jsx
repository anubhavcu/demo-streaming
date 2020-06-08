import React, { Component } from "react";
import "./tile.css";

export default class Tile extends Component {
  state = {
    imageUrl: "",
    programTitle: "",
  };
  render() {
    this.state.imageUrl = this.props.images["Poster Art"].url;
    this.state.programTitle = this.props.title;

    return (
      <div
        style={{
          display: "inline-block",
          padding: "10px",
          wordWrap: "break-word",
        }}
      >
        <div className="tile">
          <img
            id={`tileImage-${this.key}`}
            className="tileImage"
            src={this.state.imageUrl}
          ></img>
        </div>
        {/* <p>{this.state.programTitle}</p> */}
      </div>
    );
  }
}
