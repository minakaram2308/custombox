"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./screen1.css";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.png";
import box1 from "../../assets/images/box1.png";
import box2 from "../../assets/images/box2.png";
import box3 from "../../assets/images/box3.png";
import box4 from "../../assets/images/box4.png";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";


export const Slider1 = () => (
  <div className="customBox">
    <div className="container my-auto">
      <div className="row">
        <div className="col-md-6 h100 d-flex">
          <div className="my-auto">
            <h3>Create Custom Boxes & Personalize Your Packaging</h3>
            <p className="my-4">
              Get a quote instantly using our online box quoter & design your
              custom packaging in 3D with a few clicks.
            </p>
            <button>Get Started</button>
          </div>
        </div>
        <div className="col-md-6 h100 d-flex">
          <Image src={box1} alt="image" className="img-fluid my-auto" />
        </div>
      </div>
    </div>
  </div>
);
export const Slider2 = () => (
  <div className="customBox">
    <div className="container my-auto">
      <div className="row">
        <div className="col-md-6 h100 d-flex">
          <div className="my-auto">
            <h3>Custom Shipping Box</h3>
            <p className="my-4">
              Deliver your shipments in customized, strong shipping boxes
              designed for big, heavy, or fragile products.
            </p>
          </div>
        </div>
        <div className="col-md-6 h100 d-flex">
          <Image src={box2} alt="image" className="img-fluid my-auto" />
        </div>
      </div>
    </div>
  </div>
);
export const Slider3 = () => (
  <div className="customBox">
    <div className="container my-auto">
      <div className="row">
        <div className="col-md-6 h100 d-flex">
          <div className="my-auto">
            <h3>Flexo & Digital Printing</h3>
            <p className="my-4">
              Choose Flexo for cost-effective, high-volume printing with simple
              designs or Digital for vibrant, detailed prints in smaller
              quantities.
            </p>
          </div>
        </div>
        <div className="col-md-6 h100 d-flex">
          <div className="d-flex my-auto">
            <Image src={box3} alt="image" className="img-fluid w-50" />
            <Image src={box4} alt="image" className="img-fluid w-50" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default function Screen1() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [<Slider1 />, <Slider2 />, <Slider3 />];
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  const next = () => {
    sliderRef.current.slickNext();
    console.log(sliderRef.current?.innerSlider.state.currentSlide);
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const isPrevInactive = currentSlide === 0;
  const isNextInactive = currentSlide === slides.length - 1;

  return (
    <main>
      <div className="mobileMenu">
        <Image src={logo} alt="image" className="img-fluid my-auto" />
        <div>
          <Image src={cart} alt="image" className="img-fluid my-auto me-3" />
          <FiMenu color="#AEAFB1" size={26} />
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {slide}
          </div>
        ))}
      </Slider>
      <div className="custom-arrows-dots">
        <button
          onClick={previous}
          className={`custom-arrow ${isPrevInactive ? "inactive" : ""}`}
        >
          <HiArrowSmLeft color="#AEAFB1" />
        </button>
        <div className="custom-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => sliderRef.current.slickGoTo(index)}
              className="dot"
            >
              <div
                className={`custom-dot ${
                  currentSlide === index ? "active" : ""
                }`}
              ></div>
            </button>
          ))}
        </div>

        <button
          onClick={next}
          className={`custom-arrow ${isNextInactive ? "inactive" : ""}`}
        >
          <HiArrowSmRight color="#AEAFB1" />
        </button>
      </div>
    </main>
  );
}
