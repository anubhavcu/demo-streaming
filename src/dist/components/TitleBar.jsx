import React, { Component } from "react";
import "./TitleBar.css";

export default class TitleBar extends Component {
  render() {
    return (
      <section className="bg-dark text-center ">
        <div className="container">
          <nav className="navbar navbar-dark bg-dark">
            <a className="text-white">Popular Tiles</a>
          </nav>
        </div>
      </section>
    );
  }
}
