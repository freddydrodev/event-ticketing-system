import React, { Component } from "react";
import { Icon } from "antd";
import Marquee from "../Marquee/Marquee.js";

export default class InfoHeader extends Component {
  render() {
    return (
      <div
        className={`p-1 flex middle`}
        style={{ color: "#fff", backgroundColor: "#4BC2F5" }}
      >
        <Icon type={`warning`} className={`mr-2`} />
        <Marquee>
          This HTML file is a template. If you open it directly in the browser,
          you will see an empty page.
        </Marquee>

        <Icon type="clock-circle-o" className={`mr-2`} />
        <p className={`mb-0`}>Lundi 24 Decembre 2018, 17 hrs 05 min 54s</p>
      </div>
    );
  }
}
