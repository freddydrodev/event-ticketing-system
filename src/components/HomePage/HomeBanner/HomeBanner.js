import React, { Component } from "react";
import Slider from "react-slick";
import "./HomeBanner.less";

import img1 from "../../../assets/images/1.jpeg";
import img2 from "../../../assets/images/2.jpeg";
import img3 from "../../../assets/images/3.jpeg";
import img4 from "../../../assets/images/4.jpeg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
export default class HomeBanner extends Component {
  render() {
    return (
      <div>
        <Slider {...settings} className={`bg-white`}>
          <div style={{ minHeight: 60, height: 350, overflow: "hidden" }}>
            <img src={img1} alt={`cover`} className={`w-100`} />
          </div>
          <div style={{ minHeight: 60, height: 350, overflow: "hidden" }}>
            <img src={img2} alt={`cover`} className={`w-100`} />
          </div>
          <div style={{ minHeight: 60, height: 350, overflow: "hidden" }}>
            <img src={img3} alt={`cover`} className={`w-100`} />
          </div>
          <div style={{ minHeight: 60, height: 350, overflow: "hidden" }}>
            <img src={img4} alt={`cover`} className={`w-100`} />
          </div>
        </Slider>
      </div>
    );
  }
}
