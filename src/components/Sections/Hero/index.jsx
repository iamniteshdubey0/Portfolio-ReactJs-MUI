import React from "react";
import { Container, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import { tokens } from "../../../utils/ThemesV2";
import Btn from "../../MircoElements/Btn";
import ArticleIcon from "@mui/icons-material/Article";
import { Bio } from "../../../data/constants";
import Avatar from "@mui/material/Avatar";
import Profile from "../../../assets/image/NiteshDubey.png";
import FloatingCard from "../../MircoElements/FloatingCard";
import Typewriter from "typewriter-effect";
import {
  SpanHero,
  MainHeading,
  SubHeading,
  Description,
} from "../../Helper/Typo";

const Hero = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const HeroBox = styled(Grid)(({ theme }) => ({
    overflowY: "hidden",
    height: "80vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      theme.palette.mode == "light"
        ? colors.whiteSmoke[100]
        : colors.oxfordBlue[300],
  }));

  const MiniBox = styled(Grid)(({ theme }) => ({
    zIndex: 10,
    height: "300px",
    width: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: "#000000",
    backgroundImage: `url(
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Cellipse fill='none' stroke-width='200' id='a' rx='600' ry='450'/%3E%3C/defs%3E%3Cg style='transform-origin:center'%3E%3Cg transform='rotate(95.4 0 0)' style='transform-origin:center'%3E%3Cg transform='rotate(-139.2 0 0)' style='transform-origin:center'%3E%3Cg transform='translate(1000 750)'%3E%3Cuse stroke='%2327002B' href='%23a' transform='rotate(-52.2 0 0) scale(0.478)'/%3E%3Cuse stroke='%23340331' href='%23a' transform='rotate(-43.5 0 0) scale(0.565)'/%3E%3Cuse stroke='%23420436' href='%23a' transform='rotate(-34.8 0 0) scale(0.652)'/%3E%3Cuse stroke='%2351063b' href='%23a' transform='rotate(-26.1 0 0) scale(0.739)'/%3E%3Cuse stroke='%235f093f' href='%23a' transform='rotate(-17.4 0 0) scale(0.826)'/%3E%3Cuse stroke='%236e0d42' href='%23a' transform='rotate(-8.7 0 0) scale(0.913)'/%3E%3Cuse stroke='%237c1244' href='%23a'/%3E%3Cuse stroke='%238b1945' href='%23a' transform='rotate(8.7 0 0) scale(1.087)'/%3E%3Cuse stroke='%23992045' href='%23a' transform='rotate(17.4 0 0) scale(1.174)'/%3E%3Cuse stroke='%23a62945' href='%23a' transform='rotate(26.1 0 0) scale(1.261)'/%3E%3Cuse stroke='%23b33244' href='%23a' transform='rotate(34.8 0 0) scale(1.348)'/%3E%3Cuse stroke='%23c03c42' href='%23a' transform='rotate(43.5 0 0) scale(1.435)'/%3E%3Cuse stroke='%23cb4740' href='%23a' transform='rotate(52.2 0 0) scale(1.522)'/%3E%3Cuse stroke='%23d5523c' href='%23a' transform='rotate(60.9 0 0) scale(1.609)'/%3E%3Cuse stroke='%23df5f39' href='%23a' transform='rotate(69.6 0 0) scale(1.696)'/%3E%3Cuse stroke='%23e76b34' href='%23a' transform='rotate(78.3 0 0) scale(1.783)'/%3E%3Cuse stroke='%23ef792f' href='%23a' transform='rotate(87 0 0) scale(1.87)'/%3E%3Cuse stroke='%23f58729' href='%23a' transform='rotate(95.7 0 0) scale(1.957)'/%3E%3Cuse stroke='%23fa9522' href='%23a' transform='rotate(104.4 0 0) scale(2.044)'/%3E%3Cuse stroke='%23fda31a' href='%23a' transform='rotate(113.1 0 0) scale(2.131)'/%3E%3Cuse stroke='%23ffb210' href='%23a' transform='rotate(121.8 0 0) scale(2.218)'/%3E%3Cuse stroke='%23ffc106' href='%23a' transform='rotate(130.5 0 0) scale(2.305)'/%3E%3Cuse stroke='%23FFD000' href='%23a' transform='rotate(139.2 0 0) scale(2.392)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
    )`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  }));

  const HeroBoxDetails = styled(Grid)(({ theme }) => ({
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
  }));

  const HeroBoxImg = styled(Grid)(({ theme }) => ({
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  // ======== Code for adding Circular pattern in back ground.==========

  // const Wrapper = styled(Grid)(({ theme }) => ({
  //   height: "100%",
  //   width: "100%",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // }));

  // const OuterLayer1 = styled(Box)(({ theme }) => ({
  //   position: "relative",
  //   width: "600px",
  //   height: "600px",
  //   borderRadius: "50%",
  //   opacity: 0.4,
  //   border:
  //     theme.palette.mode === "light"
  //       ? `1px solid ${colors.whiteSmoke[800]}`
  //       : `1px solid ${colors.whiteSmoke[200]}`,
  //   zIndex: 0,
  // }));

  // const OuterLayer2 = styled(Box)(({ theme }) => ({
  //   position: "absolute",
  //   width: "400px",
  //   height: "400px",
  //   borderRadius: "50%",
  //   opacity: 0.4,
  //   border:
  //     theme.palette.mode === "light"
  //       ? `1px solid ${colors.whiteSmoke[800]}`
  //       : `1px solid ${colors.whiteSmoke[200]}`,
  //   zIndex: 0,
  // }));

  // const OuterLayer3 = styled(Box)(({ theme }) => ({
  //   position: "absolute",
  //   width: "200px",
  //   height: "200px",
  //   borderRadius: "50%",
  //   opacity: 0.4,
  //   border:
  //     theme.palette.mode === "light"
  //       ? `1px solid ${colors.whiteSmoke[800]}`
  //       : `1px solid ${colors.whiteSmoke[200]}`,
  //   zIndex: 0,
  // }));

  // <Wrapper>
  //         <OuterLayer1>
  //           <OuterLayer2>
  //             <OuterLayer3></OuterLayer3>
  //           </OuterLayer2>
  //         </OuterLayer1>
  //       </Wrapper>

  return (
    <Container maxWidth="md" sx={{ maxHeight: "80vh", overflowY: "hidden" }}>
      <HeroBox container>
        <HeroBoxDetails size={{ xs: 12, sm: 6 }}>
          <MainHeading>
            Hi, I am <br />
            {Bio.name}
          </MainHeading>
          <SubHeading>
            I am
            <SpanHero>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              ></Typewriter>
            </SpanHero>
          </SubHeading>
          <Description>{Bio.description}</Description>
          <Btn size="large" title={"Explore CV"} icon={<ArticleIcon />}></Btn>
        </HeroBoxDetails>
        <HeroBoxImg size={{ xs: 12, sm: 6 }}>
          <MiniBox>
            <Avatar
              alt="Profile"
              src={Profile}
              sx={{ width: 300, height: 300 }}
            />
          </MiniBox>
          {Bio.social.map((item, index) => (
            <FloatingCard
              key={index}
              tag={item.userId}
              link={item.link}
              icon={item.card.icon}
              top={item.card.top}
              right={item.card.right}
              bottom={item.card.bottom}
            ></FloatingCard>
          ))}
        </HeroBoxImg>
      </HeroBox>
    </Container>
  );
};

export default Hero;
