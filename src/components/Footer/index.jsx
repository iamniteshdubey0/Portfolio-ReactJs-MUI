import React from "react";
import { tokens } from "../../utils/ThemesV2";
import { Box, Container, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const SectionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "15px 20px",
}));

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

const SkillText = styled(Typography)(({ theme }) => ({
  textTransform: "capitalize",
  fontSize: "12px",
  fontWeight: 400,
  margin: "4px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[300],
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

const Footer = () => {
  return (
    <Container maxWidth="md" sx={{p: 2 }}>
      <SectionHeader>
        <SectionHeading>Footer</SectionHeading>
        <SectionDescription>Footer </SectionDescription>
      </SectionHeader>
      <Grid container>I am Footer</Grid>
      {/* clipPath: `polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%)`, */}
    </Container>
  );
};

export default Footer;
