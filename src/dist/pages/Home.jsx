import React, { Component } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
// import Footer from "../components/Footer";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <TitleBar />
        {/* <Footer /> */}
      </div>
    );
  }
}
