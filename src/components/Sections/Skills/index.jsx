import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import GlowCard from "../../MircoElements/GlowCard";
import { skills, sectionData } from "../../../data/constants";
import Section from "../../Helper/Section";

const Skills = () => {
  return (
    <Container maxWidth="md">
      <Section
        heading={sectionData[0].section}
        desc={sectionData[0].desc}
      ></Section>
      <Grid container>
        {skills && skills.length > 0 ? (
          skills.map((item, index) => (
            <Grid
              key={index}
              size={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
              }}
            >
              <GlowCard title={item?.title} skills={item?.skills || []} />
            </Grid>
          ))
        ) : (
          <p>No skills available</p>
        )}
      </Grid>
    </Container>
  );
};

export default Skills;
