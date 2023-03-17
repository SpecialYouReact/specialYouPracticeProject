import React from "react";
import { useDispatch } from "react-redux";

const Plp = () => {
  const dispatch = useDispatch();
  const addBtn = () => {
    dispatch({
      type: "increment",
    });
  };

  const subBtn = () => {
    dispatch({
      type: "decrement",
    });
  };
  const addBtn25 = () => {
    dispatch({
      type: "incrementByValue",
      payload: 25,
    });
  };
  return (
    <div>
      <h2>{any}</h2>
      <button onClick={addBtn}>Increment</button>
      <button onClick={subBtn}>Decrement</button>
    </div>
  );
};

export default Plp;
