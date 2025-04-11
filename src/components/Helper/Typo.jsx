import { tokens } from "../../utils/ThemesV2";
import { styled, Typography } from "@mui/material";

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

const HeadingText = styled(Typography)(({ theme, bold }) => ({
  marginBottom: "2px",
  textTransform: "capitalize",
  fontSize: "16px",
  fontWeight: bold ? "600" : "400",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[300],
}));

const ParaText = styled(Typography)(({ theme, bold }) => ({
  textTransform: "capitalize",
  textAlign: "left",
  fontSize: "14px",
  fontWeight: bold ? "500" : "400",
  marginBottom: "2px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[400],
}));

// Section Headng Components

const SectionHeading = styled(Typography)(({ theme }) => ({
  fontSize: "26px",
  fontWeight: 700,
  margin: "4px 0px",
  textTransform: "capitalize",
}));

const SectionDescription = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  width: "60%",
  textTransform: "capitalize",
  fontSize: "14px",
  fontWeight: 400,
  margin: "4px 0px 20px 0px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[400],
}));

// ==========================================================

// Form Headng Components
// const FormHeading = styled(Typography)(({ theme }) => ({
//   textTransform: "capitalize",
//   fontSize: "16px",
//   fontWeight: 400,
//   margin: "4px",
//   color:
//     theme.palette.mode === "light"
//       ? tokens(theme.palette.mode).whiteSmoke[800]
//       : tokens(theme.palette.mode).whiteSmoke[300],
// }));

// ==========================================================

// TimeLine Typograph Components
// const TimelineBoxHeading = styled(Typography)(({ theme }) => ({
//   fontSize: "16px",
//   marginBottom: "4px",
//   fontWeight: 600,
//   textTransform: "capitalize",
//   color:
//     theme.palette.mode === "light"
//       ? tokens(theme.palette.mode).whiteSmoke[800]
//       : tokens(theme.palette.mode).whiteSmoke[400],
// }));

// const TimelineBoxPara = styled(Typography)(({ theme }) => ({
//   fontSize: "14px",
//   fontWeight: 500,
//   marginBottom: "4px",
//   textTransform: "capitalize",
//   color:
//     theme.palette.mode === "light"
//       ? tokens(theme.palette.mode).whiteSmoke[800]
//       : tokens(theme.palette.mode).whiteSmoke[400],
// }));

// const TimelineBoxDescription = styled(Typography)(({ theme }) => ({
//   textTransform: "capitalize",
//   textAlign: "left",
//   fontSize: "14px",
//   fontWeight: 400,
//   margin: "4px",
//   color:
//     theme.palette.mode === "light"
//       ? tokens(theme.palette.mode).whiteSmoke[800]
//       : tokens(theme.palette.mode).whiteSmoke[400],
// }));

const SkillText = styled(Typography)(({ theme }) => ({
  margin: "auto 0px",
  textTransform: "capitalize",
  fontSize: "12px",
  fontWeight: 400,
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[300],
}));

// ==========================================================

// Form Hero Components

const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: 700,
  margin: "4px 0px",
}));

const SubHeading = styled("span")(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 600,
  margin: "4px 0px",
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  gap: "5px",
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
  margin: "4px 0px 20px 0px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[400],
}));

const SpanHero = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main, // Use MUI theme's primary color
  cursor: "pointer",
}));

// ==========================================================

// Navbar Components

const NavText = styled(Typography)(({ theme }) => ({
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).oxfordBlue[700]
      : tokens(theme.palette.mode).whiteSmoke[500],
  textTransform: "capitalize",
  cursor: "pointer",
  display: "inline",
}));

// ==========================================================

// Project Components

const CardHeading = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  marginBottom: "1px",
  fontWeight: 600,
  textTransform: "capitalize",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[400],
}));

const CardSpan = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  fontWeight: 500,
  textTransform: "capitalize",
  margin: "4px 0px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[700]
      : tokens(theme.palette.mode).whiteSmoke[200],
}));

const CardDescription = styled(Typography)(({ theme }) => ({
  textTransform: "capitalize",
  fontSize: "12px",
  fontWeight: 400,
  margin: "1px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[400],
}));
// ==========================================================

// Form Headng Components
// ==========================================================

// Form Headng Components
// ==========================================================

// Form Headng Components
// ==========================================================

// Form Headng Components
// ==========================================================

export {
  Span,
  HeadingText,
  ParaText,
  SectionHeading,
  SectionDescription,
  SkillText,
  MainHeading,
  SubHeading,
  Description,
  SpanHero,
  NavText,
  CardHeading,
  CardSpan,
  CardDescription,
};
