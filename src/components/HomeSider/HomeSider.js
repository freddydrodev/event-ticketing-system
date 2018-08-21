import React, { Component } from "react";
import { Layout, Input, DatePicker, TimePicker, Select } from "antd";
import moment from "moment";
import RangeSelector from "../RangeSelector/RangeSelector.js";

const { Sider } = Layout;
const { Option } = Select;
const format = "HH:mm";
class HomeSider extends Component {
  render() {
    return (
      <Sider width={280} className={`p-3 bg-white mt-3 ml-3 shadow`}>
        <Input.Search placeholder={`search an event`} />
        <RangeSelector title={`Price ($)`} />
        <p className={`mb-1`}>Date</p>
        <DatePicker.RangePicker
          disabledDate={current => current && current < moment().startOf("day")}
          className={`w-100`}
        />
        <p className={`mt-3 mb-1`}>Time</p>
        <TimePicker
          format={format}
          className={`w-100`}
          defaultValue={moment("00:00", format)}
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
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Sider>
    );
  }
}

export default HomeSider;
