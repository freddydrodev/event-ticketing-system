import React, { Component } from "react";
import { Button, Popover, Row, Col, Alert, InputNumber, Icon } from "antd";

class TicketContent extends Component {
  state = {
    available: true,
    defaultImgURL:
      "https://u.imageresize.org/v2/0b255145-ea33-4c66-ac2c-dc353d91f56a.jpeg",
    deleteDefaultImgURL:
      "https://imageresize.org/del/MGIyNTUxNDUtZWEzMy00YzY2LWFjMmMtZGMzNTNkOTFmNTZh"
  };
  render() {
    const { defaultImgURL, available } = this.state;
    return (
      <div className={`bg-white w-100 relative shadow`}>
        <Popover
          placement={`rightTop`}
          content={
            <p style={{ maxWidth: 450 }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              impedit id optio, et doloremque maiores eaque possimus iusto iure
              quam officiis quis facilis quasi cumque sit maxime. Autem, debitis
              eius!
            </p>
          }
          title={<h3 className={`mb-0`}>Fluor Night Party</h3>}
          trigger={`click`}
        >
          <Button
            icon="info"
            shape={`circle`}
            size={`small`}
            className={`m-3 border-0 absolute right-0 top-0`}
          />
        </Popover>
        <img src={defaultImgURL} alt="Event Cover" className={`w-100`} />
        <div className={`p-2`}>
          <h3 className={`mb-2`}>Fluor Night Party</h3>
          <Row gutter={8}>
            <Col span={8}>
              <h4 className={`mb-0`}>Date</h4>
              <p className={`mb-0`}>17 Jan 2018</p>
            </Col>
            <Col span={8} className={`text-center`}>
              <h4 className={`mb-0`}>Hour</h4>
              <p className={`mb-0`}>17:30</p>
            </Col>
            <Col span={8} className={`text-right`}>
              <h4 className={`mb-0`}>Location</h4>
              <p className={`mb-0`}>Kumassi</p>
            </Col>
          </Row>
        </div>
        {available ? (
          <div className={`px-2 py-3 bg-light`}>
            <h4 className={`mb-0`}>Tickets</h4>
            <Row gutter={8} className={`text-muted mb-1`}>
              <Col span={8}>Regular I</Col>
              <Col span={6} className={`text-right`}>
                1000$
              </Col>
              <Col span={10} className={`flex between middle`}>
                <Icon type={`close`} style={{ fontSize: 12 }} />
                <InputNumber
                  placeholder={`0`}
                  size={`small`}
                  className={`w-100 mx-2`}
                  min={0}
                  max={10}
                />
                (10)
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={8}>VIP I</Col>
              <Col span={6} className={`text-right`}>
                20$
              </Col>
              <Col span={10} className={`flex between middle`}>
                <Icon type={`close`} />
                <InputNumber
                  placeholder={`0`}
                  size={`small`}
                  className={`w-100 mx-2`}
                  min={0}
                  max={10}
                />
                (10)
              </Col>
            </Row>
          </div>
        ) : (
          <Alert type={`warning`} message={`No Available Tickets`} banner />
        )}
      </div>
    );
  }
}

export default TicketContent;
