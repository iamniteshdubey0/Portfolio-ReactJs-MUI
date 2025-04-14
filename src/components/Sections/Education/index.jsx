import React from "react";
import { Container } from "@mui/material";
import { education, sectionData } from "../../../data/constants";
import Grid from "@mui/material/Grid";
import Section from "../../Helper/Section";
import TimeLineBox from "../../MircoElements/TimeLineBox";
import { useTheme, useMediaQuery } from "@mui/material";

const Education = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container id="education" maxWidth="md" sx={{ mt: 8, p: 2 }}>
      <Section
        heading={sectionData[3].section}
        desc={sectionData[3].desc}
      ></Section>
      <Grid container>
        <TimeLineBox
          type={"education"}
          data={education}
          alignTimeLine={isXs ? "" : "alternate"}
        ></TimeLineBox>
      </Grid>
    </Container>
  );
};

export default Education;
