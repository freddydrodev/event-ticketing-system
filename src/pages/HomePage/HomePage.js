import React, { Component } from "react";
import { Layout } from "antd";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeContent from "../../components/HomeContent/HomeContent";
import HomeSider from "../../components/HomeSider/HomeSider";

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
