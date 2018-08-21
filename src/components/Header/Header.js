import React, { Component } from "react";
import { Layout, Button } from "antd";
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
      <Layout className={`shadow`}>
        <InfoHeader />
        <Header
          className={`p-0 flex`}
          style={{ height: 50, lineHeight: "50px" }}
        >
          <MenuRouter dataSource={menu} style={{ flex: 1 }} />
          <SearchBar />
          <Button
            icon={`plus`}
            type={`primary`}
            className={`h-100 border-0 rounded-0`}
          >
            View Card
          </Button>
          <Button
            icon={`user`}
            className={`h-100 border-0 rounded-0`}
            style={{ width: "50px" }}
          />
        </Header>
      </Layout>
    );
  }
}

export default MainHeader;
