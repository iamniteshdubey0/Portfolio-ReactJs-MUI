import { tokens } from "../../utils/ThemesV2";
import { Box, Grid, styled, Chip } from "@mui/material";
import { CardHeading, CardSpan, CardDescription } from "../Helper/Typo";
import { motion } from "framer-motion";
import LinkIcon from "@mui/icons-material/Link";

const ProCard = styled(Grid)(({ theme }) => ({
  cursor: "pointer",
  width: "100%",
  // maxWidth: "250px",
  minHeight: "280px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  padding: "10px",
  gap: "15px",
  border: `0.1px solid ${tokens(theme.palette.mode).secondary[500]}`,
  boxShadow: `rgb(251 217 87) 0px 0px 40px -20px`,
  borderRadius: "5px",
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[500]
      : tokens(theme.palette.mode).oxfordBlue[200],
}));

const CardImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "160px",
  objectFit: "cover",
  borderRadius: "8px",
}));

const CardDetails = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "0px",
}));

const CardLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyItems: "self-start",
  alignItems: "center",
  gap: 12,
  marginTop: "12px",
}));

const CardLink = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).whiteSmoke[800]
      : tokens(theme.palette.mode).whiteSmoke[400],
}));

const MotionProCard = motion.create(ProCard);

const CertificatesCard = ({ data }) => {
  return (
    <MotionProCard size={4} whileHover={{ scale: 1.05 }}>
      <CardImage src={data.image}></CardImage>
      <CardDetails>
        <CardHeading>{data.title}</CardHeading>
        <CardDescription>
          {data.description.slice(0, 100) + "..."}
        </CardDescription>
        <CardSpan>{data.date}</CardSpan>
        <CardLinks>
          <CardLink href={data.link} target="_blank">
            <LinkIcon sx={{ fontSize: "24px" }}></LinkIcon>
          </CardLink>
        </CardLinks>
      </CardDetails>
    </MotionProCard>
  );
};

export default CertificatesCard;
