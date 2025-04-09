import { Box, Link, styled, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../../utils/ThemesV2";

const ButtonIconLink = styled(Link)(({ theme, ...props }) => ({
  zIndex: 11,
  position: "absolute",
  top: props.top || "auto",
  right: props.right || "auto",
  left: props.left || "auto",
  bottom: props.bottom || "auto",
  textDecoration: "none",
  cursor: "pointer",
  textTransform: "capitalize",
  opacity: 0.6,
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).oxfordBlue[400]
      : tokens(theme.palette.mode).whiteSmoke[400],
  "&:hover": {
    color:
      theme.palette.mode === "light"
        ? tokens(theme.palette.mode).secondary[500]
        : tokens(theme.palette.mode).secondary[500],
    opacity: 1,
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  fontSize: "24px",
  border: `1px solid ${tokens(theme.palette.mode).primary[300]}`,
  backgroundColor: "transparent",
  color: tokens(theme.palette.mode).primary[500],
}));

const SpamBox = styled(Box)(({ theme, textPosition }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).oxfordBlue[400]
      : tokens(theme.palette.mode).whiteSmoke[700],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "3px 6px",
  borderRadius: "4px",
  transform:
    textPosition === "left"
      ? `translateX(-20px) translateY(-8px)`
      : `translateX(20px) translateY(-8px)`,
}));

const SpamBoxText = styled(Typography)(({ theme }) => ({
  fontSize: "8px",
  fontWeight: "500",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[400]
      : tokens(theme.palette.mode).oxfordBlue[400],
}));

const FloatingCard = ({
  icon,
  tag,
  link,
  top,
  left,
  right,
  bottom,
  textposition,
}) => {
  return (
    <ButtonIconLink
      to={link || "#"}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
    >
      <IconBox>{icon ? icon : "😪"}</IconBox>
      <SpamBox textposition={textposition}>
        <SpamBoxText>{tag ? tag : "sleeping"}</SpamBoxText>
      </SpamBox>
    </ButtonIconLink>
  );
};

export default FloatingCard;
