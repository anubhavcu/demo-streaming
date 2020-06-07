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
          {/* <div class="card-deck w-25 h-100 p-3 mt-5 "> */}
          {/*   <div class="card bg-primary"> */}
          {/*     {/1* <img class="card-img-top" src="..." alt="Card image cap"> *1/} */}
          {/*     <div class="card-block "> */}
          {/*       <p class="card-text text-white">Movies</p> */}
          {/*       <p class="card-text "> */}
          {/*         <small class="text-muted">Last updated 3 mins ago</small> */}
          {/*       </p> */}
          {/*     </div> */}
          {/*   </div> */}
          {/*   <div class="card bg-secondary"> */}
          {/*     {/1* <img class="card-img-top" src="..." alt="Card image cap"> *1/} */}
          {/*     <div class="card-block"> */}
          {/*       <p class="card-text text-white">Series</p> */}
          {/*       <p class="card-text"> */}
          {/*         <small class="text-muted">Last updated 3 mins ago</small> */}
          {/*       </p> */}
          {/*     </div> */}
          {/*   </div> */}
          {/* </div> */}
          <Footer />
        </div>
      </div>
    );
  }
}
