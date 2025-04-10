import React from "react";
import { tokens } from "../../../utils/ThemesV2";
import { Box, Container, styled, Typography } from "@mui/material";
import { metadataExp, experiences } from "../../../data/constants";
import Grid from "@mui/material/Grid";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { timelineItemClasses } from "@mui/lab";
import Section from "../../Helper/Section";

const Document = styled("img")(({ theme }) => ({
  width: "70px",
  height: "70px",
  borderRadius: "10px",
  display: "none",
  transition: "all 0.3s linear",
}));

const SkillsHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "15px 20px",
}));


const TimelineBoxHeading = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  marginBottom: "4px",
  fontWeight: 600,
  textTransform: "capitalize",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[400],
}));

const TimelineBoxPara = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 500,
  marginBottom: "4px",
  textTransform: "capitalize",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[400],
}));

const Span = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 500,
  textTransform: "capitalize",
  marginBottom: "4px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[700]
      : tokens(theme.palette.mode).whiteSmoke[200],
}));

const TimelineBoxDescription = styled(Typography)(({ theme }) => ({
  textTransform: "capitalize",
  fontSize: "14px",
  fontWeight: 400,
  margin: "4px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[400],
}));

const SkillText = styled(Typography)(({ theme }) => ({
  textTransform: "capitalize",
  fontSize: "12px",
  fontWeight: 400,
  margin: "4px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[300],
}));


const TimelineBox = styled(Box)(({ theme }) => ({
  minHeight: "120px",
  cursor: "pointer",
  width: "100%",
  border: `0.1px solid ${tokens(theme.palette.mode).primary[500]}`,
  borderRadius: "8px",
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[100]
      : tokens(theme.palette.mode).oxfordBlue[300],

  marginBottom: "16px",
  transition: "all 0.3s linear",
  "&:hover": {
    boxShadow: `rgb(248 102 36) 0px 0px 40px -20px`,
    transform: "translateY(-5px)",

    "& .document-img": {
      // Use a class instead
      display: "flex",
    },
  },
}));

const TimelineBoxHeader = styled(Box)(({ theme }) => ({
  padding: "15px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "10px",
}));

const TimelineBoxBody = styled(Box)(({ theme }) => ({
  marginTop: "-24px",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  transition: "all 0.3s linear",
}));

const HeaderIcon = styled(Box)(({ theme }) => ({
  width: "8%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
}));

const Image = styled("img")(({ theme }) => ({
  width: "60px",
  height: "60px",
  borderRadius: "10px",
}));

const HeaderDetails = styled(Box)(({ theme }) => ({
  width: "92%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
}));

const SkillsStack = styled(Grid)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "3px",
}));

const SkillsStackInner = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "5px",
}));

const Experience = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, p: 2 }}>
      <SkillsHeader>
      <Section heading={metadataExp.section} desc={metadataExp.desc}></Section>
      </SkillsHeader>
      <Grid container>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {experiences && experiences.length > 0
            ? experiences.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={(theme) => ({
                        bgcolor: tokens(theme.palette.mode).primary[500],
                      })}
                    />
                    <TimelineConnector
                      sx={(theme) => ({
                        bgcolor: tokens(theme.palette.mode).primary[500],
                      })}
                    />
                  </TimelineSeparator>
                  <TimelineContent>
                    <TimelineBox>
                      <TimelineBoxHeader>
                        <HeaderIcon>
                          <Image src={item.img}></Image>
                        </HeaderIcon>
                        <HeaderDetails>
                          <TimelineBoxHeading>
                            {item.company}
                          </TimelineBoxHeading>
                          <TimelineBoxPara>{item.role}</TimelineBoxPara>
                          <Span>{item.date}</Span>
                        </HeaderDetails>
                      </TimelineBoxHeader>
                      <TimelineBoxBody>
                        <TimelineBoxDescription>
                          {item.desc}
                        </TimelineBoxDescription>
                        <SkillsStack container>
                          <SkillsStackInner size={1}>
                            <TimelineBoxDescription sx={{ fontWeight: 600 }}>
                              skills:
                            </TimelineBoxDescription>
                          </SkillsStackInner>
                          <SkillsStackInner size={10}>
                            {item.skills.map((skill, index) => (
                              <SkillText key={index}>
                                {"•"} {skill}
                              </SkillText>
                            ))}
                          </SkillsStackInner>
                        </SkillsStack>
                        <SkillsStack>
                          <Document
                            className="document-img"
                            src={item.doc}
                          ></Document>
                        </SkillsStack>
                      </TimelineBoxBody>
                    </TimelineBox>
                  </TimelineContent>
                </TimelineItem>
              ))
            : "No experemce"}
        </Timeline>
      </Grid>
    </Container>
  );
};

export default Experience;
