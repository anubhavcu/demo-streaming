import React, { Component } from "react";

export default class TitleBar extends Component {
  render() {
    return (
      <section className="bg-dark text-center titlebar">
        <div className="container">
          <nav className="navbar navbar-dark bg-dark">
            <a className="text-white">
              Popular <strong>{this.props.title}</strong>
            </a>
          </nav>
        </div>
      </section>
    );
  }
}
