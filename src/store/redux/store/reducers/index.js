import { combineReducers } from "redux";

///////////////////////////////////////////////////
import { counterReducer } from "./pdp";
import { bottomGoToReducer } from "./pdp";
import { rightDrawerReducer } from "./navbar";
import { popupReducer } from "./navbar";
import { listReducer } from "./navbar";
import { mobileListReducer } from "./navbar";
import { checkOutReducer } from "./checkout";
import { PlpFilterMobileReducer } from "./plp";
// import { PlpMainDataReducer } from './plp';
///////////////////////////////////////////////////

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  bottomGoToReducer: bottomGoToReducer,
  rightDrawerReducer: rightDrawerReducer,
  popupReducer: popupReducer,
  listReducer: listReducer,
  mobileListReducer: mobileListReducer,
  checkOutReducer: checkOutReducer,
  // PlpMainDataReducer: PlpMainDataReducer,
  PlpFilterMobileReducer: PlpFilterMobileReducer,
});

export default rootReducer;
