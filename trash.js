// previous plp page of main branch

import styles from "./plp.module.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//pages
// import BottomPlp from "../../bottom sticky/pages/BottomPlp";
//components
//custom
import NavBar from "../../../../shared components/navBar/NavBar";
import CheckBox from "../../../../shared components/checkBox/CheckBox";
import Radio from "../../../../shared components/radio/Radio";
import ProductCard2 from "../../../../shared components/productCard2/ProductCard2";

//JSON data
import { plpData } from "../../../../helper/plp/plpData";
import { CategoryData } from "../../../../helper/plp/CategoryData";

//images and icons
import FilterAndSorting from "../../../../shared assets/icons/FilterAndSortingIcon.svg";

const Plp = (props) => {
  const { passWishList, passWishListSetter } = props;
  const [dataPlpMain, setDataPlpMain] = useState([]);
  // const [dataCategory, setDataCategory] = useState([]);
  let scrollY;
  const dispatch = useDispatch();
  // const dataPlp = useSelector((state) => state.plpMainDataReducer.plpMainData);
  // const showOverlayRightDrawer = useSelector(
  //   (state) => state.rightDrawerReducer.showOverlay
  // );
  // const showOverlayPopup = useSelector(
  //   (state) => state.popupReducer.showOverlay
  // );

  const navigate = useNavigate();
  const goToUrl = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    dispatch({ type: "restoreDefaultBottom" });
  };

  ///////////// Api Calling Logic Start ////////////////////
  // const data = {
  //   accessToken:
  //     "F76rZlsMS9+VCP0ohYWrMAJU1rkArJgMVGuSeFCvj8ccYBC35dOHK9luCObxtOzLliRuxIMwH0mQRAAxgtnpTely0NVeFgi4XrF4Xon6BCno8fGAkqDJqOt11lXrcWNlB98Z4yOkaIpoccS5pF510g==",
  //   publicKey: "pub#45fdh",
  //   request: {
  //     id: "2",
  //   },
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
    getPlpMainData();
    // getCategoryData();
    // dispatch({ type: 'plpMainData' });
  }, []);

  const getPlpMainData = async () => {
    const response = await fetch(
      "http://18.117.242.207//specialYouRepo/repo/api/ProductListingApi/ProductListingApi.php/ProductListingPLPController/getAllProductDetails?loadedPage=1"
      // {
      //   method: "POST",
      //   body: JSON.stringify(data),
      // }
    );
    const data = await response.json();

    setDataPlpMain(data?.response);
  };
  // const getCategoryData = async () => {
  //   const response = await fetch(
  //     'http://18.117.242.207//specialYouRepo/repo/api/ProductListingApi/ProductListingApi.php/ProductListingPLPController/getAllCategoryDetails'
  //   );
  //   const data = await response.json();
  //   setDataCategory(data?.response);
  // };
  /////////////// Api Calling Logic Ends /////////////////
  // console.log(plpData, "sdsad");
  return (
    <>
      {/* {console.log(plpMainData, 'I line')} */}
      <div className={styles.fullContainer}>
        <div className={styles.navbarPlusContainer}>
          {/* {showOverlayPopup && (
            <div
              className="overlay"
              onClick={() => {
                dispatch({ type: "closeAllPopup" });
              }}
            ></div>
          )}
          {showOverlayRightDrawer && (
            <div
              className="overlay"
              onClick={() => {
                dispatch({ type: "closeAllRightDrawer" });
              }}
            ></div>
          )} */}
          <NavBar activePage="plp" CategoryData={CategoryData} />
          {/* dataCategory={dataCategory} */}
          {/* <div>Homepage/Half Birthday (342)</div> */}
          <div className={styles.container}>
            <button
              className={styles.filterAndSorting}
              onClick={() => {
                goToUrl("plpFilterMobile");
              }}
            >
              Filter & Sorting <img src={FilterAndSorting} />{" "}
            </button>
            <div className={styles["left-part"]}>
              {/* tags are one after the other in this part  */}
              <h3 className={styles.heading}>Sorting</h3>
              <Radio
                HtmlFor={"highToLow"}
                id={"highToLow"}
                name={"sortingMisc"}
                text={"Price high to low"}
              />
              <Radio
                HtmlFor={"lowToHigh"}
                id={"lowToHigh"}
                name={"sortingMisc"}
                text={"Price low to high"}
              />
              <Radio
                HtmlFor={"discount"}
                id={"discount"}
                name={"sortingMisc"}
                text={"Discount"}
              />
              <Radio
                HtmlFor={"popularity"}
                id={"popularity"}
                name={"sortingMisc"}
                text={"Popularity"}
              />
              {CategoryData.map((category) => (
                <React.Fragment key={category.categoryId}>
                  <h3 className={styles.heading}>{category.categoryName}</h3>
                  {category.subCategories.map((subCategory) => (
                    <CheckBox
                      key={subCategory.subCategoryId}
                      HtmlFor={`${subCategory.subCategoryName.toLowerCase()}theme`}
                      id={`${subCategory.subCategoryName.toLowerCase()}theme`}
                      name={"theme"}
                      text={`${subCategory.subCategoryName} Theme`}
                    />
                  ))}
                  <div className={styles.view}>View All</div>
                </React.Fragment>
              ))}
              {/* <h3 className={styles.heading}>Birthday Themes</h3>
              <CheckBox
                htmlFor={'jungleTheme'}
                id={'jungleTheme'}
                name={'theme'}
                text={'Jungle Theme'}
              />
              <CheckBox
                htmlFor={'rainbowTheme'}
                id={'rainbowTheme'}
                name={'theme'}
                text={'Rainbow Theme'}
              />
              <CheckBox
                htmlFor={'moonTheme'}
                id={'moonTheme'}
                name={'theme'}
                text={'Moon Theme'}
              />
              <CheckBox
                htmlFor={'butterflyTheme'}
                id={'butterflyTheme'}
                name={'theme'}
                text={'Butterfly Theme'}
              />
              <div className={styles.view}>View All</div>
              <h3 className={styles.heading}>Wedding Themes</h3>
              <CheckBox
                htmlFor={'anniversaryTheme'}
                id={'anniversaryTheme'}
                name={'theme'}
                text={'Anniversary Theme'}
              />
              <CheckBox
                htmlFor={'haldiTheme'}
                id={'haldiTheme'}
                name={'theme'}
                text={'Haldi Theme'}
              />
              <div className={styles.view}>View All</div>
              <h3 className={styles.heading}>Occasion Themes</h3>
              <CheckBox
                htmlFor={'firstBirthdayTheme'}
                id={'firstBirthdayTheme'}
                name={'theme'}
                text={'First Birthday Theme'}
              />
              <CheckBox
                htmlFor={'retirementPartyTheme'}
                id={'retirementPrtyTheme'}
                name={'theme'}
                text={'Retirement Party Theme'}
              />
              <div className={styles.view}>View All</div> */}
            </div>

            <div className={styles["right-part"]}>
              {dataPlpMain.map((plp) => (
                <div className={`${styles.item}`} key={plp?.id}>
                  <ProductCard2
                    objectPlp={plp}
                    image={plp?.images[0]?.imagePath}
                    text={plp?.productName}
                    rate={plp?.finalPrice}
                    mrp={plp?.currentPrice}
                    discount={`${parseInt(
                      ((plp?.currentPrice - plp?.finalPrice) * 100) /
                        plp?.currentPrice,
                      10
                    )}%`}
                    starIconUsed={plp?.starIconUsed}
                    rating={plp?.rating}
                    reviewCount={plp?.reviewCount}
                    passWishListAgain={passWishList}
                    passWishListSetterAgain={passWishListSetter}
                    handleRoute={() => {
                      goToUrl(`plp/${plp.id}`);
                    }}
                  />
                </div>
              ))}
            </div>
            {/* /////////closing container//////////////////// */}
          </div>
          {/* ///////closing navbarPlusContainer ///////////// */}
        </div>
        {/* /////////////// closing full container ////////////////// */}
      </div>
      {/* <BottomPlp /> */}
    </>
  );
};

