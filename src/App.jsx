import { Box, styled } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { useTheme } from "@mui/material";
import { tokens } from "./utils/ThemesV2";

const App = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const Body = styled(Box)(({ theme }) => {
    return {
      backgroundColor:
        theme.palette.mode === "light"
          ? colors.whiteSmoke[100]
          : colors.oxfordBlue[300],
      width: "100%",
      height: "100%",
      overflowX: "hidden",
    };
  });

  const Wrapper = styled(Box)(() => ({
    background: `linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)`,
    width: "100%",
    clipPath: `polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%)`,
  }));

  return (
    <>
      <Navbar></Navbar>
      <Body>
        <Hero></Hero>
        <Wrapper>
          <Skills></Skills>
          <Experience></Experience>
        </Wrapper>
      </Body>
    </>
  );
};

export default App;
