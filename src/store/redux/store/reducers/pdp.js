//pdp page

const initialState = { counter: 0, showMore: false };

const initialStateMobile = { showBottomAddTo: true, showBottomGoTo: false };

export const counterReducer = (state = initialState, action) => {
  //////////////////////////
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showMore: state.showMore,
    };
  }
  ///////////////////////////

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showMore: state.showMore,
    };
  }
  /////////////////////////

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.payload,
      showMore: state.showMore,
    };
  }
  //////////////////////////////

  if (action.type === 'toggle') {
    return {
      showMore: !state.showMore,
      counter: state.counter,
    };
  }
  ////////////////////////////////////
  else return state;
};

export const bottomGoToReducer = (state = initialStateMobile, action) => {
  //////////////////////////
  if (action.type === 'openBottomGoTo') {
    return {
      showBottomAddTo: false,
      showBottomGoTo: true,
    };
  }
  if (action.type === 'restoreDefaultBottom') {
    return {
      showBottomAddTo: true,
      showBottomGoTo: false,
    };
  }

  ////////////////////////////////////
  else return state;
};


