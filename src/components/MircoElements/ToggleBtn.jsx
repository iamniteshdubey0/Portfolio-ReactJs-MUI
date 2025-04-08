import React, { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/material";
import { useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../utils/ThemesV2";
import { Tooltip } from "@mui/material";
import { useContext } from "react";

const ToggleBtn = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [selected, setSelected] = useState(false);

  const CustomToggleBtn = styled(ToggleButton)(({ theme }) => ({
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    color:
      theme.palette.mode === "light"
        ? colors.oxfordBlue[700]
        : colors.whiteSmoke[800],
    // boxShadow:
    //   theme.palette.mode === "light"
    //     ? `0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)`
    //     : `0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)`,
    // add darmode shadow drop

    "&:hover": {
      color:
        theme.palette.mode === "light"
          ? colors.secondary[500]
          : colors.secondary[500],
    },
  }));
  return (
    <CustomToggleBtn
      value="check"
      selected={selected}
      onChange={() => {
        colorMode.toggleColorMode();
        setSelected((prevSelected) => !prevSelected);
      }}
    >
      {theme.palette.mode === "light" ? (
        <Tooltip title="Dark Mode">
          <DarkModeIcon fontSize="small"></DarkModeIcon>
        </Tooltip>
      ) : (
        <Tooltip title="Light Mode">
          <LightModeIcon fontSize="small"></LightModeIcon>
        </Tooltip>
      )}
    </CustomToggleBtn>
  );
};

export default ToggleBtn;
