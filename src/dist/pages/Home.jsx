import React, { Component } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";

import { Route, NavLink, HashRouter as Router, Switch } from "react-router-dom";
import "./home.css";

export default class Home extends Component {
  state = {
    title: "Tiles",
  };
  render() {
    return (
      <div>
        <Header />
        <TitleBar title={this.state.title} />
        <div className="container">
          <div className="tiles">
            <NavLink activeClassName="active" to="/movies">
              <div className="movies-tile">
                {/* <span className="hiddenTextMovies"> */}
                {/* </span> */}
              </div>
              <p style={{ color: "black" }}>Popular Movies</p>
            </NavLink>
            <NavLink activeClassName="active" to="/series">
              <div className="series-tile"></div>
              <p style={{ color: "black" }}>Popular Series</p>
            </NavLink>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
