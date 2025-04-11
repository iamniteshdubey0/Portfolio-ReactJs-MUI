import React from "react";
import { Button, styled } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../utils/ThemesV2";


const Btn = ({ title, gradient, onclick, icon, size }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const CustomButton = styled(Button)(({ theme }) => ({
    padding: "10px 15px",
    backgroundImage: `linear-gradient(to right, #FF512F 0%, #F09819  51%, #FF512F  100%)`,
    transition: "0.5s",
    backgroundSize: `200% auto`,
    color: " #fff",

    "&:hover": {
      backgroundPosition: `right center`,
      color: " #fff",
      textDecoration: "none",
    },
  }));
  return (
    <CustomButton
      size={size}
      onClick={onclick}
      variant="outlined"
      endIcon={icon}
    >
      {title}
    </CustomButton>
  );
};

export default Btn;
