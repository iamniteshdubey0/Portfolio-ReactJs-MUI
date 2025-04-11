import React from "react";
import { tokens } from "../../../utils/ThemesV2";
import { Box, Container, styled, Typography, TextField } from "@mui/material";
import Btn from "../../MircoElements/Btn";
import Section from "../../Helper/Section";
import { sectionData } from "../../../data/constants";

const FormBox = styled(Box)(({ theme }) => ({
  width: "450px",
  padding: "15px 25px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
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

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, p: 2 }}>
      <Section
        heading={sectionData[5].section}
        desc={sectionData[5].desc}
      ></Section>
      <FormBox component="form" noValidate autoComplete="off">
        <FormHeading>Connect With Me!</FormHeading>
        <TextField
          size="small"
          sx={{ mt: 2 }}
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          size="small"
          sx={{ mt: 2 }}
          fullWidth
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          size="small"
          sx={{ mt: 2 }}
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          rows={4}
          multiline
          size="small"
          sx={{ mt: 2, mb: 2 }}
          fullWidth
          id="outlined-basic"
          label="Message"
          variant="outlined"
        />
        <Btn title={"Send"}></Btn>
      </FormBox>
    </Container>
  );
};

export default Contact;
