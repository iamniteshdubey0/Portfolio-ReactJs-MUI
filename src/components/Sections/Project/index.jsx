import React, { useState } from "react";
import { tokens } from "../../../utils/ThemesV2";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box, Grid, Container, styled} from "@mui/material";
import { projects, sectionData } from "../../../data/constants";
import Section from "../../Helper/Section";
import ProjectCard from "../../MircoElements/ProjectCard";

// const ToggleTab = styled(ToggleButton)(({ theme }) => ({
//   padding: "10px 15px",
//   fontSize: "14px",
//   border: `0.1px solid ${tokens(theme.palette.mode).error[500]}`,
//   color: tokens(theme.palette.mode).error[500],
//   backgroundColor: "transparent",
//   opacity: 0.7,

//   "&:hover": {
//     boxShadow: `rgb(248 102 36 / 50%) 0px 0px 40px -20px`,
//     backgroundColor: tokens(theme.palette.mode).error[100],
//     opacity: 0.9,
//   },

//   "&:active": {
//     boxShadow: `rgb(248 102 36 / 50%) 0px 0px 40px -20px`,
//     backgroundColor: tokens(theme.palette.mode).error[100],
//     opacity: 1,
//   },
// }));

const ProjectWrapper = styled(Grid)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
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
    <Container maxWidth="lg" sx={{ mt: 8, p: 2, mb: 3 }}>
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
        <ToggleButtonGroup
          size="large"
          value={selectedCategory}
          exclusive
          onChange={handleChange}
          aria-label="Project Category"
        >
          <ToggleButton value="all" aria-label="All">
            All
          </ToggleButton>
          <ToggleButton value="web app" aria-label="Web Development">
            Web
          </ToggleButton>
          <ToggleButton
            value="machine learning"
            aria-label="Mobile Development"
          >
            Mobile
          </ToggleButton>
          <ToggleButton value="android app" aria-label="UI/UX Design">
            Design
          </ToggleButton>
        </ToggleButtonGroup>
        <ProjectWrapper container>
          {filteredProjects && filteredProjects.length > 0
            ? filteredProjects.map((item) => (
                <ProjectCard key={item.id} data={item}></ProjectCard>
              ))
            : "no projects"}
        </ProjectWrapper>
      </Box>
    </Container>
  );
};

export default Project;
