// import React, { useState } from "react";
// import ButtonR from "../buttonr/ButtonR";
// import Nature from "../../shared assets/images/nature.jpg";
// import styles from "./modalr.module.css";

// const ModalR = ({ activeStyle }) => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   let chooseStyle;
//   switch (activeStyle) {
//     case "homePage-loginForm":
//       chooseStyle = styles["homePage-loginForm"];
//       break;
//     case "pdp-review":
//       chooseStyle = styles["pdp-review"];
//       break;
//     case "homePage-orderPlaced":
//       chooseStyle = styles["homePage-orderPlaced"];
//       break;
//   }
//   return (
//     <>
//       <div className={chooseStyle}>
//         <img src={Nature} height="100px" width="200px" />
//         <ButtonR
//           onClick={handleOpen}
//           text={"Open Modal"}
//           activeStyle={"homePage-orderPlaced"}
//         />
//       </div>
//     </>
//   );
// };

// export default ModalR;
