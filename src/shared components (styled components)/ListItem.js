import React from "react";
import styled from "styled-components";

//icons
import RightArrowIcon from "../shared assets/icons/RightArrowIcon.svg";
import { useDispatch } from "react-redux";

const Item = styled.div.attrs((props) => ({
  height: props.height,
  width: props.width,
}))`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: white;
  font-weight: 500;
  font-size: 1.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  // zIndex: "10", don't know why this is not working

  & .image {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    @media only screen and (max-width: 920px) {
      height: 3rem;
      width: 3rem;
    }
  }

  & .rightArrowIcon {
    @media only screen and (max-width: 920px) {
      height: 0.8rem;
      width: 0.8rem;
    }
    @media only screen and (max-width: 823px) {
      height: 0.7rem;
      width: 0.7rem;
    }
  }

  @media only screen and (max-width: 1150px) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 920px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 823px) {
    font-size: 0.9rem;
  }
`;

const ListItem = (props) => {
  const dispatch = useDispatch();
  const {
    text,
    height,
    width,
    Image,
    handleNavigate,
    handleClickFromCategory,
  } = props;
  // againPassSetter,

  return (
    <>
      <Item
        // onClick={() => {
        //   dispatch({ type: "openAgeList" });
        // }}
        // onClick={() => {
        //   againPassSetter(true);
        // }}
        onClick={handleClickFromCategory}
      >
        {Image ? <img className="image" src={Image} /> : ""}
        <p className="textStyle">{text}</p>
        <img
          src={RightArrowIcon}
          className="rightArrowIcon"
          onClick={handleNavigate}
        />
      </Item>
    </>
  );
};

export default ListItem;
