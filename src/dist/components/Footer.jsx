import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <section className="bg-dark text-center footer fixed-bottom ">
        <div className="container ">
          <nav className="navbar navbar-dark bg-dark">
            <div className="text-md-left">
              <p className="text-white ">
                <small>
                  <a href>Home</a> | <a>Terms and Conditions</a> |{" "}
                  <a>Privacy Policy</a> | <a>Collection Statement </a> |{" "}
                  <a>Help </a> | <a> Manage Account </a>
                </small>
              </p>
              <div className="">
                <p className="text-center text-md-left text-white icons">
                  <small>
                    Copyright © 2020 DEMO Streaming.All rights reserved.
                  </small>
                </p>
                <div className="float-left mb-3">
                  <a href="." className="fb-ic mr-4 text-white" role="button">
                    <i className="fab fa-lg fa-facebook-f"></i>
                  </a>
                  <a href="." className="tw-ic mr-4 text-white" role="button">
                    <i className="fab fa-lg fa-twitter"></i>
                  </a>
                  <a href="." className="ins-ic mr-4 text-white" role="button">
                    <i className="fab fa-lg fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="download-logos">
              <a href=".">
                <div className="windows-store-logo"></div>
              </a>
              <a href=".">
                <div className="play-store-logo"></div>
              </a>
              <a href=".">
                <div className="apple-store-logo"></div>
              </a>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}
