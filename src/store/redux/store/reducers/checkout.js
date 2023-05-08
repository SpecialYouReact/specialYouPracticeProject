const initialStateCheckOut = {
  showDetails: true,
  showForm: false,
};

/////////////////////////////////
////////////////////////////////

export const checkOutReducer = (state = initialStateCheckOut, action) => {
  if (action.type === "openCheckOutForm") {
    return {
      showDetails: false,
      showForm: true,
    };
  }
  if (action.type === "openCheckOutDetails") {
    return {
      showDetails: true,
      showForm: false,
    };
  } else return state;
};

///////////////////////////////////////////////////////////////////////////////////
