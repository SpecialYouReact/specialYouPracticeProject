import React from "react";
import styled from "styled-components";

const PopupWrapper = ({ children }) => {
  const PopupContainer = styled.div`
    height: 350%;
    width: 25%;
    max-width: 24rem;
    padding: 1.6rem;
    position: absolute;
    right: -8%;
    top: 100%;
    border: 2px solid red;
    background: #ffffff;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.36);
    z-index: 100;
    z-index: 100;
    animation-name: animateSimple;
    animation-duration: 0.6s;
    @keyframes animateSimple {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @media only screen and (max-width: 920px) {
      right: -4%;
      height: 220%;
      width: 18%;
      padding: 0.8rem;
    }
    @media only screen and (max-width: 823px) {
      padding: 0.4rem;
    }
  `;
  return <PopupContainer>{children}</PopupContainer>;
};

export default PopupWrapper;
