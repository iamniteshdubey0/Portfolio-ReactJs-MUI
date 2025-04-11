import React from "react";
import { tokens } from "../../utils/ThemesV2";
import { Box, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { timelineItemClasses } from "@mui/lab";
import { HeadingText, ParaText, Span, SkillText } from "../Helper/Typo";

const Document = styled("img")(({}) => ({
  width: "70px",
  height: "70px",
  borderRadius: "10px",
  display: "none",
  transition: "all 0.3s linear",
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

const TimelineBoxHeader = styled(Box)(({}) => ({
  padding: "15px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "10px",
}));

const TimelineBoxBody = styled(Box)(({}) => ({
  marginTop: "-24px",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  transition: "all 0.3s linear",
}));

const HeaderIcon = styled(Box)(({ type }) => ({
  width: type === "education" ? "16%" : "8%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
}));

const Image = styled("img")(({}) => ({
  width: "60px",
  height: "60px",
  borderRadius: "10px",
}));

const HeaderDetails = styled(Box)(({ type }) => ({
  width: type === "education" ? "84%" : "92%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
}));

const SkillsStack = styled(Grid)(({}) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "3px",
}));

const SkillsStackInner = styled(Grid)(({}) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "5px",
}));

const TimeLineBox = ({ data, alignTimeLine, outlined, type }) => {
  const timelineProps =
    alignTimeLine === "alternate"
      ? { position: "alternate" }
      : {
          sx: {
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          },
        };

  const timeDotProps = outlined
    ? {
        variant: "outlined",
        sx: (theme) => ({
          color: tokens(theme.palette.mode).primary[500],
        }),
      }
    : {
        sx: (theme) => ({
          bgcolor: tokens(theme.palette.mode).primary[500],
        }),
      };

  return (
    <Timeline {...timelineProps}>
      {data && data.length > 0
        ? data.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot {...timeDotProps} />
                <TimelineConnector
                  sx={(theme) => ({
                    bgcolor: tokens(theme.palette.mode).primary[500],
                  })}
                />
              </TimelineSeparator>
              <TimelineContent>
                <TimelineBox>
                  <TimelineBoxHeader>
                    <HeaderIcon type={type}>
                      <Image src={item.img}></Image>
                    </HeaderIcon>
                    <HeaderDetails type={type}>
                      <HeadingText bold={"true"}>
                        {type === "education" ? item.school : item.company}
                      </HeadingText>
                      <ParaText bold={"true"}>
                        {type === "education" ? item.degree : item.role}
                      </ParaText>
                      <Span>{item.date}</Span>
                    </HeaderDetails>
                  </TimelineBoxHeader>
                  <TimelineBoxBody>
                    <ParaText sx={{ mb: 1 }}>{item.desc}</ParaText>
                    <SkillsStack container>
                      <SkillsStackInner size={type === "education"? 2 : 1}>
                        <ParaText sx={{ fontWeight: 600 }}>
                          {item.skills ? "Skills:" : "Grade:"}
                        </ParaText>
                      </SkillsStackInner>
                      <SkillsStackInner size={type === "education"? 9 : 10}>
                        {item.skills ? (
                          item.skills.map((skill, index) => (
                            <SkillText key={index}>
                              {"•"} {skill}
                            </SkillText>
                          ))
                        ) : (
                          <SkillText>{item.grade}</SkillText>
                        )}
                      </SkillsStackInner>
                    </SkillsStack>
                    <SkillsStack>
                      {item.doc ? (
                        <Document
                          className="document-img"
                          src={item.doc}
                        ></Document>
                      ) : (
                        ""
                      )}
                    </SkillsStack>
                  </TimelineBoxBody>
                </TimelineBox>
              </TimelineContent>
            </TimelineItem>
          ))
        : "No experemce"}
    </Timeline>
  );
};

export default TimeLineBox;
