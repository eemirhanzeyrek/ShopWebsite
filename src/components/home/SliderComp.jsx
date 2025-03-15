import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="discount10.png" alt="" />
        </div>
        <div>
          <img src="discount20.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
