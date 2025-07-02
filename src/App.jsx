import { useTheme } from "@mui/material";
import { tokens } from "./utils/ThemesV2";
import { Box, styled } from "@mui/material";
import Navbar from "./components/Sections/Navbar";
import Hero from "./components/Sections/Hero";
import Skills from "./components/Sections/Skills";
import Experience from "./components/Sections/Experience";
import Project from "./components/Sections/Project";
import Education from "./components/Sections/Education";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Sections/Footer";
import Certificates from "./components/Sections/Certificates";

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
    background:
      theme.palette.mode === "light"
        ? `linear-gradient(135deg, ${colors.whiteSmoke[200]}, ${colors.whiteSmoke[500]})`
        : `linear-gradient(135deg, ${colors.oxfordBlue[300]}, ${colors.teal[100]})`,

    //       background: theme.palette.mode === "light"
    // ? `radial-gradient(circle, ${colors.whiteSmoke[300]}, ${colors.whiteSmoke[500]})`
    // : `radial-gradient(circle, ${colors.oxfordBlue[300]}, ${colors.teal[100]})`,

    width: "100%",
    clipPath: `polygon(0 0, 100% 0, 100% 100%,27% 99%, 0 100%)`,
  }));

  return (
    <>
      <Navbar></Navbar>
      <Body>
        <Hero></Hero>
        <Wrapper>
          <Skills></Skills>
          {/* <Experience></Experience> */}
          <Project></Project>
          <Certificates></Certificates>
          <Education></Education>
          <Contact></Contact>
        </Wrapper>
        <Footer></Footer>
      </Body>
    </>
  );
};

export default App;
