import React, { useState } from "react";
import ToggleTab from "../../MircoElements/ToggleTab";
import { Box, Grid, Container, styled } from "@mui/material";
import { projects, sectionData } from "../../../data/constants";
import Section from "../../Helper/Section";
import ProjectCard from "../../MircoElements/ProjectCard";

const ProjectWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "20px",
  marginTop: "32px",
}));

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "all" || project.category === selectedCategory
  );

  return (
    <Container id="projects" maxWidth="lg" sx={{ mt: 8, p: 2, mb: 3 }}>
      <Section
        heading={sectionData[2].section}
        desc={sectionData[2].desc}
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
        <ToggleTab
          selectedCategory={selectedCategory}
          handleChange={handleChange}
          projects={projects}
        />
        <ProjectWrapper container>
          {filteredProjects && filteredProjects.length > 0
            ? filteredProjects.map((item) => (
                <Grid size={{ xs: 12, sm: 5.5, md: 3.5 }} key={item.id}>
                  <ProjectCard data={item}></ProjectCard>
                </Grid>
              ))
            : "no projects"}
        </ProjectWrapper>
      </Box>
    </Container>
  );
};

export default Project;
