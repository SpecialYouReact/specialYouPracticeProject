import React from "react";
import styles from "./imagecard.module.css";
import brandLogo from "../../shared assets/images/brandLogo8k.png";
import bannerImage from "../../shared assets/images/bannerImage.png";

const CustomImageCard = ({ activeStyle, activeImage }) => {
  //this is for choosing style
  let chooseStyle;
  switch (activeStyle) {
    case "homePage-banner":
      chooseStyle = styles["homePage-banner"];
      break;
    case "homePage-secondBanner":
      chooseStyle = styles["homePage-secondBanner"];
      break;
    case "homePage-ourProducts":
      chooseStyle = styles["homePage-ourProducts"];
      break;
    case "homePage-decorationThemes":
      chooseStyle = styles["homePage-decorationThemes"];
      break;
    case "homePage-grid1":
      chooseStyle = styles["homePage-grid1"];
      break;
    case "homePage-grid2":
      chooseStyle = styles["homePage-grid2"];
      break;
    case "homePage-happyCustomer":
      chooseStyle = styles["homePage-happyCustomer"];
      break;
    case "homePage-user":
      chooseStyle = styles["homePage-user"];
      break;
    case "pdp-customerReview":
      chooseStyle = styles["pdp-customerReview"];
      break;
    case "orderPlaced-tick":
      chooseStyle = styles["orderPlaced-tick"];
      break;
    case "homePage-brandLogo":
      chooseStyle = styles["homePage-brandLogo"];
      break;
    // default:
    //   chooseStyle = styles.commonRadius;
  }

  //this is for choosing image
  let chooseImage, chooseImageStyle;
  switch (activeImage) {
    case "brandLogo":
      chooseImage = brandLogo;
      chooseImageStyle = styles["homePage-brandLogoImage"];
      break;
    case "bannerImage":
      chooseImage = bannerImage;
      chooseImageStyle = styles["homePage-bannerImage"];
  }
  return (
    <div className={chooseStyle}>
      <img src={chooseImage} className={chooseImageStyle} />
    </div>
  );
};

export default CustomImageCard;
