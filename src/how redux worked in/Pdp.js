import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Pdp = () => {
  const dispatch = useDispatch();
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

  //last logic
  const clickAddTo = () => {
    dispatch({ type: "openBottomGoTo" });
  };
  const goToUrl = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    dispatch({ type: "restoreDefaultBottom" });
  };

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

  return <div>Pdp</div>;
};

export default Pdp;
