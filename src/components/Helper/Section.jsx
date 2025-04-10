import React from "react";
import { Box, styled } from "@mui/material";
import { SectionHeading, SectionDescription } from "./Typo";

const SectionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "15px 20px",
}));

const Section = ({ heading, desc }) => {
  return (
    <SectionHeader>
      <SectionHeading>{heading}</SectionHeading>
      <SectionDescription>{desc}</SectionDescription>
    </SectionHeader>
  );
};

export default Section;
