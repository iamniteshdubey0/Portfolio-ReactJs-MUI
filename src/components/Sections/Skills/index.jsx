import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import GlowCard from "../../MircoElements/GlowCard";
import { skills, metadataSkills } from "../../../data/constants";
import Section from "../../Helper/Section";

const Skills = () => {
  return (
    <Container maxWidth="md">
      <Section
        heading={metadataSkills.section}
        desc={metadataSkills.desc}
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
