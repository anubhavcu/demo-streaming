import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Movies from "./dist/pages/Movies";
import Series from "./dist/pages/Series";
import { Route, NavLink, HashRouter as Router, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
