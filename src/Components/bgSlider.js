// import React from "react";
import "./bgslide.css";
import imageSlide from "./imgData";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const BackgroundSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (current === 2) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 6000);
    return () => clearTimeout(timer);
  }, [current]);

  const bgImgStyle = {
    backgroundImage: `url(${imageSlide[current].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };
  const gotoNext = (current) => {
    setCurrent(current);
  };
  return (
    <>
      <div className="container-style">
        <div style={bgImgStyle}>
          <div className="transparent-background">
            <div className="description">
              <div className="text">
                <h1>{imageSlide[current].title}</h1>
                <p>{imageSlide[current].body}</p>
              </div>
              <div className="carousel-boullt">
                {imageSlide.map((imageSlide, current) => (
                  <span key={current} onClick={() => gotoNext(current)}></span>
                ))}
              </div>
              <div className="d-flex justify-content-center">
                <div className="blue-btn">
                  <Link class="first-link" to="/signup">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BackgroundSlider;
