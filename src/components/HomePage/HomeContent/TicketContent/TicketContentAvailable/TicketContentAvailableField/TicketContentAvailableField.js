import React, { Component } from "react";
import { Row, Col, Icon, InputNumber } from "antd";

class TicketContentAvailableField extends Component {
  render() {
    const { type, price, available } = this.props;
    return (
      <Row gutter={8} className={`text-muted mb-1`}>
        <Col span={8}>{type}</Col>
        <Col span={6} className={`text-right`}>
          {price}$
        </Col>
        <Col span={10} className={`flex between middle`}>
          <Icon type={`close`} style={{ fontSize: 12 }} />
          <InputNumber
            placeholder={`0`}
            size={`small`}
            className={`w-100 mx-2`}
            min={0}
            max={available}
            disabled={0}
          />
          (10)
        </Col>
      </Row>
    );
  }
}

export default TicketContentAvailableField;
