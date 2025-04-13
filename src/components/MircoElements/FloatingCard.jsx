import { Box, Link, styled, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../../utils/ThemesV2";
import { motion } from "framer-motion";

const ButtonIconLink = styled("a")(({ theme, ...props }) => ({
  zIndex: 11,
  position: "absolute",
  top: props.top || "auto",
  right: props.right || "auto",
  left: props.left || "auto",
  bottom: props.bottom || "auto",
  textDecoration: "none",
  cursor: "pointer",
  textTransform: "capitalize",
  opacity: 0.8,
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
  border: `1px solid ${tokens(theme.palette.mode).teal[500]}`,
  backgroundColor: "transparent",
  color: tokens(theme.palette.mode).teal[500],
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
  transform: `translateX(20px) translateY(-8px)`,
}));

const SpamBoxText = styled(Typography)(({ theme }) => ({
  fontSize: "8px",
  fontWeight: "500",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[400]
      : tokens(theme.palette.mode).oxfordBlue[400],
}));

const MotionButtonIconLink = motion(ButtonIconLink);

const FloatingCard = ({ icon, tag, link, top, left, right, bottom }) => {
  return (
    <MotionButtonIconLink
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      animate={{
        rotate: [0, -5, 5, -5, 5, 0], // Wiggle sequence
      }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      <IconBox>{icon ? icon : "😪"}</IconBox>
      <SpamBox>
        <SpamBoxText>{tag ? tag : "sleeping"}</SpamBoxText>
      </SpamBox>
    </MotionButtonIconLink>
  );
};

export default FloatingCard;
