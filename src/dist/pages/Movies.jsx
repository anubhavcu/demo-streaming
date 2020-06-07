import React, { Component } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import Content from "../components/content/Content";
export default class Home extends Component {
  state = {
    title: "movie",
  };
  render() {
    return (
      <div>
        <Header />
        <TitleBar title={this.state.title} />
        <Content title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
