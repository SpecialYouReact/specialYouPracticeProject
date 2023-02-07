import "./App.css";
import Button from "./shared components/button/Button";
// import { Button } from "@mui/material";
// import other from "./shared assets/icons/index";
import { HeartIcon } from "./shared assets/icons";
import Nature from "./shared assets/images/nature.jpg";
import specialYou from "./shared assets/images/1 - TB-JPZR-L64L/1.jpg";

function App() {
  // console.log(other);
  return (
    <>
      <Button />
      <HeartIcon />

      {/* <Nature /> */}
      <img src={Nature} height="300px" width="300px" alt="nature" />
      <img src={specialYou} alt="special" />
    </>
  );
}

export default App;
