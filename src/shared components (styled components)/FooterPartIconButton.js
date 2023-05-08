import React from "react";
import styled from "styled-components";

const FooterPartIconButton = (props) => {
  const {
    outerIcon,
    innerIcon,
    text,
    rate,
    handleNavigate,
    handleClickAddTo,
    handleClickGoTo,
    setShowBottomPdpAddTo,
    setShowBottomPdpGoTo,
  } = props;
  //   const { text, height, borderRadius } = props;

  // const handleOnOff = (first, second) => {
  //   first();
  //   second();
  // };
  // const handleOnOffWithSetter = (firstSetter, secondSetter) => {
  //   firstSetter((show) => !show);
  //   secondSetter((show) => !show);
  // };
  const addToAndGoTo = (firstFunc = () => true, secondFunc = () => true) => {
    firstFunc();
    secondFunc();
  };
  const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    padding-right: 10rem;
    @media only screen and (max-width: 500px) {
      justify-content: center;
      padding-right: 0;
    }

    & .outerText {
      display: flex;
      flex-direction: column;
      font-size: 2.4rem;
      border: 1px solid red;
      @media only screen and (max-width: 500px) {
        font-size: 2rem;
      }
      @media only screen and (max-width: 290px) {
        font-size: 1.6rem;
      }
    }
    & .outerText .rate {
      font-weight: 600;
    }

    & .button {
      width: 30rem;
      height: 5.4rem;
      background: #e95850;
      color: white;
      border: none;
      border-radius: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      font-size: 2rem;
      @media only screen and (max-width: 500px) {
        font-size: 1.6rem;
        gap: 1rem;
      }
      @media only screen and (max-width: 290px) {
        font-size: 1.2rem;
        gap: 0.8rem;
      }
    }
    & .button .cartIcon {
      height: 2.5rem;
      width: 2.5rem;
      @media only screen and (max-width: 500px) {
        height: 2rem;
        width: 2rem;
      }
      @media only screen and (max-width: 290px) {
        height: 1.8rem;
        width: 1.8rem;
      }
    }
  `;

  return (
    <Container>
      {outerIcon ? <img src={outerIcon} className='heartCircleIcon' /> : ''}
      {rate ? (
        <div className='outerText'>
          <span>Total Value</span>
          <span className='rate'>{rate}</span>
        </div>
      ) : (
        ''
      )}
      <button
        className='button'
        onClick={() => {
          addToAndGoTo(handleClickAddTo, handleClickGoTo);
          // handleClickAddTo();

          // console.log(handleClickAddTo);
          // if (handleClickAddTo) {
          //   return handleClickAddTo();
          // }
          // if (handleClickGoTo) {
          //   return handleClickGoTo();
          // }
          /////////////////// first approach ///////////////////////////////////////
          // handleOnOff(handleClickAddTo, handleClickGoTo);
          //////////////////// second approach //////////////////////////////////////
          // handleOnOffWithSetter(setShowBottomPdpAddTo, setShowBottomPdpGoTo);
          // ////////////////// third approach (sub approach of second)///////////////////////////////////////
          //here if we use single function then that is also throwing error
          // setShowBottomPdpAddTo(false);
          // setShowBottomPdpGoTo(true);
        }}
      >
        {innerIcon ? <img src={innerIcon} className='cartIcon' /> : ''}
        <span>{text}</span>
      </button>
    </Container>
  );
};

export default FooterPartIconButton;
