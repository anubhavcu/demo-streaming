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
        {/* <Route */}
        {/*   path="/article" */}
        {/*   component={() => { */}
        {/*     window.location.href = "https://en.wikipedia.org/wiki/Pathfinding"; */}

        {/*     return null; */}
        {/*   }} */}
        {/* /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
      {/* <hr /> */}
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
