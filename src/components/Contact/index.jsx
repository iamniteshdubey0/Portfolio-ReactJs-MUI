import React from "react";
import { tokens } from "../../utils/ThemesV2";
import { Box, Container, styled, Typography, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Btn from "../MircoElements/Btn";

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

const FormHeading = styled(Typography)(({ theme }) => ({
  textTransform: "capitalize",
  fontSize: "16px",
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

const FormBox = styled(Box)(({ theme }) => ({
  width:'450px',
  padding:'15px 25px',
  display:'flex',
  justifyContent:'flex-start',
  alignItems:'center',
  flexDirection:'column',
  marginBottom: "32px",
  minHeight: "320px",
  cursor: "pointer",
  border: `1px solid ${tokens(theme.palette.mode).success[500]}`,
  borderRadius: "8px",
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[100]
      : tokens(theme.palette.mode).oxfordBlue[300],
  transition: "all 0.3s linear",
  "&:hover": {
    boxShadow: `rgb(72 229 194) 0px 0px 40px -20px`,
    transform: "translateY(-5px)",
  },
}));

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, p: 2 }}>
      <SectionHeader>
        <SectionHeading>Contact</SectionHeading>
        <SectionDescription>Call me </SectionDescription>
      </SectionHeader>
      <FormBox component="form" noValidate autoComplete="off">
        <FormHeading>Connect With Me!</FormHeading>
        <TextField size="small" sx={{mt:2}} fullWidth id="outlined-basic" label="Email" variant="outlined" />
        <TextField size="small" sx={{mt:2}} fullWidth id="outlined-basic" label="Name" variant="outlined" />
        <TextField size="small" sx={{mt:2}} fullWidth id="outlined-basic" label="Email" variant="outlined" />
        <TextField rows={4} multiline size="small" sx={{mt:2, mb:2}} fullWidth id="outlined-basic" label="Message" variant="outlined" />
        <Btn title={"Send"}></Btn>
      </FormBox>
    </Container>
  );
};

export default Contact;
