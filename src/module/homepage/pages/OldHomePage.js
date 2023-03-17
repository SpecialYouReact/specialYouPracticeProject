import React from "react";
import CustomInput from "../../../shared components/input/Input";
import CustomImageCard from "../../../shared components/imagecard/ImageCard";
import CustomSection from "../../../shared components/section/Section";
import { HeartIcon } from "../../../shared assets/icons";
import { CartIcon } from "../../../shared assets/icons";
import { UserIcon } from "../../../shared assets/icons";

const HomePage = () => {
  return (
    <>
      {/* header section(first section) */}
      <CustomSection activeStyle={"header"}>
        <CustomImageCard
          activeStyle={"homePage-brandLogo"}
          activeImage={"brandLogo"}
        />
        <CustomInput
          activeStyle={"homePage-search"}
          placeholder={"Search any items"}
        />
        <div style={{ display: "flex", gap: "24px" }}>
          <HeartIcon />
          <CartIcon />
          <UserIcon />
        </div>
      </CustomSection>

      {/* navbar section(second section) */}
      <CustomSection activeStyle={"navBar"}>
        <span>Birthday Themes</span>
        <span>Wedding Themes</span>
        <span>Occasion Themes</span>
        <span>Personalised Balloons</span>
      </CustomSection>

      {/* banner section(third section) */}
      <CustomSection>
        <CustomImageCard
          activeStyle={"homePage-banner"}
          activeImage={"bannerImage"}
        />
      </CustomSection>
    </>
  );
};

export default HomePage;
