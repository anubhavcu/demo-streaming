import React, { Component } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import Content from "../components/content/Content";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <TitleBar />
        <Content />
        <Footer />
      </div>
    );
  }
}
