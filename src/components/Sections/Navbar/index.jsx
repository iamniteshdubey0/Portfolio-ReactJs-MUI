import { Box, styled, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import { tokens } from "../../../utils/ThemesV2";
import ToggleBtn from "../../MircoElements/ToggleBtn";
import Btn from "../../MircoElements/Btn";
import DownloadIcon from "@mui/icons-material/Download";
import { NavText } from "../../Helper/Typo";
import { Navlinks } from "../../../data/uiConstants";

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const Nav = styled(Box)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "light"
        ? colors.whiteSmoke[500]
        : colors.oxfordBlue[200],
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    fontSize: "1rem",
    position: "sticky",
    top: "0px",
    zIndex: "20",
  }));

  const NavContainer = styled(Grid)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 2,
    width: "100%",
    maxWidth: "1200px",
    padding: "0 6rem",
    zIndex: 20,
  }));

  const NavLogo = styled(Grid)(({ theme }) => ({
    padding: 1,
    gap: 2,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  }));

  const NavItem = styled(Grid)(({ theme }) => ({
    padding: 1,
    gap: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  const NavIcon = styled(Grid)(({ theme }) => ({
    width: "auto",
    cursor: "pointer",
  }));

  const NavLink = styled('a')(({ theme }) => ({
    textDecoration: "none",
    fontSize:'14px',
    cursor: "pointer",
    padding: 1,
    margin: "0px 6px",
    display: "inline",
    textTransform: "capitalize",
    color:
      theme.palette.mode === "light"
        ? colors.oxfordBlue[400]
        : colors.whiteSmoke[400],
    // Add hover color effects --colors.whiteSmoke[500]--
    "&:hover": {
      color:
        theme.palette.mode === "light"
          ? colors.secondary[500]
          : colors.secondary[500],
    },
  }));

  return (
    <Nav>
      <NavContainer container spacing={2}>
        <NavLogo container size={3}>
          <NavIcon size={2}>⭐</NavIcon>
          <NavLink>
            <NavText variant="h4">portfolio</NavText>
          </NavLink>
        </NavLogo>
        <NavItem size={6}>
          {Navlinks.map((item, index) => (
            <NavItem key={index}>
              <NavLink href={item.link}>{item.label}</NavLink>
            </NavItem>
          ))}
        </NavItem>
        <NavItem size={3}>
          <ToggleBtn></ToggleBtn>
          <Btn title={"download cv"} icon={<DownloadIcon />}></Btn>
        </NavItem>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
