import React from "react";
import styled from "styled-components";

const CentreWrapper = ({ children, height, width }) => {
  const CentreContainer = styled.div`
    height: ${height};
    width: ${width};
    // position: absolute;
    //top: 600%;
    //left: 50%;
    position: fixed;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    // transform: translateY(-50%);
    font-family: Montserrat;
    font-style: normal;
    border: 2px solid red;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
    border-radius: 1.2rem;
    z-index: 100;
    animation-name: animateTopToBottom;
    animation-duration: 0.6s;
    @keyframes animateTopToBottom {
      from {
        top: 0;
        opacity: 0;
      }
      // to {
      //   top: 600%;
      //   opacity: 1;
      // }
      to {
        top: 50%;
        opacity: 1;
      }
    }
  `;

  return <CentreContainer>{children}</CentreContainer>;
};

export default CentreWrapper;
