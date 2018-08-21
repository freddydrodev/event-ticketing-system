import React, { Component } from "react";
import { Layout } from "antd";
import HomeBanner from "../../components/HomePage/HomeBanner/HomeBanner.js";
import HomeContent from "../../components/HomePage/HomeContent/HomeContent.js";
import HomeSider from "../../components/HomePage/HomeSider/HomeSider.js";

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeBanner />
        <Layout>
          <HomeSider />
          <HomeContent />
        </Layout>
      </React.Fragment>
    );
  }
}
