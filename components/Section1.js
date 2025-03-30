import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

// Dynamically import the DraggableEye
const DraggableEye = dynamic(() => import("./DraggableEye"), { ssr: false });

// Define nav items with target section ids (adjust these as needed)
const navItems = [
  { name: "HOME", target: "section1" },
  { name: "ABOUT", target: "section2" },
  { name: "WORK", target: "section3" },
  { name: "CONTACT", target: "section5" },
];

// ---------------------
// STYLED COMPONENTS
// ---------------------

// HeaderBar with solid #0000FF background and white top/bottom lines
const HeaderBar = styled(Box)({
  width: "100%",
  top: "50px",
  backgroundColor: "#0000FF",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 2rem",
  borderTop: "1px solid #FFF",
  borderBottom: "1px solid #FFF",
});

// Left column: displays the logo image
const LeftColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
});

// Logo wrapper with fixed size
const LogoWrapper = styled(Box)({
  position: "relative",
  width: "40px",
  height: "40px",
});

// Vertical divider between left and center columns
const VerticalDivider = styled("div")({
  width: "1px",
  height: "60px",
  backgroundColor: "#FFF",
  margin: "0 2rem",
});

// Center column: displays nav links with bullet images as separators
const CenterColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
});

// Nav link text (clickable)
const NavLink = styled(Typography)({
  color: "#FFF",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  margin: "0 1rem",
  cursor: "pointer",
});

// Bullet image as separator (used only between nav links)
const BulletImage = styled("img")({
  margin: "0 0.5rem",
  width: "8px",
  height: "8px",
  display: "inline-block",
  verticalAlign: "middle",
});

// Right column: stacks "VIET NAM" above the current time
const RightColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  fontWeight: 600,
  alignItems: "flex-end",
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
});

// ---------------------
// HERO SECTION STYLES
// ---------------------
const HeroContainer = styled(Box)({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#0000FF",
  position: "relative",
  overflow: "hidden",
  fontFamily: "Nauyryzdkeds",
});

const TopText = styled(Typography)({
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "6rem",
  fontWeight: "bold",
  color: "#FFF",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  lineHeight: 1,
  fontFamily: "NauryzRedKeds",
  zIndex: 1,
});

const EyeContainer = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-75%, -75%)",
  width: "48vw",
  height: "48vw",
  zIndex: 2,
});

const BottomText = styled(Typography)({
  position: "absolute",
  bottom: "10%",
  left: "50%",
  transform: "translate(-50%, -100%)",
  fontSize: "6rem",
  fontWeight: "bold",
  color: "#FFD700",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  lineHeight: 1,
  fontFamily: "NauryzRedKeds",
  zIndex: 3,
});

const TestSide = styled(Typography)({
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translateX(270%)",
  fontSize: "6rem",
  fontWeight: "bold",
  color: "#FFF",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  lineHeight: 1,
  fontFamily: "Aspekta, sans-serif",
  zIndex: 1,


});
// ---------------------
// MAIN COMPONENT
// ---------------------
export default function Section1() {
  const [time, setTime] = useState("");

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Function to scroll to a section by id
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* HEADER */}
      <HeaderBar>
        {/* Left: Logo */}
        <LeftColumn>
          <LogoWrapper>
            <Image
              src="/assets/logo.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </LogoWrapper>
        </LeftColumn>

        <VerticalDivider />

        {/* Center: Navigation links with bullet images */}
        <CenterColumn>
          {navItems.map((item, index) => (
            <React.Fragment key={item.name}>
              <NavLink
                variant="body1"
                onClick={() => scrollToSection(item.target)}
              >
                {item.name}
              </NavLink>
            </React.Fragment>
          ))}
        </CenterColumn>

        <VerticalDivider />

        {/* Right: Country and current time */}
        <RightColumn>
          <Typography variant="body1">VIET NAM</Typography>
          <Typography variant="body1">
            <BulletImage src="/assets/bullet.png" alt="bullet" />
            {time}
          </Typography>
        </RightColumn>
      </HeaderBar>

      {/* HERO SECTION */}
      <HeroContainer>
        <TopText variant="h1">What's up </TopText><TestSide>I'm</TestSide>

        <EyeContainer>
          <DraggableEye />
        </EyeContainer>

        <BottomText variant="h1">Pham Hung</BottomText>
      </HeroContainer>
    </>
  );
}
