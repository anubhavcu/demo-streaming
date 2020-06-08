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
      <div className="tile">
        <div className="card">
          <a href="javascript:void(0)">
            <img
              id={`tileImage-${this.key}`}
              className="tileImage"
              className="card-img-top"
              src={this.state.imageUrl}
            ></img>
            <p className="card-text " style={{ color: "black" }}>
              {" "}
              <small>{this.state.programTitle}</small>
            </p>
          </a>
        </div>
      </div>
    );
  }
}
