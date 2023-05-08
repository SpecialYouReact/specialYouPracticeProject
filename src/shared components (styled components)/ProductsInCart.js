import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

//images and icons
//icons
import AddSquareIcon from "../shared assets/icons/AddSquareIcon.svg";
import SquareIcon from "../shared assets/icons/SquareIcon.svg";
import CloseIcon from "../shared assets/icons/CloseIcon.svg";
import SubtractSquareIcon from "../shared assets/icons/SubtractSquareIcon.svg";

const ProductsInCart = ({
  height,
  width,
  image,
  text,
  rate,
  handleIncrement,
  handleDecrement,
}) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer.counter);
  // const incrementHandler = () => {
  //   dispatch({ type: "increment" });
  // };
  // const decrementHandler = () => {
  //   dispatch({ type: "decrement" });
  // };
  const Item = styled.div`
    height: ${height};
    width: ${width};
    display: flex;
    align-items: center;
    position: relative;
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;
    gap: 1rem;
    max-height: 12.5rem;

    & .itemPhoto {
      background: url(${image});
      background-size: 100% 100%;
      height: 100%;
      width: 25%;
      max-width: 12rem;
      min-width: 8.5rem;
      border-radius: 0.8rem;
      background-position: top;
      border: 1px solid red;
    }

    & .itemDescription {
      height: 100%;
      width: 75%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-family: Montserrat;
      font-style: normal;
    }

    & .closeIcon {
      // background: rgba(33, 33, 33, 0.64);
      position: absolute;
      right: 0;
      top: 0;
      height: 1.6rem;
      width: 1.6rem;
      transform: translate(-50%, 50%);
      @media only screen and (max-width: 1200px) {
        height: 1.2rem;
        width: 1.2rem;
      }
      @media only screen and (max-width: 900px) {
        width: 1rem;
        height: 1rem;
      }
      @media only screen and (max-width: 435px) {
        height: 1.2rem;
        width: 1.2rem;
      }
      @media only screen and (max-width: 315px) {
        width: 1rem;
        height: 1rem;
      }
    }
  `;
  const ProductTextRateContainer = styled.div`
    height: 70%;
    width: 70%;

    @media only screen and (max-width: 1000px) and (min-width: 850px) {
      width: 80%;
    }

    & .productText {
      width: 100%;
      color: rgba(27, 5, 4, 0.75);
      letter-spacing: 0.02em;
      font-size: 1.6rem;
      font-weight: 500;
      @media only screen and (max-width: 900px) {
        font-size: 1.4rem;
      }
      @media only screen and (max-width: 800px) {
        font-size: 1.2rem;
      }

      @media only screen and (max-width: 435px) {
        font-size: 1.2rem;
      }
      @media only screen and (max-width: 315px) {
        font-size: 1rem;
      }
    }

    & .productRate {
      width: 100%;
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 150%;
      @media only screen and (max-width: 900px) {
        font-size: 1.6rem;
      }
      @media only screen and (max-width: 800px) {
        font-size: 1.4rem;
      }
      @media only screen and (max-width: 435px) {
        font-size: 1.4rem;
      }
      @media only screen and (max-width: 315px) {
        font-size: 1.2rem;
      }
    }
  `;

  const IconContainer = styled.div`
    display: flex;
    gap: 0.8rem;
    & .iconCounter {
      font-size: 2.4rem;
    }
    & .icon {
      width: 2.4rem;
      height: 2.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      @media only screen and (max-width: 900px) {
        width: 2.2rem;
        height: 2.2rem;
      }
      @media only screen and (max-width: 800px) {
        width: 2rem;
        height: 2rem;
      }
      @media only screen and (max-width: 435px) {
        width: 1.8rem;
        height: 1.8rem;
      }
      @media only screen and (max-width: 315px) {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  `;
  return (
    <>
      {/* second section(my cart items already added)  */}
      <Item>
        {/* first part  */}
        <div className="itemPhoto"></div>
        {/* second part  */}
        <div className="itemDescription">
          {/* second part--first part  */}
          <ProductTextRateContainer>
            <h4 className="productText">{text}</h4>
            <h3 className="productRate">{rate}</h3>
          </ProductTextRateContainer>
          {/* second part--second part  */}
          <IconContainer>
            <img
              src={AddSquareIcon}
              className="icon"
              onClick={handleIncrement}
            />
            <span className="icon iconCounter">{counter}</span>
            <img
              src={SubtractSquareIcon}
              className="icon"
              onClick={handleDecrement}
            />
          </IconContainer>
        </div>
        <img src={CloseIcon} className="closeIcon" />
      </Item>
    </>
  );
};

export default ProductsInCart;
