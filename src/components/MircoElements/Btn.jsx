import React from "react";
import { Button, styled } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../utils/ThemesV2";

const Btn = ({ title, gradient, onclick, icon, size }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const CustomButton = styled(Button)(({ theme }) => ({
  }));
  return (
    <CustomButton size={size} onClick={onclick} variant="outlined" endIcon={icon}>
      {title}
    </CustomButton>
  );
};

export default Btn;
