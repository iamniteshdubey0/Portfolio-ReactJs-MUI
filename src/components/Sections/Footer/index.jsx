import React from "react";
import { tokens } from "../../../utils/ThemesV2";
import { Box, Container, styled, Grid, Button } from "@mui/material";
import { SectionHeading, Span, ParaText } from "../../Helper/Typo";
import { Link } from "@mui/material";
import Btn from "../../MircoElements/Btn";
import { Bio } from "../../../data/constants";

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
  alignItems: "flex-end",
  justifyContent: "center",
  gap: "10px",
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

const FooterLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  cursor: "pointer",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).oxfordBlue[700]
      : tokens(theme.palette.mode).whiteSmoke[500],
  textTransform: "capitalize",
}));

const Footer = () => {
  return (
    <Container maxWidth="md" sx={{ p: 2 }}>
      <FooterContainer container>
        <FooterLeft size={6}>
          <FooterHeader>
            <SectionHeading>⭐ portfolio</SectionHeading>
          </FooterHeader>
          <FooterLinkGroup container>
            <Grid size={5}>
              <ParaText bold="true" mt={2}>
                About
              </ParaText>
              {/* Link not working */}
              <FooterLink to={"#contact"}>
                <Span mt={1}>{">"} Eductaion</Span>
              </FooterLink>
              <FooterLink>
                <Span mt={1}>{">"} Projects</Span>
              </FooterLink>
              <FooterLink>
                <Span mt={1}>{">"} Experiences</Span>
              </FooterLink>
              <FooterLink>
                <Span mt={1}>{">"} Certificates</Span>
              </FooterLink>
            </Grid>
            <Grid size={5}>
              <ParaText bold="true" mt={2}>
                Projects
              </ParaText>
              <FooterLink>
                <Span mt={1}>{">"} Eductaion</Span>
              </FooterLink>
              <FooterLink>
                <Span mt={1}>{">"} Projects</Span>
              </FooterLink>
              <FooterLink>
                <Span mt={1}>{">"} Experiences</Span>
              </FooterLink>
              <FooterLink>
                <Span mt={1}>{">"} Certificates</Span>
              </FooterLink>
            </Grid>
          </FooterLinkGroup>
        </FooterLeft>
        <FooterRight size={6}>
          {Bio.social.map((item, index) => (
            <Button color="secondary" variant="contained" key={index} endIcon={item.card.icon}>
              {item.platform}
            </Button>
          ))}
        </FooterRight>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
