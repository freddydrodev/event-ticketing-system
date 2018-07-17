import React, { Component } from "react";
import { Layout } from "antd";
import InfoHeader from "../InfoHeader/InfoHeader.js";
import MenuRouter from "../MenuRouter/MenuRouter.js";
import SearchBar from "../SearchBar/SearchBar.js";

const { Header } = Layout;
const menu = [
  { path: "/", content: "Home" },
  { path: "/events", content: "Events" },
  { path: "/events-calendar", content: "Events Calendar" }
];

class MainHeader extends Component {
  render() {
    return (
      <Layout>
        <InfoHeader />
        <Header
          className={`p-0 flex`}
          style={{ height: 50, lineHeight: "50px" }}
        >
          <MenuRouter dataSource={menu} style={{ flex: 1 }} />
          <SearchBar />
        </Header>
      </Layout>
    );
  }
}

export default MainHeader;
