import React, { Component } from "react";
import { Row } from "antd";
import TicketContentDetailsBlock from "./TicketContentDetailsBlock/TicketContentDetailsBlock.js";

class TicketContentDetails extends Component {
  render() {
    const { title, date, hour, location } = this.props;
    return (
      <div className={`p-3`}>
        <h3 className={`mb-2`}>{title}</h3>
        <Row gutter={8}>
          <TicketContentDetailsBlock title={`Date`} value={date} />
          <TicketContentDetailsBlock
            title={`Hour`}
            value={hour}
            textAlign={`text-center`}
          />
          <TicketContentDetailsBlock
            title={`Location`}
            value={location}
            textAlign={`text-right`}
          />
        </Row>
      </div>
    );
  }
}

export default TicketContentDetails;
