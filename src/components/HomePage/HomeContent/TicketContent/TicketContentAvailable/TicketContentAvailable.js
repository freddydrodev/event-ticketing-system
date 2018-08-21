import React, { Component } from "react";
import TicketContentAvailableField from "./TicketContentAvailableField/TicketContentAvailableField";

class TicketContentAvailable extends Component {
  render() {
    const { title, fields } = this.props;
    return (
      <div className={`p-3 bg-light`}>
        <h4 className={`mb-0`}>{title}</h4>
        {[...fields].map(({ type, price, available }, i) => (
          <TicketContentAvailableField
            key={i}
            type={type}
            price={price}
            available={available}
          />
        ))}
      </div>
    );
  }
}

export default TicketContentAvailable;
