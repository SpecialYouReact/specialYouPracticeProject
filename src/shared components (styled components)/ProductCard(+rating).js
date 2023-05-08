import styled from "styled-components";

//icons
import HeartCircleIcon2 from "../shared assets/icons/HeartCircleIcon2.svg";

const TextStyle = styled.div`
  font-size: 2.2rem;
  font-weight: 500;
  color: rgba(27, 5, 4, 0.75);

  @media (max-width: 1450px) and (min-width: 770px) {
    font-size: 1.8rem;
  }
  @media (max-width: 770px) and (min-width: 450px) {
    font-size: 1.4rem;
  }
  @media (max-width: 450px) {
    font-size: 1.2rem;
  }
`;
const RatingReviewIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 2.4rem;
  @media (max-width: 1450px) and (min-width: 770px) {
    flex-wrap: wrap;
    font-size: 1.8rem;
  }
  @media (max-width: 770px) and (min-width: 450px) {
    font-size: 1.4rem;
  }
  @media (max-width: 450px) {
    font-size: 1.2rem;
  }

  & .starIcon {
    height: 3.2rem;
    width: 3.2rem;
    padding-bottom: 0.4rem;
    @media (max-width: 770px) {
      height: 2.2rem;
      width: 2.2rem;
    }
  }
  & .ratingStyle {
    line-height: 170%;
  }
  & .reviewCountStyle {
    line-height: 170%;
    color: rgba(27, 5, 4, 0.75);
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  @media (max-width: 1450px) and (min-width: 770px) {
    flex-wrap: wrap;
    font-size: 1.8rem;
  }
  @media (max-width: 770px) and (min-width: 450px) {
    font-size: 1.4rem;
  }
  @media (max-width: 450px) {
    font-size: 1.2rem;
  }
  & .productRate {
    font-weight: 600;
    font-size: 2.4rem;
    margin-right: 1rem;
    @media (max-width: 1450px) and (min-width: 770px) {
      font-size: 1.6rem;
    }
    @media (max-width: 770px) and (min-width: 450px) {
      font-size: 1.4rem;
    }
    @media (max-width: 450px) {
      font-size: 1.2rem;
    }
  }
  & .productMrp {
    text-decoration-line: line-through;
    color: rgba(27, 5, 4, 0.5);
    margin-right: 1rem;
    font-weight: 600;
    font-size: 2rem;
    @media (max-width: 1450px) and (min-width: 770px) {
      font-size: 1.6rem;
    }
    @media (max-width: 770px) and (min-width: 450px) {
      font-size: 1.2rem;
    }
    @media (max-width: 450px) {
      font-size: 1rem;
    }
  }
  & .productDiscount {
    font-weight: 600;
    font-size: 2rem;
    color: #219653;
    @media (max-width: 1450px) and (min-width: 770px) {
      font-size: 1.6rem;
    }
    @media (max-width: 770px) and (min-width: 450px) {
      font-size: 1.2rem;
    }
    @media (max-width: 450px) {
      font-size: 1rem;
    }
  }
`;

const ProductCard2 = (props) => {
  const {
    image,
    text,
    rating,
    reviewCount,
    starIconUsed,
    rate,
    mrp,
    discount,
    objectPlp,
    objectSimilarProduct,
    passWishListAgain,
    passWishListSetterAgain,
    handleRoute,
    handleRemoveItem,
  } = props;

  const MainImage = styled.div`
    height: 70%;
    width: 100%;
    background: url(${image});
    background-size: 100% 100%;
    border-radius: 1.6rem;
    position: relative;
    background-position: top;
    margin-bottom: 0.2rem;
    border: 1px solid red;
  `;

  const addObject = (objectToAdd) => {
    passWishListSetterAgain((previousArray) => [...previousArray, objectToAdd]);
  };

  const handleCustomClick = () => {
    addObject(objectPlp);
    addObject(objectSimilarProduct);
  };

  const heartCircleIcon2 = {
    position: "absolute",
    bottom: "0",
    right: "0",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
  };

  return (
    <>
      <MainImage>
        <img
          src={HeartCircleIcon2}
          alt={"not rendering"}
          style={heartCircleIcon2}
          // onClick={handleCustomClick}
          // onClick={() => {
          //---- ALREADY WORKING BUT INDEPENDENTLY -----
          // addObject(objectPlp);
          // addObject(objectSimilarProducts);
          // }}
          onClick={handleRemoveItem}
        />
      </MainImage>
      <TextStyle onClick={handleRoute}>{text}</TextStyle>
      <RatingReviewIcon onClick={handleRoute}>
        {starIconUsed ? <img src={starIconUsed} className="starIcon" /> : ""}
        <span className="ratingStyle">{rating}</span>
        <span className="reviewCountStyle">{reviewCount}</span>
      </RatingReviewIcon>
      <Price onClick={handleRoute}>
        <span className="productRate">{rate}</span>
        <span className="productMrp">{mrp}</span>
        <span className="productDiscount">{discount}</span>
      </Price>
    </>
  );
};

export default ProductCard2;
