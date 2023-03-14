import "./imagecarousel.css";
import MyCard from "./MyCard";

import React from "react";

const ImageCarousel = () => {
  let box = document.querySelector(".product-container");

  const previousButtonHandler = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const nextButtonHandler = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  return (
    <div className="product-carousel">
      <button className="previousButton" onClick={previousButtonHandler}>
        <p>&lt;</p>
      </button>
      <button className="nextButton" onClick={nextButtonHandler}>
        <p>&gt;</p>
      </button>
      <div className="product-container">
        <MyCard cardno="1" />
        <MyCard cardno="2" />
        <MyCard cardno="3" />
        <MyCard cardno="4" />
        <MyCard cardno="5" />
        <MyCard cardno="6" />
        <MyCard cardno="7" />
        <MyCard cardno="8" />
        <MyCard cardno="9" />
        <MyCard cardno="10" />
        <MyCard cardno="11" />
        <MyCard cardno="12" />
        <MyCard cardno="13" />
        <MyCard cardno="14" />
        <MyCard cardno="15" />
        <MyCard cardno="16" />
      </div>
    </div>
  );
};

export default ImageCarousel;
