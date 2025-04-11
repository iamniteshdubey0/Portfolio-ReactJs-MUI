import React from "react";
import { tokens } from "../../utils/ThemesV2";
import { Box, Grid, styled,Chip } from "@mui/material";
import { CardHeading, CardSpan, CardDescription } from "../Helper/Typo";


const ProCard = styled(Grid)(({ theme }) => ({
  cursor: "pointer",
  width: "90%",
  maxWidth: "250px",
  minHeight: "400px",
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
  objectFit: "cover",
  borderRadius: "8px",
}));

const TechStack = styled(Grid)(({ theme }) => ({
  marginTop: "5px",
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


const ProjectCard = ({data}) => {
  return (
    <ProCard size={4}>
      <CardImage src={data.image}></CardImage>
      <TechStack>
        {data.tags.map((tag, index) => (
          <TechChip
            key={index}
            size="small"
            label={tag}
            variant="outlined"
          ></TechChip>
        ))}
      </TechStack>
      <CardDetails>
        <CardHeading>{data.title}</CardHeading>
        <CardDescription>
          {data.description.slice(0, 100) + "..."}
        </CardDescription>
        <CardSpan>{data.date}</CardSpan>
      </CardDetails>
    </ProCard>
  );
};

export default ProjectCard;
