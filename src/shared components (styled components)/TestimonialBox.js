import React from "react";
import styled from "styled-components";

//icons
import DoubleQuotesIcon from "../shared assets/icons/DoubleQuotesIcon.svg";

const TestimonialBox = (props) => {
  const { description, feedbackText } = props;

  const TestimonialIconTextContainer = styled.div`
    background-color: #e2c9ff;
    height: 100%;
    width: 100%;
    border-radius: 1.6rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 3.2rem;
    margin-bottom: 1rem;
    @media only screen and (max-width: 407px) {
      padding: 2rem;
    }
    @media only screen and (max-width: 325px) {
      padding: 1rem;
    }

    & .doubleQuotesIcon {
      width: 4rem;
      height: 4rem;
      margin-bottom: 0.5rem;
      @media only screen and (max-width: 550px) {
        width: 2rem;
        height: 2rem;
      }
      @media only screen and (max-width: 550px) {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    & .testimonialFeedbackText {
      font-family: Poppins;
      font-style: normal;
      font-height: 400;
      font-size: 2.4rem;
      line-height: 140%;
      color: #440e87;
      @media only screen and (max-width: 550px) {
        line-height: 120%;
        font-size: 1.8rem;
      }
      @media only screen and (max-width: 325px) {
        // font-size: 1.4rem;
      }
    }
  `;

  return (
    <TestimonialIconTextContainer>
      <img src={DoubleQuotesIcon} className="doubleQuotesIcon" />
      <div className="testimonialFeedbackText">{feedbackText}</div>
    </TestimonialIconTextContainer>
  );
};

export default TestimonialBox;
