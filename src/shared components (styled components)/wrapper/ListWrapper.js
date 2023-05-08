import React from "react";
import styled from "styled-components";

const ListWrapper = ({ children, height, height2, width, left, top }) => {
  const ListContainer = styled.div`
    position: absolute;
    width: ${width};
    height: ${height};
    left: ${left};
    top: ${top};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
    @media only screen and (max-width: 850px) {
      height: ${height2};
    }
    //   @media only screen and (max-width: 720px) {
    //     display: none;
    // }
  `;
  return <ListContainer>{children}</ListContainer>;
};

export default ListWrapper;
