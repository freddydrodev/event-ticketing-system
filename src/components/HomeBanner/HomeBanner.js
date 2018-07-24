import React, { Component } from "react";
import Slider from "react-slick";
import "./HomeBanner.less";

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
          <div style={{ minHeight: 60 }}>Slider</div>
        </Slider>
      </div>
    );
  }
}
