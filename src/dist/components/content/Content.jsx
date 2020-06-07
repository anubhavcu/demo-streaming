import React, { Component } from "react";
import Tile from "./Tile";

export default class Content extends Component {
  actualData = [];
  componentDidMount() {
    const dataToFetch = this.props.title;
    this.getTilesData(dataToFetch);
    console.log(dataToFetch);
  }
  // programTypeAndMoviesFilter = (entry) => {
  //   const arr = entry.filter(
  //     (e) => e.programType === this.dataToFetch && e.releaseYear >= 2010
  //   );
  //   return arr;
  // };
  getTilesData = (dataToFetch) => {
    fetch(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(
        //   data.entries.filter(
        //     (entry) =>
        //       entry.programType === dataToFetch && entry.releaseYear >= 2010
        //   )
        // );
        this.actualData = data.entries.filter(
          (entry) =>
            entry.programType === dataToFetch && entry.releaseYear >= 2010
        );
        console.log(this.actualData);
      });
  };

  render() {
    return (
      <div>
        <Tile />
      </div>
    );
  }
}
