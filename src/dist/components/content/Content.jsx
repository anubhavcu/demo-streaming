import React, { Component } from "react";
import Tile from "./Tile";
import "./tile.css";

export default class Content extends Component {
  state = {
    dataToDisplay: [],
    error: false,
    errorValue: "",
    isLoading: false,
  };
  actualData = [];
  componentDidMount() {
    this.setState({ isLoading: true });
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
  handleErrors = (res) => {
    if (!res.ok) throw new Error(res.error);

    return res;
  };
  sortByName = () => {
    this.actualData.sort((a, b) => {
      var nameA = a.title.toLowerCase(),
        nameB = b.title.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  };

  getTilesData = (dataToFetch) => {
    fetch(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    )
      .then(this.handleErrors)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ isLoading: false });
        this.actualData = data.entries.filter(
          (entry) =>
            entry.programType === dataToFetch && entry.releaseYear >= 2010
        );
        this.sortByName();
        this.setState({ dataToDisplay: this.actualData.slice(0, 21) });
        console.log(this.state.dataToDisplay);
      })
      .catch((err) =>
        this.setState({ error: true, errorValue: this.state.errorValue + err })
      );
  };

  render() {
    const { dataToDisplay } = this.state;
    const { error, isLoading } = this.state;

    if (!error) {
      if (!isLoading) {
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
      } else {
        return (
          <div className="container">
            {" "}
            <h4> Loading ... </h4>{" "}
          </div>
        );
      }
    } else {
      return (
        <div className="container">
          {" "}
          {/* <h1>Something went wrong ...{this.state.errorValue} </h1> */}
          <h4>Oops.Something went wrong .. </h4>
        </div>
      );
    }
  }
}
