import React from "react";
import { tokens } from "../../utils/ThemesV2";
import { Box, Container, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import GlowCard from "../MircoElements/GlowCard";
import { skills, metadataSkills } from "../../data/constants";

const SkillsHeader = styled(Box)(({ theme }) => ({
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  padding: "15px 20px",
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: "26px",
  fontWeight: 700,
  margin: "4px 0px",
  textTransform:'capitalize',
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 600,
  margin: "4px 0px",
  textTransform:'capitalize',
}));

const Description = styled(Typography)(({ theme }) => ({
  textAlign:'center',
  width:'50%',
  textTransform:'capitalize',
  fontSize: "14px",
  fontWeight: 400,
  margin: "4px 0px 20px 0px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[400],
}));

const Skills = () => {
  return (
    <Container maxWidth="md">
      <SkillsHeader>
        <MainHeading>{metadataSkills.section}</MainHeading>
        <Description>{metadataSkills.desc} </Description>
      </SkillsHeader>
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
