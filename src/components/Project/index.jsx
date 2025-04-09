import React from "react";
import { tokens } from "../../utils/ThemesV2";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box, Grid, Container, styled, Typography, Chip } from "@mui/material";
import { projects } from "../../data/constants";

const SectionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "15px 20px",
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  fontSize: "26px",
  fontWeight: 700,
  margin: "4px 0px",
  textTransform: "capitalize",
}));

const SectionDescription = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  width: "50%",
  textTransform: "capitalize",
  fontSize: "14px",
  fontWeight: 400,
  margin: "4px 0px 20px 0px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[400],
}));

const ToggleTab = styled(ToggleButton)(({ theme }) => ({
  padding: "10px 15px",
  fontSize: "14px",
  border: `0.1px solid ${tokens(theme.palette.mode).error[500]}`,
  color: tokens(theme.palette.mode).error[500],
  backgroundColor: "transparent",
  opacity: 0.7,

  "&:hover": {
    boxShadow: `rgb(248 102 36 / 50%) 0px 0px 40px -20px`,
    backgroundColor: tokens(theme.palette.mode).error[100],
    opacity: 0.9,
  },

  "&:active": {
    boxShadow: `rgb(248 102 36 / 50%) 0px 0px 40px -20px`,
    backgroundColor: tokens(theme.palette.mode).error[100],
    opacity: 1,
  },
}));

const ProjectWrapper = styled(Grid)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexWrap: "wrap",
  gap: "20px",
  marginTop: "32px",
}));

const ProjectCard = styled(Grid)(({ theme }) => ({
  cursor: "pointer",
  width: "90%",
  maxWidth: "250px",
  minHeight: "320px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  padding: "10px",
  gap: "15px",
  border: `0.1px solid ${tokens(theme.palette.mode).secondary[500]}`,
  boxShadow: `rgb(251 217 87) 0px 0px 40px -20px`,
  borderRadius: "5px",
  transition: "all 0.3s linear",
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[500]
      : tokens(theme.palette.mode).oxfordBlue[200],
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const CardImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "160px",
  objectFit: "contain",
  borderRadius: "10px",
}));

const TechStack = styled(Grid)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexWrap: "wrap",
  gap: "5px",
}));

const CardDetails = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "0px",
}));

const TechChip = styled(Chip)(({ theme }) => ({
  borderRadius: "4px",
  border: `0.1px solid ${tokens(theme.palette.mode).secondary[500]}`,
  padding: "2px 4px",
}));

const CardHeading = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  marginBottom: "1px",
  fontWeight: 600,
  textTransform: "capitalize",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[400],
}));

const Span = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  fontWeight: 500,
  textTransform: "capitalize",
  marginBottom: "1px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[700]
      : tokens(theme.palette.mode).whiteSmoke[200],
}));

const CardDescription = styled(Typography)(({ theme }) => ({
  textTransform: "capitalize",
  fontSize: "12px",
  fontWeight: 400,
  margin: "1px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[400],
}));

const Project = () => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Container maxWidth="md" sx={{ mt: 8, p: 2, mb: 3 }}>
      <SectionHeader>
        <SectionHeading>Projects</SectionHeading>
        <SectionDescription>My projects</SectionDescription>
      </SectionHeader>
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
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleTab value="left" aria-label="left aligned">
            one
          </ToggleTab>
          <ToggleTab value="center" aria-label="centered">
            three
          </ToggleTab>
          <ToggleTab value="right" aria-label="right aligned">
            three
          </ToggleTab>
        </ToggleButtonGroup>
        <ProjectWrapper conatiner>
          {projects && projects.length > 0
            ? projects.map((item, index) => (
                <ProjectCard size={4} key={index}>
                  <CardImage src={item.image}></CardImage>
                  <TechStack>
                    <TechChip
                      size="small"
                      label="React"
                      variant="outlined"
                    ></TechChip>
                    <TechChip
                      size="small"
                      label="React"
                      variant="outlined"
                    ></TechChip>
                    <TechChip
                      size="small"
                      label="React"
                      variant="outlined"
                    ></TechChip>
                    <TechChip
                      size="small"
                      label="React"
                      variant="outlined"
                    ></TechChip>
                    <TechChip
                      size="small"
                      label="React"
                      variant="outlined"
                    ></TechChip>
                    <TechChip
                      size="small"
                      label="React"
                      variant="outlined"
                    ></TechChip>
                  </TechStack>
                  <CardDetails>
                    <CardHeading>{item.title}</CardHeading>
                    <CardDescription>
                      {item.description.slice(0, 100) + "..."}
                    </CardDescription>
                    <Span>{item.date}</Span>
                  </CardDetails>
                </ProjectCard>
              ))
            : "no projects"}
        </ProjectWrapper>
      </Box>
    </Container>
  );
};

export default Project;
