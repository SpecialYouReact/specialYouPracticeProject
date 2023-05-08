// import { useEffect } from "react";

// const initialStateMainApiData = { plpMainData:[] };

// export const PlpMainDataReducer = (state = initialStateMainApiData, action) => {
// let plpApiMainData ;

//   useEffect(() => {
//     getPlpMainData();
//   }, []);

//   const getPlpMainData = async () => {
//     const response = await fetch(
//       'http://18.117.242.207//specialYouRepo/repo/api/ProductListingApi/ProductListingApi.php/ProductListingPLPController/getAllProductDetails?loadedPage=1'
//     );
//     const data = await response.json();
//     plpApiMainData = data?.response;
//   };

//   if (action.type === 'fetchPlpMainData') {
//     return {
//       plpMainData: plpApiMainData,
//     };
//   }

//   else return state;
// };

const initialPlpFilterData = {
  showSortingIncludes: true,
  showShouldIncludeIncludes: false,
  showColorIncludes: false,
  showGenderIncludes: false,
};
export const PlpFilterMobileReducer = (
  state = initialPlpFilterData,
  action
) => {
  if (action.type === "openSortingIncludes") {
    return {
      showSortingIncludes: true,
      showShouldIncludeIncludes: false,
      showColorIncludes: false,
      showGenderIncludes: false,
    };
  }
  if (action.type === "openShouldIncludeIncludes") {
    return {
      showSortingIncludes: false,
      showShouldIncludeIncludes: true,
      showColorIncludes: false,
      showGenderIncludes: false,
    };
  }
  if (action.type === "openColorIncludes") {
    return {
      showSortingIncludes: false,
      showShouldIncludeIncludes: false,
      showColorIncludes: true,
      showGenderIncludes: false,
    };
  }
  if (action.type === "openGenderIncludes") {
    return {
      showSortingIncludes: false,
      showShouldIncludeIncludes: false,
      showColorIncludes: false,
      showGenderIncludes: true,
    };
  } else return state;
};
