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
  }
  // getContentSize = () => {
  //   const navBarHeight = document.querySelector(".header").clientHeight;
  //   const footerHeight = document.querySelector(".footer").clientHeight;
  //   const titleBarHeight = document.querySelector(".titlebar").clientHeight;
  //   const height =
  //     window.innerHeight - navBarHeight - footerHeight - titleBarHeight;
  //   console.log(navBarHeight, footerHeight, titleBarHeight, height);
  // };
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
        this.setState({ dataToDisplay: this.actualData.slice(0, 21) });
      });
  };

  render() {
    const { dataToDisplay } = this.state;

    return (
      <div className="container ">
        <div className="container tileContainer  ">
          {dataToDisplay.map((entry, Idx) => {
            {
              const {
                description,
                programType,
                releaseYear,
                images,
                title,
              } = entry;

              return (
                <Tile
                  description={description}
                  programType={programType}
                  releaseYear={releaseYear}
                  images={images}
                  title={title}
                  key={Idx}
                ></Tile>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
