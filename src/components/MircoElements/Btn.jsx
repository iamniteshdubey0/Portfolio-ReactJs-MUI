import React from "react";
import { Button, styled } from "@mui/material";
import { motion } from "framer-motion";

const Btn = ({ title, href, icon }) => {

  const CustomButton = styled("a")(({ theme }) => ({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:"12px",
    textDecoration:"none",
    padding: "10px 15px",
    backgroundImage: `linear-gradient(to right, #FF512F 0%, #F09819  51%, #FF512F  100%)`,
    transition: "0.5s",
    backgroundSize: `200% auto`,
    color: " #fff",
    borderRadius:"8px",
    textTransform:"uppercase",

    "&:hover": {
      backgroundPosition: `right center`,
      color: " #fff",
      textDecoration: "none",
    },
  }));

  const MotionCustomButton = motion.create(CustomButton);
  return (
    <MotionCustomButton
      whileTap={{ scale: 0.85 }}
      href={href}
      variant="outlined"
      target="_blank"
    >
      {title}
      {icon}
    </MotionCustomButton>
  );
};

export default Btn;
