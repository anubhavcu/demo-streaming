import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <section className="bg-primary text-center header">
        <div className="container">
          <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href=".">
              <strong>Demo Streaming</strong>
            </a>
            <div>
              {/* <button className="btn btn-light btn-sm">Login</button> */}
              <a href="#" className="badge badge-primary m-2">
                Log in
              </a>
              <a href="#">
                <button className="btn btn-dark btn-sm">
                  Start Your Free Trial
                </button>
              </a>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}
