import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ToggleTab = ({}) => {
  return (
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
      <ToggleButton value="machine learning" aria-label="Mobile Development">
        Mobile
      </ToggleButton>
      <ToggleButton value="android app" aria-label="UI/UX Design">
        Design
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleTab;
