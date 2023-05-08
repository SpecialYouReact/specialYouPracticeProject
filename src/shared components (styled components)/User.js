import styled from "styled-components";

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  color: #000000;
  @media (max-width: 1450px) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 407px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 350px) {
    gap: 0.8rem;
  }

  & .userFace {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background: url(${(props) => props.image});
    background-size: cover;
    border: 1px solid red;
    @media (max-width: 1450px) and (min-width: 720px) {
      width: 3rem;
      height: 3rem;
    }
    @media (max-width: 720px) {
      width: 2.4rem;
      height: 2.4rem;
      min-width: 2.4rem;
      min-height: 2.4rem;
    }
  }

  & .userName {
  }
  & .userRating {
    @media (max-width: 1450px) {
    }
  }
  & .starIconStyle {
    width: 2.4rem;
    height: 2.4rem;
    background: url(${(props) => props.starIconUsed});
    border: 1px solid red;
    @media (max-width: 720px) {
      width: 1.8rem;
      height: 1.8rem;
      min-width: 1.8rem;
      min-height: 1.8rem;
    }
  }
`;

const User = (props) => {
  const { image, text, rating, starIconUsed } = props;

  return (
    <>
      <UserContainer>
        <div className="userFace"></div>
        <div className="userName">{text}</div>
        <div className="userRating">{rating}</div>
        <div className="starIconStyle"></div>
      </UserContainer>
    </>
  );
};

export default User;
