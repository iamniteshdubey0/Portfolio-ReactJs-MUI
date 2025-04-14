import React from "react";
import { tokens } from "../../../utils/ThemesV2";
import { Box, Container, styled, Grid, Button } from "@mui/material";
import { SectionHeading, Span, ParaText } from "../../Helper/Typo";
import { FooterLinks, FooterSocial } from "../../../data/uiConstants";

const FooterContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "15px 20px",
  gap:'10px'
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

const FooterLink = styled("a")(({ theme }) => ({
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
        <FooterLeft size={{xs:12, md:5.5}}>
          <FooterHeader>
            <SectionHeading>⭐ portfolio</SectionHeading>
          </FooterHeader>
          <FooterLinkGroup container>
            {FooterLinks.map((item, index) => (
              <Grid size={5} key={index}>
                <ParaText bold="true" mt={2}>
                  {item.label}
                </ParaText>
                {item.link.map((item, index) => (
                  <FooterLink href={item.hyperLink} key={index}>
                    <Span mt={0.5}>{">"} {item.linkLabel}</Span>
                  </FooterLink>
                ))}
              </Grid>
            ))}
          </FooterLinkGroup>
        </FooterLeft>
        <FooterRight size={{xs:12, md:5.5}}>
          {FooterSocial.map((item, index) => (
            <Button
              target="_blank"
              href={item.link}
              color="secondary"
              variant="contained"
              key={index}
              endIcon={item.icon}
            >
              {item.platform}
            </Button>
          ))}
        </FooterRight>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
