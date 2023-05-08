import React from "react";
import styled from "styled-components";

const FooterPartButton = ({ text, handleNavigate }) => {
  //   const { text, height, borderRadius } = props;

  const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10rem;
    @media only screen and (max-width: 450px) {
      justify-content: center;
      padding-right: 0;
    }
    & .button {
      width: 30rem;
      height: 4.8rem;
      background: #e95850;
      color: white;
      border: none;
      border-radius: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
    }
  `;

  return (
    <Container>
      <button className="button" onClick={handleNavigate}>
        {text}
      </button>
    </Container>
  );
};

export default FooterPartButton;
