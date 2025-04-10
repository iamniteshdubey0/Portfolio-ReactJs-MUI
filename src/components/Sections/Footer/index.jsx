import React from "react";
import { tokens } from "../../../utils/ThemesV2";
import { Box, Container, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { SectionHeading, Span } from "../../Helper/Typo";

const FooterContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "15px 20px",
}));

const FooterLeft = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
}));

const FooterRight = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const FooterHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const FooterLinkGroup = styled(Grid)(({ theme }) => ({
  marginTop: "5px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "100%",
}));

const Footer = () => {
  return (
    <Container maxWidth="md" sx={{ p: 2 }}>
      <FooterContainer container>
        <FooterLeft size={6}>
          <FooterHeader>
            <SectionHeading>portfolio</SectionHeading>
          </FooterHeader>
          <FooterLinkGroup container>
            <Grid size={5}>
              About
              <Span>Link1</Span>
              <Span>Link1</Span>
              <Span>Link1</Span>
              <Span>Link1</Span>
            </Grid>
            <Grid size={5}>
              Projects
              <Span>Link1</Span>
              <Span>Link1</Span>
              <Span>Link1</Span>
              <Span>Link1</Span>
            </Grid>
          </FooterLinkGroup>
        </FooterLeft>
        <FooterRight size={6}></FooterRight>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
