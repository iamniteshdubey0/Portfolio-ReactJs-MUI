import React, { useState } from "react";
import ToggleTab from "../../MircoElements/ToggleTab";
import { Box, Grid, Container, styled } from "@mui/material";
import { projects, sectionData } from "../../../data/constants";
import Section from "../../Helper/Section";
import ProjectCard from "../../MircoElements/ProjectCard";
import Masonry from "@mui/lab/Masonry";

const ProjectWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "20px",
  marginTop: "32px",
}));

const Certificates = () => {
  return (
    <Container id="certificates" maxWidth="lg" sx={{ mt: 8, p: 2, mb: 3 }}>
      <Section
        heading={sectionData[4].section}
        desc={sectionData[4].desc}
      ></Section>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        {/* <Masonry columns={3} spacing={2}> */}
        <ProjectWrapper container>
          {projects && projects.length > 0
            ? projects.map((item) => (
                <Grid size={{ xs: 12, sm: 5.5, md: 3.5 }} key={item.id}>
                  <ProjectCard data={item}></ProjectCard>
                </Grid>
              ))
            : "no certificates"}
        </ProjectWrapper>
        {/* </Masonry> */}
      </Box>
    </Container>
  );
};

export default Certificates;