export default Plp;

// previous plp page of main branch ends

//previous pdp page of main branch starts

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./pdp.module.css";

//pages
import ReviewForm from "../../pdp/pages/ReviewForm";
import BottomPdpAddTo from "../../bottom sticky/pages/BottomPdpAddTo";
import BottomPdpGoTo from "../../bottom sticky/pages/BottomPdpGoTo";
import BottomCart from "../../bottom sticky/pages/BottomCart";

//components
//material ui
import MuiModal from "../../../../shared components/material ui/Modal";
import MuiButton from "../../../../shared components/material ui/Button";
//custom
import NavBar from "../../../../shared components/navBar/NavBar";
import ProductCard2 from "../../../../shared components/productCard2/ProductCard2";
import User from "../../../../shared components/user/User";

//JSON data
import { pdpData } from "../../../../helper/pdp/pdpData";
import { mainProductData } from "../../../../helper/pdp/mainProductData";
import { similarProductsData } from "../../../../helper/pdp/similarProductsData";
import { productAddOnsData } from "../../../../helper/pdp/productAddOnsData";
import { customerReviewsData } from "../../../../helper/pdp/customerReviewsData";

//images and icons
//images
import MainImage from "../../../../shared assets/images/1 - TB-JPZR-L64L/1.jpg";
import SubImage1 from "../../../../shared assets/images/1 - TB-JPZR-L64L/2.png";
import SubImage2 from "../../../../shared assets/images/1 - TB-JPZR-L64L/3.jpg";
import SubImage3 from "../../../../shared assets/images/1 - TB-JPZR-L64L/4.jpg";
import ProductAddons1 from "../../../../shared assets/images/productAddons1.jpg";
import ProductAddons2 from "../../../../shared assets/images/productAddons2.jpg";
import ProductAddons3 from "../../../../shared assets/images/productAddons3.webp";
import FacePhoto1 from "../../../../shared assets/images/happyCustomer.avif";
import FacePhoto2 from "../../../../shared assets/images/happyCustomer2.avif";
import FacePhoto3 from "../../../../shared assets/images/happyCustomer2.avif";
import CircleImage1 from "../../../../shared assets/images/circleImage1.jpg";
import CircleImage2 from "../../../../shared assets/images/circleImage2.jpg";
import CircleImage3 from "../../../../shared assets/images/circleImage3.jpg";
import SimilarProducts1 from "../../../../shared assets/images/similarProducts1.png";
import SimilarProducts2 from "../../../../shared assets/images/similarProducts2.png";
//icons
import LeftArrowCircleIcon from "../../../../shared assets/icons/LeftArrowCircleIcon.svg";
import RightArrowCircleIcon from "../../../../shared assets/icons/RightArrowCircleIcon.svg";
import StarIcon from "../../../../shared assets/icons/StarIcon.svg";
import AddSquareIcon from "../../../../shared assets/icons/AddSquareIcon.svg";
import SubtractSquareIcon from "../../../../shared assets/icons/SubtractSquareIcon.svg";
import SquareIcon from "../../../../shared assets/icons/SquareIcon.svg";
import DownArrowCircleIcon from "../../../../shared assets/icons/DownArrowCircleIcon.svg";
import UpArrowCircleIcon from "../../../../shared assets/icons/UpArrowCircleIcon.svg";
import HeartCircleIcon3 from "../../../../shared assets/icons/HeartCircleIcon3.svg";
import CartIcon2 from "../../../../shared assets/icons/CartIcon2.svg";

