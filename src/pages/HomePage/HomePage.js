import React, { Component } from "react";
import { Layout, Input } from "antd";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import RangeSelector from "../../components/RangeSelector/RangeSelector";

const { Sider, Content } = Layout;
export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeBanner />
        <Layout>
          <Sider width={280} className={`p-3 bg-white mt-3`}>
            <Input.Search placeholder={`search an event`} size={`large`} />
            <RangeSelector title={`Price ($)`} />
          </Sider>
          <Content>ok</Content>
        </Layout>
      </React.Fragment>
    );
  }
}
