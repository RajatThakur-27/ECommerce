import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import { Navigate } from "react-router-dom";

const ImageSlider = ({ images }) => {
  const settings = {    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // prevArrow: <div className="slick-prev">Previous</div>,
    // nextArrow: <div className="slick-next">Next</div>,
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <a href={`/product/${20+index}`}>
              <img src={image} alt={`Slide ${index}`} />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;