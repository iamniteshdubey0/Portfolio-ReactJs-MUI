import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ToggleTab = ({ selectedCategory, handleChange, projects }) => {
  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];

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

  return (
    <ToggleButtonGroup
      size="large"
      value={selectedCategory}
      exclusive
      onChange={handleChange}
      aria-label="Project Category"
    >
      {categories.map((category) => (
        <ToggleButton key={category} value={category} aria-label={category}>
          {category}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ToggleTab;
