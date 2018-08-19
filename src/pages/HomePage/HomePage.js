import React, { Component } from "react";
import { Layout, Input, DatePicker, Select, Icon } from "antd";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import RangeSelector from "../../components/RangeSelector/RangeSelector";
import moment from "moment";

const { Sider, Content } = Layout;
const { Option } = Select;
export default class HomePage extends Component {
  render() {
    const menu = null;
    return (
      <React.Fragment>
        <HomeBanner />
        <Layout>
          <Sider width={280} className={`p-3 bg-white mt-3 ml-3`}>
            <Input.Search placeholder={`search an event`} />
            <RangeSelector title={`Price ($)`} />
            <p className={`mb-1`}>Date</p>
            <DatePicker.RangePicker
              disabledDate={current =>
                current && current < moment().startOf("day")
              }
              className={`w-100`}
            />
            <p className={`mt-3 mb-1`}>Location</p>
            <Select
              defaultValue="lucy"
              placeholder={`Select a location`}
              notFoundContent={`Location not found`}
              showSearch
              className={`w-100`}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Sider>
          <Content>ok</Content>
        </Layout>
      </React.Fragment>
    );
  }
}
