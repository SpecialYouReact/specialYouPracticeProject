import React from "react";

const BottomWrapper = ({ children }) => {
  const bottomContainer = {
    height: "8.8rem",
    width: "100%",
    // width: "100vw",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    // border: "2px solid red",
    background: "#F9F5FF",
    boxShadow: "10px -4px 10px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    bottom: "0",
    zIndex: "4",
  };

  return <div style={bottomContainer}>{children}</div>;
};

export default BottomWrapper;
