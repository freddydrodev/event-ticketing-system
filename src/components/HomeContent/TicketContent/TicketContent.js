import React, { Component } from "react";
import { Button, Popover } from "antd";

class TicketContent extends Component {
  state = {
    defaultImgURL:
      "https://u.imageresize.org/v2/0b255145-ea33-4c66-ac2c-dc353d91f56a.jpeg",
    deleteDefaultImgURL:
      "https://imageresize.org/del/MGIyNTUxNDUtZWEzMy00YzY2LWFjMmMtZGMzNTNkOTFmNTZh"
  };
  render() {
    const { defaultImgURL } = this.state;
    return (
      <div className={`bg-white rounded overflow-hidden w-100 relative`}>
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
      </div>
    );
  }
}

export default TicketContent;
