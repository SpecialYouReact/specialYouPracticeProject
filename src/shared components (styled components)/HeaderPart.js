import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

//icons
import CloseIcon from "../shared assets/icons/CloseIcon.svg";

const HeaderPart = (props) => {
  const { text, height, borderRadius } = props;

  const dispatch = useDispatch();
  //useSelector hook
  // const closeDesktopCart = useSelector((state) => state.showCart);

  const handleAllRightDrawer = () => {
    dispatch({ type: "closeAllRightDrawer" });
    dispatch({ type: "closeAllPopup" });
    dispatch({ type: "closeAllList" });
    dispatch({ type: "closeAllMobileList" });
  };

  const Header = styled.div`
    height: ${height};
    // width: 48rem;
    background-color: #f9f5ff;
    font-weight: 600;
    font-size: 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem;
    border-radius: ${borderRadius};
  `;
  const closeIcon = {};
  return (
    <Header>
      <div>{text}</div>
      <img src={CloseIcon} style={closeIcon} onClick={handleAllRightDrawer} />
    </Header>
  );
};

export default HeaderPart;
