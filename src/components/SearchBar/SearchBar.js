import React, { Component } from "react";
import { Input, Button } from "antd";
import "./SearchBar.less";

export default class SearchBar extends Component {
  render() {
    return (
      <div className={`flex SearchBar`}>
        <Input
          className={`h-100 flex-fill border-top-0 border-left-0 border-right-0 rounded-0`}
          placeholder={`Search for an event...`}
          style={{ borderBottom: "1px solid #e8e8e8" }}
        />
        <Button
          icon={`search`}
          style={{
            minWidth: 50,
            height: 50,
            borderBottom: "1px solid #e8e8e8"
          }}
          shape={`circle`}
          size={`small`}
          className={`rounded-0 border-top-0 border-left-0 border-right-0`}
        />
      </div>
    );
  }
}
