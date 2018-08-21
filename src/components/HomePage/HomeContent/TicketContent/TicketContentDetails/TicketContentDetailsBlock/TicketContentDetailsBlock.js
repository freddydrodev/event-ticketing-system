import React, { Component } from "react";
import { Col } from "antd";

class TicketContentDetailsBlock extends Component {
  render() {
    const { title, value, textAlign } = this.props;
    return (
      <Col span={8} className={textAlign}>
        <h4 className={`mb-0 text-capitalize`}>{title}</h4>
        <p className={`mb-0`}>{value}</p>
      </Col>
    );
  }
}

export default TicketContentDetailsBlock;
