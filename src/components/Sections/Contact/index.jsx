import React from "react";
import { tokens } from "../../../utils/ThemesV2";
import { Box, Container, styled, TextField, Grid } from "@mui/material";
import Btn from "../../MircoElements/Btn";
import Section from "../../Helper/Section";
import { sectionData } from "../../../data/constants";
import { HeadingText } from "../../Helper/Typo";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

const FormBox = styled(Box)(({ theme }) => ({
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

const Image = styled("img")(({}) => ({
  width: "200px",
  height: "200px",
}));

const MotionFormBox = motion.create(FormBox);
const MotionImage = motion.create(Image);
const Contact = () => {
  return (
    <Container
      id="contact"
      maxWidth="md"
      sx={{
        mt: 8,
        p: 2,
      }}
    >
      <Section
        heading={sectionData[5].section}
        desc={sectionData[5].desc}
      ></Section>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid size={{xs:12, sm:6}} sx={{display:{xs:'none', sm:'block'}}}>
          <MotionImage
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            src="src\assets\mailbox.svg"
          ></MotionImage>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <MotionFormBox
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            component="form"
            noValidate
            autoComplete="off"
          >
            <HeadingText>Connect With Me!</HeadingText>
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
            <Btn title={"Send"} icon={<SendIcon />}></Btn>
          </MotionFormBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
