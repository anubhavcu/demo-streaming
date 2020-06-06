import React, { Component } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";

import { Route, NavLink, HashRouter as Router, Switch } from "react-router-dom";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <TitleBar />
        <div className="container">
          <NavLink activeClassName="active" to="/movies">
            <div className="movies-tile"></div>
          </NavLink>
          <NavLink activeClassName="active" to="/series">
            <div className="series-tile"></div>
          </NavLink>
          <Footer />
        </div>
      </div>
    );
  }
}
