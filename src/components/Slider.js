import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RiArrowLeftWideLine } from "react-icons/ri";
import { RiArrowRightWideLine } from "react-icons/ri";
import { useRef } from "react";
import SliderContentData from "../sliderData";

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
          {SliderContentData.map((item) => (
            <div key={item.id} className="slide">
              <img src={item.img} alt="" className="" />
              <div className="slide-content">
                <p className="">{item.title}</p>
              </div>
            </div>
          ))}

          {/* slide 2 */}
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
