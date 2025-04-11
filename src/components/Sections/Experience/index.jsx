import React from "react";
import { tokens } from "../../../utils/ThemesV2";
import { Box, Container, styled, Typography } from "@mui/material";
import { metadataExp, experiences } from "../../../data/constants";
import Grid from "@mui/material/Grid";

import Section from "../../Helper/Section";
import TimeLineBox from "../../MircoElements/TimeLineBox";


const SkillsHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "15px 20px",
}));


const Experience = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, p: 2 }}>
      <SkillsHeader>
      <Section heading={metadataExp.section} desc={metadataExp.desc}></Section>
      </SkillsHeader>
      <Grid container>
        <TimeLineBox data={experiences}></TimeLineBox>
      </Grid>
    </Container>
  );
};

export default Experience;
