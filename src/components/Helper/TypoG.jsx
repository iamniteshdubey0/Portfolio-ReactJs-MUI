import React from 'react'
import { tokens } from "../../../utils/ThemesV2";
import {styled, Typography } from "@mui/material";

const SectionHeading = styled(Typography)(({ theme }) => ({
  fontSize: "26px",
  fontWeight: 700,
  margin: "4px 0px",
  textTransform: "capitalize",
}));

const Span = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 500,
  textTransform: "capitalize",
  marginBottom: "4px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[700]
      : tokens(theme.palette.mode).whiteSmoke[200],
}));

const SectionDescription = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  width: "50%",
  textTransform: "capitalize",
  fontSize: "14px",
  fontWeight: 400,
  margin: "4px 0px 20px 0px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[400],
}));

const TypoG = () => {
  return (
    <div>
      
    </div>
  )
}

export default TypoG
