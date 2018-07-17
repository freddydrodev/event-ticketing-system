import React, { Component } from "react";

export default class Marquee extends Component {
  render() {
    return (
      <div className={`marquee mx-1`} style={{ flex: 1 }}>
        <p className={`mb-0`}>{this.props.children}</p>
      </div>
    );
  }
}
