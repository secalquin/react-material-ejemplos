import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
  margin: "0",
});

export const SalcoLoginButton = styled(Button)({
  //background: "linear-gradient(45deg, #C2D500 30%, #FFFFFF 100%)",
  background: "#C2D500",
  border: 0,
  borderRadius: 3,
  marginTop: "10px",
  boxShadow: "0 3px 5px 2px rgba(144, 143, 143, .3)",
  height: 48,
  color: "white",
  padding: "0 30px",
  "&:hover": {
    //you want this to be the same as the backgroundColor above
    backgroundColor: "none",
    color: "black",
  },
  "&:disabled": {
    backgroundColor: "transparent",
    color: "black",
  },
});
