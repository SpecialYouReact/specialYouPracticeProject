import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { useSelector, useDispatch } from "react-redux";

//pages
import LoginPopup from "../module/desktop/authorization/pages/LoginPopup";
import LoggedinPopup from "../module/desktop/authorization/pages/LoggedinPopup";
import LoginForm from "../module/desktop/authorization/pages/LoginForm";
/////////
import LoginFormMobile from "../module/mobile/authorization/pages/LoginFormMobile";
///////////
import CategoryList from "../module/common/select menu/pages/CategoryList";
import AgeList from "../module/common/select menu/pages/AgeList";
import SearchList from "../module/common/select menu/pages/SearchList";

//right drawer
import WishList from "../module/common/right drawer/pages/WishList";
import MyCart from "../module/common/right drawer/pages/MyCart";
import MyOrders from "../module/common/right drawer/pages/MyOrders";
import OrderHistory from "../module/common/right drawer/pages/OrderHistory";
import BrowseThemes from "../module/mobile/left drawer/pages/BrowseThemes";

//components
import MuiRightDrawer from "../shared components/material ui/RightDrawer";
// import WishList from "../module/right drawer/pages/WishList";
// import MyCart from "../module/right drawer/pages/MyCart";

//images and icons
//images
import SpecialYou from "../shared assets/images/brandLogo8k.png";
//icons
import HamBurgerMenuIcon from "../shared assets/icons/HamBurgerMenuIcon.svg";
import HeartIcon from "../shared assets/icons/HeartIcon.svg";
import CartIcon from "../shared assets/icons/CartIcon.svg";
import UserIcon from "../shared assets/icons/UserIcon.svg";
import SearchIcon from "../shared assets/icons/SearchIcon.svg";

