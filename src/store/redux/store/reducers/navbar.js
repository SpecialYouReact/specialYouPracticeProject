//navbar
const initialStateRightDrawer = {
  showCart: false,
  showWishList: false,
  showMyOrders: false,
  showOrderHistory: false,
  showBrowseThemes: false,
  showOverlay: false,
};
const initialStatePopUp = {
  showLogin: false,
  showLoggedin: false,
  showLoginForm: false,
  showOverlay: false,
};
const initialStateList = {
  showSearchList: false,
  showCategoryList: false,
  showAgeList: false,
};
const initialStateMobileList = {
  showMobileSearchList: false,
  showMobileCategoryList: false,
  showMobileAgeList: false,
};

/////////////////////////////////
////////////////////////////////

export const rightDrawerReducer = (state = initialStateRightDrawer, action) => {
  if (action.type === "openCart") {
    return {
      showCart: true,
      showWishList: false,
      showMyOrders: false,
      showOrderHistory: false,
      showBrowseThemes: false,
      showOverlay: true,
    };
  }
  if (action.type === "openWishList") {
    return {
      showCart: false,
      showWishList: true,
      showMyOrders: false,
      showOrderHistory: false,
      showBrowseThemes: false,
      showOverlay: true,
    };
  }

  if (action.type === "openMyOrders") {
    return {
      showCart: false,
      showWishList: false,
      showMyOrders: true,
      showOrderHistory: false,
      showBrowseThemes: false,
      showOverlay: true,
    };
  }

  if (action.type === "openOrderHistory") {
    return {
      showWishList: false,
      showCart: false,
      showMyOrders: false,
      showOrderHistory: true,
      showBrowseThemes: false,
      showOverlay: true,
    };
  }
  if (action.type === "openBrowseThemes") {
    return {
      showWishList: false,
      showCart: false,
      showMyOrders: false,
      showOrderHistory: false,
      showBrowseThemes: true,
      showOverlay: true,
    };
  }
  if (action.type === "closeAllRightDrawer") {
    return {
      showCart: false,
      showWishList: false,
      showMyOrders: false,
      showOrderHistory: false,
      showBrowseThemes: false,
      showOverlay: false,
    };
  } else return state;
};

///////////////////////////////////////////////////////////////////////////////////

export const popupReducer = (state = initialStatePopUp, action) => {
  if (action.type === "openLogin") {
    return {
      showLogin: true,
      showLoginForm: false,
      showLoggedin: false,
      showOverlay: true,
    };
  }
  if (action.type === "openLoginForm") {
    return {
      showLogin: false,
      showLoginForm: true,
      showLoggedin: false,
      showOverlay: true,
    };
  }
  if (action.type === "openLoggedin") {
    return {
      showLogin: false,
      showLoginForm: false,
      showLoggedin: true,
      showOverlay: true,
    };
  }
  if (action.type === "closeAllPopup") {
    return {
      showLogin: false,
      showLoginForm: false,
      showLoggedin: false,
      showOverlay: false,
    };
  } else return state;
};

///////////////////////////////////////////////////////////////////////////////////////////

export const listReducer = (state = initialStateList, action) => {
  if (action.type === "toggleSearchList") {
    return {
      showSearchList: !state.showSearchList,
      showCategoryList: state.showCategoryList,
      showAgeList: state.showAgeList,
    };
  }
  if (action.type === "openCategoryList") {
    return {
      showSearchList: state.showSearchList,
      showCategoryList: !state.showCategoryList,
      showAgeList: state.showAgeList,
    };
  }

  if (action.type === "openAgeList") {
    return {
      showSearchList: state.showSearchList,
      showCategoryList: state.showCategoryList,
      showAgeList: true,
    };
  }
  if (action.type === "closeAgeList") {
    return {
      showSearchList: state.showSearchList,
      showCategoryList: state.showCategoryList,
      showAgeList: false,
    };
  }

  if (action.type === "closeAllList") {
    return {
      showSearchList: false,
      showCategoryList: false,
      showAgeList: false,
    };
  } else return state;
};

/////////////////////////////////////////////////////////////////////////////////

export const mobileListReducer = (state = initialStateMobileList, action) => {
  if (action.type === "openMobileCategoryList") {
    return {
      showMobileCategoryList: true,
      showMobileAgeList: false,
      showMobileSearchList: false,
    };
  }
  if (action.type === "openMobileAgeList") {
    return {
      showMobileCategoryList: true,
      showMobileAgeList: true,
      showMobileSearchList: false,
    };
  }
  if (action.type === "toggleMobileSearchList") {
    return {
      showMobileCategoryList: false,
      showMobileAgeList: false,
      showMobileSearchList: !state.showMobileSearchList,
    };
  }
  if (action.type === "closeAllMobileList") {
    return {
      showMobileCategoryList: false,
      showMobileAgeList: false,
      showMobileSearchList: false,
    };
  } else return state;
};

// export const rightDrawerReducer;//not correct,why ?
// export rightDrawerReducer; //not correct,why ?

// switch (action.type) {
//   case openCart:
//     return { showCart: true };
//     break;
//   case closeCart:
//     return { showCart: false };
//     break;
//   case openWishList:
//     return { showWishList: true };
//     break;
//   case closeWishList:
//     return { showWishList: true };
//     break;
//   default:
//     return state;
// }
