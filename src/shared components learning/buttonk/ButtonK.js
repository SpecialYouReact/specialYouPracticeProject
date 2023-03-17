import { Button } from "@mui/material";

const CustomButton = (props) => {
  const { text, style, handleClick } = props;

  return (
    <>
      <Button style={style} onClick={handleClick}>
        {text}
      </Button>
    </>
  );
};

export default CustomButton;
