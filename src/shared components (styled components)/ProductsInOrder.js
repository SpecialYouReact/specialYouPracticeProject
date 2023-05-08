import React from "react";
import styled from "styled-components";

const ProductsInOrder = (props) => {
  const {
    color,
    backgroundColor,
    iconUsed,
    imageUsed,
    linkText,
    rate,
    text,
    dependentText,
    date,
  } = props;

  const itemContainer = {
    height: "20%",
    width: "100%",
    padding: "0.5rem",
    fontFamily: "Montserrat",
    fontStyle: "normal",
  };
  const notificationContainer = {
    height: "30%",
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    background: `${backgroundColor}`,
    color: `${color}`,
    borderRadius: "0.8rem",
    padding: "1rem",
    fontWeight: "600",
    fontSize: "1.6rem",
    letterSpacing: "0.01em",
  };
  const iconStyle = {
    height: "2rem",
    width: "2rem",
  };
  const notificationText = {};
  const productContainer = {
    height: "70%",
    display: "flex",
    padding: "0.5rem",
  };
  const productPhoto = {
    backgroundSize: "cover",
    height: "100%",
    width: "30%",
    borderRadius: "0.8rem",
    backgroundPosition: "top",
    border: "1px solid purple",
  };
  const productDescription = {
    height: "100%",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: "2rem",
    fontWeight: "500",
    marginLeft: "1.2rem",
  };
  const productText = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    lineHeight: "120%",
    letterSpacing: "0.01em",
  };
  const productRate = {
    fontWeight: "600",
    lineHeight: "148%",
    fontSize: "2.4rem",
  };
  const linkStyle = {
    color: "red",
  };

  return (
    <div style={itemContainer}>
      <div style={notificationContainer}>
        <img src={iconUsed} style={iconStyle} />
        <p
          className={notificationText}
        >{`${dependentText} Delivered on ${date}`}</p>
      </div>
      <div style={productContainer}>
        <img src={imageUsed} style={productPhoto} />
        <div style={productDescription}>
          <p style={productText}>{text}</p>
          <h4 style={productRate}>{rate}</h4>
          <a href="#" style={linkStyle}>
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsInOrder;
