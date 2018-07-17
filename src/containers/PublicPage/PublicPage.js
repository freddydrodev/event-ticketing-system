import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../../components/Header/Header.js";
import routes from "../../routes/public.js";

export default class PublicPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>{routes.map(r => <Route key={r.path} {...r} />)}</Switch>
      </React.Fragment>
    );
  }
}
