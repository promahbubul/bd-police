import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RiArrowLeftWideLine } from "react-icons/ri";
import { RiArrowRightWideLine } from "react-icons/ri";
import { useRef } from "react";

function Carousel() {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    slickNext: "right",
  };
  return (
    <div className="slider">
      {/* container */}
      <div className="container">
        {/* slider Container */}
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
          className="slider-container"
        >
          {/* slide 1 */}
          <div className="slide">
            <img
              src="https://www.police.gov.bd/storage/upload/gallery/QBYZ7c6P75XVQ8u2MuhxFKCTXWYqzt9GhBR4nsyU.jpg"
              alt=""
              className=""
            />
            <div className="slide-content">
              <p className="">মহামান্য রাষ্ট্রপ্রতির সাথে সাক্ষাকার</p>
            </div>
          </div>
          {/* slide 2 */}
          <div className="slide">
            <img
              src="https://www.police.gov.bd/storage/upload/gallery/kdXeIE3xgKUnP4b4JzJb0PVDSwhPLIit3j3ernoR.jpg"
              alt=""
              className=""
            />
            <div className="slide-content">
              <p className="">নবগত আইজিপি মহোদয় প্রেস বিজ্ঞপ্তি</p>
            </div>
          </div>
        </Slider>
        {/* Sider Button */}
        <div className="button-container">
          <button onClick={previous} className="left">
            <RiArrowLeftWideLine />
          </button>
          <button onClick={next} className="right">
            <RiArrowRightWideLine />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
