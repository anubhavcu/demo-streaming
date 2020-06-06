import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <section className="bg-primary text-center">
        <div className="container">
          {/* <h1 className="text-left text-white">Demo Streaming</h1> */}
          {/* <a href="#" className="badge badge-dark text-right"> */}
          {/*   Log In */}
          {/* </a> */}
          <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href=".">
              <strong>Demo Streaming</strong>
            </a>
            <div>
              {/* <button className="btn btn-light btn-sm">Login</button> */}
              <a href="#" className="badge badge-primary m-2">
                Log in
              </a>
              <a href="https://google.com">
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
