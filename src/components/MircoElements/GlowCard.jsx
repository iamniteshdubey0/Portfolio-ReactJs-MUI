import { Box, Link, styled, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../../utils/ThemesV2";

const CardContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "220px",
  border: `1px solid ${tokens(theme.palette.mode).secondary[500]}`,
  textAlign: "center",
  padding: "10px",
  borderRadius: "8px",
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[100]
      : tokens(theme.palette.mode).oxfordBlue[300],
  boxShadow: `rgb(251 217 87) 0px 0px 40px -28px;`,
  //   rgb(251 217 87) yellow shadow
  //   rgb(248 102 36) red shadow
}));

const CardHeading = styled(Typography)(({ theme }) => ({
  fontSize: "19px",
  fontWeight: 600,
  margin: "4px 0px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[700]
      : tokens(theme.palette.mode).whiteSmoke[300],
}));

const CardBody = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  flexWrap: "wrap",
  padding: "20px",
  gap: "12px",
}));

const MiniCard = styled(Box)(({ theme }) => ({
  border:
    theme.palette.mode === "light"
      ? `1px solid ${tokens(theme.palette.mode).whiteSmoke[600]}`
      : `1px solid ${tokens(theme.palette.mode).whiteSmoke[300]}`,
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[400],
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "6px 12px",
  gap: "10px",
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 400,
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[400],
}));

const SkillsImage = styled("img")(({ theme }) => ({
  width: "20px",
  height: "20px",
  backgroundSize: "cover",
}));

const GlowCard = ({ title, skills }) => {
  return (
    <CardContainer>
      <CardHeading>{title}</CardHeading>
      <CardBody>
        {skills && skills.length > 0 ? (
          skills.map((skill, index) => (
            <MiniCard key={index}>
              <SkillsImage src={skill.image} />

              <SubTitle>{skill.name}</SubTitle>
            </MiniCard>
          ))
        ) : (
          <p>No skills available</p>
        )}
      </CardBody>
    </CardContainer>
  );
};

export default GlowCard;
