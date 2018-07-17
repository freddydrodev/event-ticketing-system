import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../../routes/public.js";

export default class PublicPage extends Component {
  render() {
    return <Switch>{routes.map(r => <Route key={r.path} {...r} />)}</Switch>;
  }
}