const NavBar = ({
  passWishList,
  passWishListSetter,
  activePage,
  wishList,
  CategoryData,
}) => {
  const showDesktopCart = useSelector(
    (state) => state.rightDrawerReducer.showCart
  );
  let targetBody;
  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   document.documentElement.style.setProperty(
    //     "--scroll-y",
    //     `${window.scrollY}px`
    //   );
    // });
    targetBody = document.querySelector("body");
    console.log(targetBody);
  }, []);

  const navigate = useNavigate();

  // functions
  const goToUrl = (path) => {
    navigate(path);
  };

  //useDispatch hook
  const dispatch = useDispatch();

  const showOverlayRightDrawer = useSelector(
    (state) => state.rightDrawerReducer.showOverlay
  );
  const showOverlayPopup = useSelector(
    (state) => state.popupReducer.showOverlay
  );

  //useSelector hook
  const showDesktopWishList = useSelector(
    (state) => state.rightDrawerReducer.showWishList
  );
  const showMobileBrowseThemes = useSelector(
    (state) => state.rightDrawerReducer.showBrowseThemes
  );

  /////////////
  const showLogin = useSelector((state) => state.popupReducer.showLogin);
  const showLoginForm = useSelector(
    (state) => state.popupReducer.showLoginForm
  );
  const showLoggedin = useSelector((state) => state.popupReducer.showLoggedin);
  /////////////

  const showSearchList = useSelector(
    (state) => state.listReducer.showSearchList
  );
  const showCategoryList = useSelector(
    (state) => state.listReducer.showCategoryList
  );
  const showAgeList = useSelector((state) => state.listReducer.showAgeList);

  /////////////
  const showMobileSearchList = useSelector(
    (state) => state.mobileListReducer.showMobileSearchList
  );
  const showMobileCategoryList = useSelector(
    (state) => state.mobileListReducer.showMobileCategoryList
  );
  const showMobileAgeList = useSelector(
    (state) => state.mobileListReducer.showMobileAgeList
  );

  const showDialog = () => {
    // document.getElementById("dialog").classList.add("show");
    const scrollY =
      document.documentElement.style.getPropertyValue("--scroll-y");
    const body = document.body;
    // body.style.position = "fixed";
    body.style.top = `-${scrollY}`;
  };
  const closeDialog = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    // document.getElementById("dialog").classList.remove("show");
  };
  const disableScroll = () => {
    if (targetBody) {
      targetBody.style.overflow = "hidden";
    }
  };

  ////////////////////////////////////////////////////////////////////////////
  // const [rightDrawerCart, setRightDrawerCart] =  useState(false);
  // const [rightDrawerWishList, setRightDrawerWishList] = useState(false);
  ///////////////////////////////////////////////////////////////////////////

  const myCartHandler = () => {
    dispatch({ type: "openCart" });
  };
  const wishListHandler = () => {
    dispatch({ type: "openWishList" });
  };
  const browseThemesHandler = () => {
    dispatch({ type: "openBrowseThemes" });
  };
  ////////////////
  const loginHandler = () => {
    dispatch({ type: "openLogin" });
  };
  const loginFormHandler = () => {
    dispatch({ type: "openLoginForm" });
  };
  const loggedinHandler = () => {
    dispatch({ type: "openLoggedin" });
  };
  ////////////////////
  const searchListHandler = () => {
    dispatch({ type: "toggleSearchList" });
  };
  const categoryListHandler = () => {
    dispatch({ type: "openCategoryList" });
    dispatch({ type: "closeAgeList" });
  };
  const ageListHandler = () => {
    dispatch({ type: "openAgeList" });
  };
  /////////////////
  const mobileCategoryListHandler = () => {
    dispatch({ type: "openMobileCategoryList" });
  };
  const mobileAgeListHandler = () => {
    dispatch({ type: "openMobileAgeList" });
  };
  const mobileSearchListHandler = () => {
    dispatch({ type: "toggleMobileSearchList" });
  };

  return (
    <header className={styles.header}>
      {showOverlayPopup && (
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
      )}

      {/* header first navbar section (first section-first part) */}
      <nav className={styles.firstNavbar}>
        <div className={styles.hamBurgerAndLogoContainer}>
          <img
            src={HamBurgerMenuIcon}
            className={`${styles.headerIcon} ${styles.hamBurgerIcon}`}
            onClick={browseThemesHandler}
          />
          <img
            src={SpecialYou}
            className={styles.specialYouLogo}
            onClick={() => {
              goToUrl("/");
            }}
          />
        </div>
        {showLogin && <LoginPopup />}
        {showLoginForm && <LoginForm />}
        {showLoggedin && <LoggedinPopup />}
        {activePage === "checkOut" ? (
          ""
        ) : (
          <input
            placeholder="Search any items"
            className={`${styles.headerInput} ${styles.headerInputDesktop}`}
            onClick={searchListHandler}
          />
        )}
        {showSearchList && <SearchList status="desktopActive" />}

        <div className={styles.headerIcons}>
          {/* //////////////////////////////// HOMEPAGE AND MOBILE HEART ICON //////////////////////////////// */}
          <img
            src={HeartIcon}
            className={`${styles.headerIcon} ${styles.desktopWishListIcon}`}
            onClick={wishListHandler}
          />
          <img
            src={HeartIcon}
            className={`${styles.headerIcon} ${styles.mobileWishListIcon}`}
            onClick={() => {
              goToUrl("wishList");
            }}
          />
          {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* /////////////////////////////// HOMEPAGE AND MOBILE CART ICON ///////////////////////////////// */}
          <img
            src={CartIcon}
            className={`${styles.headerIcon} ${styles.desktopCartIcon}`}
            onClick={myCartHandler}
          />
          <img
            src={CartIcon}
            className={`${styles.headerIcon} ${styles.mobileCartIcon}`}
            onClick={() => {
              goToUrl("myCart");
            }}
          />
          {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* ////////////////////////////////HOMEPAGE AND MOBILE USER ICON///////////////////////////////// */}
          <img
            src={UserIcon}
            className={`${styles.headerIcon} ${styles.desktopUserIcon}`}
            onClick={loginHandler}
          />
          <img
            src={UserIcon}
            className={`${styles.headerIcon} ${styles.mobileUserIcon}`}
            onClick={() => {
              goToUrl("loginformMobile");
            }}
          />
          {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
        </div>
      </nav>
      {/* header second navbar section (first section-second part)   */}
      {activePage === "checkOut" ? (
        ""
      ) : (
        <nav className={styles.secondNavbar}>
          <input
            placeholder="Search any items"
            className={`${styles.headerInput} ${styles.headerInputMobile}`}
            onClick={mobileSearchListHandler}
          />
          {showMobileSearchList && <SearchList status="mobileActive" />}
          {/* {CategoryData.map((category) => (
            <p className={styles.navBarTheme}>{category.categoryName}</p>
          ))} */}
          {/* <p className={styles.navBarTheme}>Birthday Themes</p>
          <p className={styles.navBarTheme}>Wedding Themes</p>
          <p className={styles.navBarTheme}>Occasion Themes</p>
          <p className={styles.navBarTheme}>Personalised Balloons</p> */}
          {showCategoryList && <CategoryList />}
          {showAgeList && <AgeList />}
        </nav>
      )}

      {showDesktopWishList && (
        <WishList status="desktopActive" wishList={wishList} />
      )}

      {/* {showDesktopCart && disableScroll() && <MyCart status="desktopActive" />} */}
      {showDesktopCart && <MyCart status="desktopActive" />}
      {showMobileBrowseThemes && <BrowseThemes />}
    </header>
  );
};
export default NavBar;

{
  /* 
  <MuiRightDrawer
    content={<MyCart />}
    open={rightDrawerCart}
    setOpen={setRightDrawerCart}
  />
  <MuiRightDrawer
    content={<WishList passWishList={passWishList} />}
    open={rightDrawerWishList}
    setOpen={setRightDrawerWishList}
  /> */
}
