import React, { Component } from "react";
import { Alert } from "antd";
import TicketContentHeader from "./TicketContentHeader/TicketContentHeader.js";
import TicketContentDetails from "./TicketContentDetails/TicketContentDetails.js";
import TicketContentAvailable from "./TicketContentAvailable/TicketContentAvailable.js";

class TicketContent extends Component {
  state = {
    available: true, //if all the ticket are taken
    fields: [
      {
        type: "Regular I",
        price: 10,
        available: 10
      },
      {
        type: "VIP I",
        price: 20,
        available: 5
      }
    ],
    //should be taken from the context API
    defaultImgURL:
      "https://u.imageresize.org/v2/0b255145-ea33-4c66-ac2c-dc353d91f56a.jpeg",
    deleteDefaultImgURL:
      "https://imageresize.org/del/MGIyNTUxNDUtZWEzMy00YzY2LWFjMmMtZGMzNTNkOTFmNTZh"
  };
  render() {
    const { defaultImgURL, available, fields } = this.state;
    return (
      <div className={`bg-white w-100 relative shadow`}>
        <TicketContentHeader
          URL={defaultImgURL}
          title={`Fluor Night Party`}
          description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              impedit id optio, et doloremque maiores eaque possimus iusto iure
              quam officiis quis facilis quasi cumque sit maxime. Autem, debitis
              eius!`}
        />
        <TicketContentDetails
          title={`Fluor Night Party`}
          date={`17 Jan 2018`}
          hour={`17:00`}
          location={`Accra`}
        />
        {available ? (
          <TicketContentAvailable title={`Tickets`} fields={fields} />
        ) : (
          <Alert type={`warning`} message={`No Available Tickets`} banner />
        )}
      </div>
    );
  }
}

export default TicketContent;
