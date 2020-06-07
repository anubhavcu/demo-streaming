import React, { Component } from "react";
import Tile from "./Tile";
import "./tile.css";

export default class Content extends Component {
  state = {
    dataToDisplay: [],
  };
  actualData = [];
  // dataToDisplay = [];
  componentDidMount() {
    const dataToFetch = this.props.title;
    this.getTilesData(dataToFetch);
    console.log(dataToFetch);
  }
  getTilesData = (dataToFetch) => {
    fetch(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    )
      .then((res) => res.json())
      .then((data) => {
        this.actualData = data.entries.filter(
          (entry) =>
            entry.programType === dataToFetch && entry.releaseYear >= 2010
        );
        // this.dataToDisplay = this.actualData.slice(0, 21);
        this.setState({ dataToDisplay: this.actualData.slice(0, 21) });
        // console.log(this.actualData);
        // console.log(this.state.dataToDisplay);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="tileContainer ">
          {this.state.dataToDisplay.map((entry, rowIdx) => {
            {
              // entry.map((node, nodeIdx) => {
              const { description, programType, releaseYear, images } = entry;

              return (
                <Tile
                  description={description}
                  programType={programType}
                  releaseYear={releaseYear}
                  images={images}
                ></Tile>
              );
              // });
            }
          })}
          <Tile />
        </div>
      </div>
    );
  }
}
