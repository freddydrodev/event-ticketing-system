import React, { Component } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Layout, Row, Col } from "antd";
import TicketContent from "./TicketContent/TicketContent.js";

const { Content } = Layout;
class HomeContent extends Component {
  render() {
    return (
      <Content className={`p-3`}>
        <PerfectScrollbar>
          <Row gutter={16}>
            {[...Array(10)].map((e, i) => (
              <Col span={12} key={i} className={`mb-3`}>
                <TicketContent />
              </Col>
            ))}
          </Row>
        </PerfectScrollbar>
      </Content>
    );
  }
}

export default HomeContent;
