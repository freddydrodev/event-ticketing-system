import React, { Component } from "react";
import { Popover, Button } from "antd";

class TicketContentHeader extends Component {
  render() {
    const { URL, title, description } = this.props;
    return (
      <React.Fragment>
        <Popover
          placement={`rightTop`}
          content={<p style={{ maxWidth: 450 }}>{description}</p>}
          title={<h3 className={`mb-0`}>{title}</h3>}
          trigger={`click`}
        >
          <Button
            icon="info"
            shape={`circle`}
            size={`small`}
            className={`m-3 border-0 absolute right-0 top-0`}
          />
        </Popover>
        <img src={URL} alt="Event Cover" className={`w-100`} />
      </React.Fragment>
    );
  }
}

export default TicketContentHeader;
