import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import GlowCard from "../../MircoElements/GlowCard";
import { skills, sectionData } from "../../../data/constants";
import Section from "../../Helper/Section";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delay between cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const MotionWrapper = motion(Grid);

const Skills = () => {
  return (
    <Container maxWidth="md" id="skills">
      <Section
        heading={sectionData[0].section}
        desc={sectionData[0].desc}
      ></Section>
      <MotionWrapper
        container
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills && skills.length > 0 ? (
          skills.map((item, index) => (
            <Grid
              key={index}
              size={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
              }}
            >
              <GlowCard
                title={item?.title}
                customVariant={cardVariants}
                skills={item?.skills || []}
              />
            </Grid>
          ))
        ) : (
          <p>No skills available</p>
        )}
      </MotionWrapper>
    </Container>
  );
};

export default Skills;
