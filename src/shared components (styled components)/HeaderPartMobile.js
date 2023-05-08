import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//icons
import LeftArrowIcon from "../shared assets/icons/LeftArrowIcon.svg";

const HeaderPartMobile = (props) => {
  const { text, height, borderRadius, marginBottom } = props;
  const navigate = useNavigate();
  const Header = styled.div`
    height: ${height};
    //  width: 48rem;
    background-color: #f9f5ff;
    font-weight: 600;
    font-size: 2.4rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 1.6rem;
    border-radius: ${borderRadius};
    margin-bottom: ${marginBottom};

    & .leftArrowIconStyle {
      height: 1.2rem;
      width: 1.2rem;
    }
  `;
  return (
    <Header>
      <img
        src={LeftArrowIcon}
        className="leftArrowIconStyle"
        onClick={() => {
          navigate(-1);
        }}
      />
      <div>{text}</div>
    </Header>
  );
};

export default HeaderPartMobile;
