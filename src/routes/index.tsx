import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home/Home";
import Loader2 from "../components/Loader/Loader2";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/loader" exact component={Loader2} />
    </Switch>
  </BrowserRouter>
);