const Pdp = (props) => {
  // defining state variables
  // const [showMore, setShowMore] = useState(false);

  const { passWishList, passWishListSetter } = props;
  const [query, setQuery] = useState("");
  const [dataMainProduct, setDataMainProduct] = useState({});
  const [dataProductAddOns, setDataProductAddOns] = useState([]);
  const [dataSimilarProducts, setDataSimilarProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalReviewForm, setModalReviewForm] = useState(false);
  //replacement of mainImageAsOject variable(below state)
  // const [ mainImage,setMainImage] = useState({});

  //useDispatch hook
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //useSelector hook
  const counter = useSelector((state) => state.counterReducer.counter);
  console.log(counter);
  const toggle = useSelector((state) => state.counterReducer.showMore);
  const showBottomAddTo = useSelector(
    (state) => state.bottomGoToReducer.showBottomAddTo
  );
  const showBottomGoTo = useSelector(
    (state) => state.bottomGoToReducer.showBottomGoTo
  );
  console.log(showBottomAddTo);
  // const showOverlayRightDrawer = useSelector(
  //   (state) => state.rightDrawerReducer.showOverlay
  // );
  // const showOverlayPopup = useSelector(
  //   (state) => state.popupReducer.showOverlay
  // );

  //declaring component scoped variables
  let productAddons;
  let sliderBox;
  let targetImage;
  let fullContainerPdp;
  //useEffect Hook
  useEffect(() => {
    sliderBox = document.querySelectorAll(".sliderBox");
    productAddons = document.querySelector(".takeToProductAddons");
    fullContainerPdp = document.querySelector(".fullContainerPdp");
    console.log(fullContainerPdp);
    // targetImage = document.querySelector(".targetImage");
    getMainProductData();
    getProductAddOnsData();
    getSimilarProductsData();
  }, [currentIndex, toggle, counter, modalReviewForm]);

  // const idSetter = () => {
  // let generalQuery = window.location.search;
  // return generalQuery;
  // setQuery(window.location.search);
  // };
  // window.onload(idSetter);
  // fullContainerPdp.onLoad(() => {
  // idSetter();
  // });

  const getMainProductData = async () => {
    const response = await fetch(
      "http://18.117.242.207//specialYouRepo/repo/api/ProductListingApi/ProductListingApi.php/ProductListingMasterController/getAllProductsForPDPDetails?id=2"
    );
    const data = await response.json();
    setDataMainProduct(data?.response);
  };

  const getProductAddOnsData = async () => {
    const response = await fetch(
      "http://18.117.242.207//specialYouRepo/repo/api/ProductListingApi/ProductListingApi.php/ProductListingMasterController/getProductAddOns?id=1"
    );
    const data = await response.json();
    setDataProductAddOns(data?.response);
  };

  const getSimilarProductsData = async () => {
    const response = await fetch(
      "http://18.117.242.207//specialYouRepo/repo/api/ProductListingApi/ProductListingApi.php/ProductListingMasterController/getSimilarProductsForAProduct?id=11"
    );
    const data = await response.json();
    setDataSimilarProducts(data?.response);
  };

  // let mainImageAsObject = dataMainProduct?.images[currentIndex];
  // setMainImage(dataMainProduct?.images[currentIndex]);
  let mainImage = mainProductData?.images[currentIndex];

  //last logic
  const clickAddTo = () => {
    dispatch({ type: "openBottomGoTo" });
    productAddons?.scrollIntoView({ behavior: "smooth" });
    return true;
  };
  const goToUrl = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    dispatch({ type: "restoreDefaultBottom" });
  };

  //first logic(sliding images horizontally)
  const previousButton = (i) => {
    let width = sliderBox[i].clientWidth;
    sliderBox[i].scrollLeft = sliderBox[i].scrollLeft - width;
  };
  const nextButton = (i) => {
    let width = sliderBox[i].clientWidth;
    sliderBox[i].scrollLeft = sliderBox[i].scrollLeft + width;
  };

  //second logic (setting sub image as main image on Click)
  const goToImage = (incomingIndex) => {
    setCurrentIndex(incomingIndex);
    // targetImage.style.border = "1px solid red";
    document.querySelector(`.targetImage-${incomingIndex + 1}`).style.border =
      "2px solid red";
  };

  //third logic (scrolling up on the same page)
  const navigatingOnTheSamePage = () => {};

  //fourth logic
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const increaseHandler = () => {
    dispatch({ type: "increase", payload: 10 });
  };
  const toggleHandler = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <>
      <div className={`${styles.fullContainer} fullContainerPdp`}>
        {console.log(fullContainerPdp)}
        {console.log(targetImage)}
        {console.log(query)}
        {/* console.log(dataProductAddOns); */}
        <div className={styles.navbarPlusContainer}>
          {/* <div>Homepage/Half Birthday (342)</div> */}
          {/* {showOverlayPopup && (
            <div
              className="overlay"
              onClick={() => {
                dispatch({ type: "closeAllPopup" });
              }}
            ></div>
          )}
          {showOverlayRightDrawer && (
            <div
              className="overlay"
              onClick={() => {
                dispatch({ type: "closeAllRightDrawer" });
              }}
            ></div>
          )} */}
          <NavBar activePage="pdp" />

          <div className={styles.container}>
            <div className={styles.leftPart}>
              {/* <img
                // src={mainImageAsObject?.imagePath}
                src={mainImage?.imagePath}
                className={styles.mainImage}
              />
              <div className={styles["icon-subImage"]}>
                <img
                  src={LeftArrowCircleIcon}
                  className={styles.icon}
                  onClick={() => {
                    previousButton(0);
                  }}
                />
                <div className={`${styles.subImageContainer} sliderBox`}>
                  {mainProductData?.images?.map((subImage, index) => (
                    <img
                      key={subImage.imageId}
                      src={subImage.imagePath}
                      className={`${styles.subImage} targetImage-${
                        subImage.productId + 1
                      }`}
                      onClick={() => goToImage(index)}
                    />
                  ))}
                </div>
                <img
                  src={RightArrowCircleIcon}
                  className={styles.icon}
                  onClick={() => {
                    nextButton(0);
                  }}
                />
              </div> */}
            </div>
            <div className={styles.rightPart}>
              {/* first division */}
              <h4 className={styles.title}>
                {/* {mainProductData?.title} */}
                {dataMainProduct?.title}
                {/* Special You Pastel Rainbow Happy Birthday Decoration DIY Combo
                Set... */}
              </h4>

              {/* second division */}
              <div className={styles.price}>
                <span className={styles.productRate}>
                  {/* {mainProductData?.finalPrice} */}
                  {dataMainProduct?.finalPrice}
                </span>
                <span className={styles.productMrp}>
                  {/* {mainProductData?.currentPrice} */}
                  {dataMainProduct?.currentPrice}
                </span>
                <span className={styles.productDiscount}>25% off</span>
              </div>

              {/* third division */}
              <div className={styles.ratingReview}>
                <img src={StarIcon} className={styles.starIcon} />
                {/* <span>{mainProductData?.rating} </span> */}
                {dataMainProduct?.rating}
                <span className={styles.review}>
                  {/* {mainProductData?.review} */}
                  {dataMainProduct?.review}
                  Reviews
                </span>
              </div>

              {/* fourth division */}
              <div className={styles.colorOptions}>
                <h3 className={styles.heading}>Color Options</h3>
                <div>
                  <img
                    src={SubImage1}
                    className={styles.colorOptionsSubImage1}
                  />
                  <img
                    src={SubImage2}
                    className={styles.colorOptionsSubImage2}
                  />
                  <img
                    src={SubImage3}
                    className={styles.colorOptionsSubImage3}
                    onClick={increaseHandler}
                  />
                </div>
              </div>

              {/* fifth division */}
              <div className={styles.addQuantity}>
                <h3 className={styles.heading}>Add Quantity</h3>
                <div className={styles.addQuantityIconContainer}>
                  <img
                    src={AddSquareIcon}
                    className={styles.addQuantityIcon}
                    onClick={incrementHandler}
                  />
                  <span className={styles.addQuantityIcon}>{counter}</span>
                  <img
                    src={SubtractSquareIcon}
                    className={styles.addQuantityIcon}
                    onClick={decrementHandler}
                  />
                </div>
              </div>

              {/* sixth division */}
              <div className={styles.checkDeliveryDate}>
                <h3 className={styles.heading}>Check Delivery Date</h3>
                <div className={styles.pincodeButtonContainer}>
                  <input
                    type="text"
                    placeholder="Enter your pincode"
                    className={styles.pincode}
                  />
                  <MuiButton
                    text={"View All"}
                    styles={{
                      width: "30%",
                      height: "100%",
                      backgroundColor: "#BDBDBD",
                      color: "white",
                      textTransform: "none",
                    }} //why this mui button isn't taking complete height of the container ?
                  />
                </div>
              </div>

              {/* seventh division */}
              <div className={styles.inclusions}>
                <h3 className={styles.heading}>Inclusions</h3>
                <ol className={styles.inclusionsList}>
                  {/* <li>Balloons</li>
                  <li>Banner</li>
                  <li>Photo Banner</li>
                  <li>Arch Tape</li>
                  <li>Double Sided Tape</li> */}
                  {/* {mainProductData?.inclusions?.slice(4, 8).map((item) => ( 
                    <li key={item?.id}>{item?.inclusion}</li>))}*/}
                  {dataMainProduct?.inclusions?.slice(4, 8).map((item) => (
                    <li key={item?.id}>{item?.inclusion}</li>
                  ))}
                </ol>
              </div>

              {/* eight division */}
              <div className={styles.description}>
                <h3 className={styles.heading}>Description</h3>
                <p className={styles.descriptionText}>
                  {mainProductData?.productDesc}
                  {/* [INSIDE THE BOX]: You will get 83 pieces of premium quality
                  items for 1st Birthday, 1 pcs cursive Golden Happy Birthday
                  banner, 1 set of 12 pcs of blue monthly banner, 35 pcs of
                  light/pastel blue, 25 pcs of white, 5 pcs of Golden metallic,
                  2 pcs of Gold confetti balloons, 1 pcs of No.1 Gold foil
                  balloon, 1 pcs of Arch Tape & 1 pc... */}
                </p>

                {toggle ? (
                  <img
                    src={UpArrowCircleIcon}
                    className={styles.upArrowCircleIcon}
                    onClick={toggleHandler}
                  />
                ) : (
                  <img
                    src={DownArrowCircleIcon}
                    className={styles.downArrowCircleIcon}
                    onClick={toggleHandler}
                  />
                )}
                {toggle && (
                  <p className={styles.descriptionText}>
                    {/* [INSIDE THE BOX]: You will get 83 pieces of premium quality
                    items for 1st Birthday, 1 pcs cursive Golden Happy Birthday
                    banner, 1 set of 12 pcs of blue monthly banner, 35 pcs of
                    light/pastel blue, 25 pcs of white, 5 pcs of Golden
                    metallic, 2 pcs of Gold confetti balloons, 1 pcs of No.1
                    Gold foil balloon, 1 pcs of Arch Tape & 1 pc... */}
                    {mainProductData.productDesc1}
                  </p>
                )}
              </div>

              {/* ninth division */}
              <div className={`${styles.productAddons} takeToProductAddons`}>
                <h3 className={styles.heading}>Product Add-ons</h3>
                {/* //////////////////////////////////////// */}
                <div className={styles.productAddonsContainer}>
                  <div className={`${styles.cardsButtonsContainer} sliderBox`}>
                    {dataProductAddOns.map((productAddOn) => (
                      <div
                        className={styles.cardButtonContainer}
                        key={productAddOn.id}
                      >
                        <div className={styles.card}>
                          <ProductCard2
                            image={productAddOn?.images[0]?.imagePath}
                            text={productAddOn?.productName}
                            rate={productAddOn?.finalPrice}
                          />
                        </div>
                        <button className={styles.productAddonsButton}>
                          Add
                        </button>
                      </div>
                    ))}
                  </div>
                  {/* fourth portion(unrepeated) */}
                  <div className={styles.iconContainer}>
                    <img
                      src={RightArrowCircleIcon}
                      className={styles.rightArrowCircleIcon}
                      onClick={() => {
                        nextButton(1);
                      }}
                    />
                  </div>
                  {/* // fourth portion ends  */}
                </div>
                {/* ///////////////ninth section ends ///////////// */}
              </div>

              {/* tenth division */}
              <div className={`${styles.customerReviews}`}>
                <h3 className={styles.heading}>Customer Reviews</h3>
                <div className={styles.customerReviewsContainer}>
                  <ul>
                    {customerReviewsData.map((customerReview) => (
                      <li
                        className={styles.customerReviewsList}
                        key={customerReview.id}
                      >
                        <User
                          text={customerReview.userName}
                          image={customerReview.image}
                          rating={customerReview.rating}
                          starIconUsed={customerReview.starIconUsed}
                          // objectCustomerReview={customerReview}
                        />
                        <p className={styles.customerReviewPara}>
                          {customerReview.reviewText}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={styles.customerReviewsButton}
                    onClick={() => setModalReviewForm(true)}
                  >
                    Write Your Review
                  </button>
                </div>
              </div>

              {/* eleventh division */}
              <div className={styles.similarProducts}>
                <h3 className={styles.heading}>Similar Products</h3>
                <div className={styles.similarProductsContainer}>
                  <div className={`${styles.cardsContainer} sliderBox`}>
                    {dataSimilarProducts.map((similarProduct) => (
                      <div
                        className={styles.cardContainer}
                        key={similarProduct.id}
                      >
                        <ProductCard2
                          key={similarProduct.id}
                          objectSimilarProduct={similarProduct}
                          image={similarProduct?.images[0]?.imagePath}
                          // image={SubImage1}
                          text={similarProduct?.productName}
                          rate={similarProduct?.finalPrice}
                          mrp={similarProduct?.currentPrice}
                          discount={`${parseInt(
                            ((similarProduct?.currentPrice -
                              similarProduct?.finalPrice) *
                              100) /
                              similarProduct?.currentPrice,
                            10
                          )}%`}
                          starIconUsed={similarProduct?.starIconUsed}
                          rating={similarProduct?.rating}
                          reviewCount={similarProduct?.reviewCount}
                          passWishListAgain={passWishList}
                          passWishListSetterAgain={passWishListSetter}
                        />
                      </div>
                    ))}
                  </div>
                  {/*  fourth portion(unrepeated)  */}
                  <div className={styles.iconContainer}>
                    <img
                      src={RightArrowCircleIcon}
                      className={styles.rightArrowCircleIcon}
                      onClick={() => {
                        nextButton(2);
                      }}
                    />
                  </div>
                  {/* fourth portion ends */}
                </div>
                {/* ///////////tenth section ends/////// */}
              </div>
              {/* close right part */}
            </div>
            {/* close container */}
          </div>
          <MuiModal
            width={505}
            height={410}
            content={<ReviewForm />}
            open={modalReviewForm}
            setOpen={setModalReviewForm}
          />
          {/* close navbar plus container */}
          {/* <button onClick={navigatingOnTheSamePage}>Click Me!</button> */}
          {showBottomAddTo && (
            <BottomPdpAddTo
              handleClickAddTo={() => {
                clickAddTo();
              }}
            />
          )}
          {/* <BottomPdpAddTo /> */}
          {showBottomGoTo && (
            <BottomPdpGoTo
              handleClickGoTo={() => {
                goToUrl("myCart");
              }}
            />
          )}
        </div>
        {/* close full container */}
      </div>
      {/* first */}
      {/* second */}
      {/* third */}
      {/* <BottomCart /> */}
    </>
  );
};

export default Pdp;

//previous pdp page of main branch ends

//logic for react api scrolling
import { useRef } from "react";

const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`{{baseUrl}}/api/getAllCategoryDetails?page=${page}`)
      .then((response) => response.json())
      .then((newData) => {
        setData((prevData) => [...prevData, ...newData]);
      });
  }, [page]);

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  <div ref={ref}>
  {data.map((item) => (
    <div key={item.id}>{item.name}</div>
  ))}
</div>

// /////////////////////////////////////////
// const data = {
  //   accessToken:
  //     "F76rZlsMS9+VCP0ohYWrMAJU1rkArJgMVGuSeFCvj8ccYBC35dOHK9luCObxtOzLliRuxIMwH0mQRAAxgtnpTely0NVeFgi4XrF4Xon6BCno8fGAkqDJqOt11lXrcWNlB98Z4yOkaIpoccS5pF510g==",
  //   publicKey: "pub#45fdh",
  //   request: {
  //     id: "2",
  //   },
  // };

  // const getData = async () => {
  //   const response = await fetch(
  //     "http://3.135.231.19//specialYouRepo/repo/api/ProductListingApi/ProductListingApi.php/ProductListingMasterModule/getAllProductsForPDPDetails",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //     }
  //   );
  //   const res = await response.json();
  //   console.log(res?.response);
  // };