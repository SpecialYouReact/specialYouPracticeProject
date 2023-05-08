import { Link } from "react-router-dom";
import styled from "styled-components";

//icons
import HeartCircleIcon2 from "../shared assets/icons/HeartCircleIcon2.svg";

const BestSellersImageTextContainer = styled.div`
  border: 1px solid red;
  position: relative;
  gap: 1.6rem;
  height: 100%;
  width: 100%;
  min-width: 220px;
  @media only screen and (max-width: 660px) {
    min-width: 180px;
  }
  @media only screen and (max-width: 407px) {
    min-width: 150px;
  }

  & .bestSellersImage img {
    height: 28%;
    width: 100%;
    border-radius: 1.6rem;
    position: relative;
    background: url(${(props) => props.image});
    background-size: 100% 100%;
  }

  & .bestSellersText {
    font-family: Montserrat;
    font-style: normal;
    width: 100%;
  }
`;
const ProductName = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: rgba(27, 5, 4, 0.75);
  margin-bottom: 1rem;
  @media only screen and (max-width: 660px) {
    margin-bottom: 0.4rem;
    font-size: 1.6rem;
  }
`;
const HeartIcon = styled.div`
  position: absolute;
  bottom: 25%;
  right: 4%;

  cursor: pointer;
`;
const ProductPrice = styled.div`
  @media only screen and (max-width: 660px) {
  }
  & .bestSellersProductRate {
    font-weight: 600;
    font-size: 2.4rem;
    color: #1b0504;
    margin-right: 1rem;
    @media only screen and (max-width: 660px) {
      font-size: 1.8rem;
      margin-right: 0.5rem;
    }
    @media only screen and (max-width: 407px) {
      font-size: 1.4rem;
    }
  }
  & .bestSellersProductMrp {
    font-weight: 500;
    font-size: 2.2rem;
    color: rgba(27, 5, 4, 0.5);
    margin-right: 1rem;
    @media only screen and (max-width: 660px) {
      font-size: 1.6rem;
      margin-right: 0.5rem;
    }
    @media only screen and (max-width: 407px) {
      font-size: 1.2rem;
    }
  }
  & .bestSellersProductDiscount {
    color: #219653;
    font-weight: 600;
    font-size: 2.2rem;
    margin-right: 1rem;
    @media only screen and (max-width: 660px) {
      font-size: 1.6rem;
      margin-right: 0.5rem;
    }
    @media only screen and (max-width: 407px) {
      font-size: 1.2rem;
    }
  }
`;

const ProductCard = (props) => {
  const {
    text,
    image,
    mrp,
    rate,
    discount,
    objectBestSeller,
    objectDecorationBackdrop,
    // passWishListAgain,
    // passWishListSetterAgain,
    handleClick,
    goToUrl,
    handleRoute,
    setWishList,
    handleExp1,
    handleExp2,
  } = props;

  const bothFunc = (handleExp1 = () => true, handleExp2 = () => true) => {
    handleExp1(objectBestSeller);
    handleExp2(objectDecorationBackdrop);
  };

  // const addNewProduct = (one, two) => {
  //   setWishList((prev) => [...prev, one, two]);
  // const first = (objBs) => {
  // };
  // const second = (objDB) => {
  //   setWishList((prev) => [...prev, second]);
  // };

  // setWishList((prev) => [...prev, first, second]);
  // };
  // const mainFunction = (first,second) => {
  //   passWishListSetterAgain((prev) => [
  //     ...prev,
  //     objectBestSeller,
  //     objectDecorationBackdrop,
  //   ]);
  //   console.log(objectBestSeller, "sdsd");
  // };

  // const tryFunction = (first, second) => {
  //   first();
  //   second();
  // };

  // console.log(passWishListAgain)

  // const addObject = (objectBestSeller) => {
  //   passWishListSetterAgain((prev) => [...prev, objectBestSeller]);
  // };

  return (
    <>
      <BestSellersImageTextContainer>
        {/* <Link to={goToUrl}> */}
        <div className="bestSellersImage">
          <img src={image} onClick={handleRoute} />
        </div>
        {/* </Link> */}
        <HeartIcon>
          <img
            src={HeartCircleIcon2}
            alt={"not rendering"}
            className="heartCircleIcon2"
            // onClick={
            //   handleClick
            // addObject(objectBestSeller);
            // addObject(objectDecorationBackdrop);
            // }
            // onClick={{}}

            onClick={() => {
              bothFunc(handleExp1, handleExp2);
              // addNewProduct(
              //   first(objectBestSeller),
              //   second(objectDecorationBackdrop)
              // );
            }}

            // onClick={() => {
            //   // addNewProduct(objectBestSeller);
            //   tryFunction(
            //     addNewProduct(objectBestSeller),
            //     addNewProduct(objectDecorationBackdrop)
            //   );
            // }}
          />
        </HeartIcon>
        {/* <Link to={goToUrl}> */}
        <div className="bestSellersText" onClick={handleRoute}>
          <ProductName>{text}</ProductName>
          <ProductPrice>
            <span className="bestSellersProductRate">{rate}</span>
            <span className="bestSellersProductMrp">{mrp}</span>
            <span className="bestSellersProductDiscount">{discount}</span>
          </ProductPrice>
        </div>
        {/* </Link> */}
      </BestSellersImageTextContainer>
    </>
  );
};

export default ProductCard;
