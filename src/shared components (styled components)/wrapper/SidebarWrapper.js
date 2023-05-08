import React from "react";
import styled from "styled-components";

const SidebarWrapper = ({ children, side }) => {
  const SidebarContainerFromRightToLeft = styled.div`
    // height: 17.5%;
    overflow-y: scroll;

    height: 100vh;
    width: 40%;
    // position: absolute;
    position: fixed;
    right: 0rem;
    top: 0rem;
    font-family: Montserrat;
    font-style: normal;
    border: 2px solid red;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
    min-width: 37rem;
    max-width: 52rem;
    // backdrop-filter: blur(14px);
    // filter: blur(4px);
    // :-webkit-window-inactive { background: red};
    z-index: 100;
    animation-name: animateRightToLeft;
    animation-duration: 0.3s;
    @keyframes animateRightToLeft {
      from {
        right: -10%;
        opacity: 0;
      }
      to {
        right: 0;
        opacity: 1;
      }
    }
  `;

  //////////////////
  const SidebarContainerFromLeftToRight = styled.div`
    // height: 17.5%;
    overflow-y: scroll;
    height: 100vh;
    width: 40%;
    // position: absolute;
    position: fixed;
    left: 0rem;
    top: 0rem;
    font-family: Montserrat;
    font-style: normal;
    border: 2px solid red;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
    min-width: 37rem;
    max-width: 52rem;
    z-index: 200;
    animation-name: animateLeftToRight;
    animation-duration: 0.3s;
    @keyframes animateLeftToRight {
      from {
        left: -10%;
        opacity: 0;
      }
      to {
        left: 0;
        opacity: 1;
      }
    }
  `;
  return (
    <>
      {side === "fromLeftToRight" ? (
        <SidebarContainerFromLeftToRight>
          {children}
        </SidebarContainerFromLeftToRight>
      ) : (
        <SidebarContainerFromRightToLeft>
          {children}
        </SidebarContainerFromRightToLeft>
      )}
    </>
  );
};

export default SidebarWrapper;
