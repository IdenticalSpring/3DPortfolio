import React, { useRef, useEffect } from "react";
import { styled, keyframes } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

// ==========================
// STYLED COMPONENTS
// ==========================
const jelly = keyframes`
  0% {
    transform: scale(0.8, 0.8);
  }
  25% {
    transform: scale(1.2, 0.8); /* Wider horizontally, squished vertically */
  }
  50% {
    transform: scale(1, 1);
  }
  75% {
    transform: scale(0.8, 1.2); /* Narrower horizontally, stretched vertically */
  }
  100% {
    transform: scale(1, 1);
  }
`;
// Full-screen container
const Section5Container = styled(Box)({
  width: "100vw",
  height: "140vh",
  backgroundColor: "#1937d6",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
});

// ---------- TOP MARQUEE ----------
const MarqueeContainer = styled(Box)({
  position: "relative",
  width: "calc(100% - 40px)",
  overflow: "hidden",
  whiteSpace: "nowrap",
  backgroundColor: "transparent",
  padding: "1rem 0",
});

const MarqueeText = styled(Typography)({
  display: "inline-block",
  paddingLeft: "100%",
  animation: "marquee 30s linear infinite",
  "@keyframes marquee": {
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(-100%)" },
  },
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
  fontSize: "7rem",
});

// ---------- MAIN CONTENT ----------
const MainContent = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "row",
  padding: "2rem",
});

// LEFT SIDE: "Let’s Work Tog3ther!" + bullet points
const LeftSide = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  paddingTop: "7.5rem",
  gap: "1.5rem",
});

const BulletList = styled("ul")({
  margin: 0,
  marginLeft: "5rem",
  paddingLeft: "1.5rem",
});

const BulletItem = styled("li")({
  listStyle: "none", // Remove default bullet
  position: "relative",
  paddingLeft: "2.5rem", // space for bullet image
  color: "#FFF",
  fontFamily: "Aspekta, sans-serif",
  fontSize: "2rem",
  marginBottom: "0.5rem",
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: "1.5rem",
    height: "1.5rem",
    backgroundImage: "url('/assets/bullet.png')", // your bullet image path
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});


// RIGHT SIDE: Eye + ABOUT/WORK/CONTACT
const RightSide = styled(Box)({
  width: "40vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "2rem",
});

// Eye container (eye1 + center_eye1) on the right
const EyeContainer = styled(Box)({
  position: "relative",
  width: "300px",
  height: "300px",
});

const EyeOuter = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  "&:hover": {
    animation: `${jelly} 0.5s ease-in-out`,
  },
});

// ABOUT/WORK/CONTACT items
const NavList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
});

const NavItem = styled(Box)({
  width: "100%",
  borderBottom: "1px solid #FFF",
  display: "flex",
  alignItems: "center",
  paddingBottom: "0.3rem",
  cursor: "pointer",
  "&:hover": {
    opacity: 0.8,
  },
});

const NavItemText = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
  fontSize: "5rem",
  lineHeight: 1.2,
  textAlign: "right",
  width: "100%"
});

// ---------- UPDATED FOOTER WITH WHITE LINE ----------
const FooterContainer = styled(Box)({
  width: "100%",
  padding: "1rem 2rem",
  display: "flex",
  flexDirection: "column",
  gap: "0",
});

// A row for columns
const FooterRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderTop: "1px solid #FFF", // white line at the top

});

// Logo
const LogoWrapper = styled(Box)({
  position: "relative",
  width: "50px",
  height: "50px",
});

// Footer text
const FooterText = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
  fontSize: "1rem",
  borderLeft: "1px solid #FFF",
  paddingTop: "1.3rem",
  paddingBottom: "1.3rem",
  paddingLeft: "4rem",
  paddingRight: "15rem",
});

const FooterText1 = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
  fontSize: "1rem",
  paddingTop: "1rem",
  paddingBottom: "1.3rem",

});

const StringImage = styled(Box)({
  transform: "translate(-40%, 0%)",
});

// ==========================
// MAIN COMPONENT
// ==========================
export default function Section5() {
  return (
    <Section5Container>
      {/* ---------- TOP MARQUEE ---------- */}
      <MarqueeContainer>
        <MarqueeText>
          {/* Repeat the text so it scrolls continuously */}
          {"Let's work together - Contact me pls - I'm Broke   ".repeat(3)}
        </MarqueeText>
        <MarqueeText>
          {/* Repeat the text so it scrolls continuously */}
          {"Let's work together - Contact me pls - I'm Broke   ".repeat(3)}
        </MarqueeText>
        <MarqueeText>
          {/* Repeat the text so it scrolls continuously */}
          {"Let's work together - Contact me pls - I'm Broke   ".repeat(3)}
        </MarqueeText>
        <MarqueeText>
          {/* Repeat the text so it scrolls continuously */}
          {"Let's work together - Contact me pls - I'm Broke   ".repeat(3)}
        </MarqueeText>
      </MarqueeContainer>
      <MainContent>
        {/* LEFT SIDE */}
        <LeftSide>
          <StringImage>
            <Image
              src="/assets/Asset 13.png"
              alt="Let's Work Together"
              width={900}
              height={400}/>
          </StringImage>
          <BulletList>
            <BulletItem>BEHANCE</BulletItem>
            <BulletItem>INSTAGRAM</BulletItem>
            <BulletItem>UPWORK</BulletItem>
          </BulletList>
        </LeftSide>

        <RightSide>
          {/* Eye container */}
          <EyeContainer>
            <EyeOuter>
              <Image
                src="/assets/Asset 19.png"
                alt="Outer Eye"
                layout="fill"
                objectFit="contain"
              />
            </EyeOuter>
          </EyeContainer>

          {/* Nav items */}
          <NavList>
            <NavItem>
              <NavItemText>ABOUT</NavItemText>
            </NavItem>
            <NavItem>
              <NavItemText>WORK</NavItemText>
            </NavItem>
            <NavItem>
              <NavItemText>CONTACT</NavItemText>
            </NavItem>
          </NavList>
        </RightSide>
      </MainContent>

      {/* ---------- FOOTER WITH WHITE LINE AT TOP ---------- */}
      <FooterContainer>
        {/* First row: 3 columns (logo, location, phone/email) */}
        <FooterRow>
          {/* Left column: Logo */}
          <Box display="flex" alignItems="center" gap="1rem" paddingRight="25rem">
            <LogoWrapper>
              {/* Replace with your actual logo */}
              <Image
                src="/assets/logo.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </LogoWrapper>
          </Box>

          {/* Center column: Location */}
          <FooterText>HA NOI,<br/> VIET NAM</FooterText>

          {/* Right column: Phone / Email */}
          <FooterText>+84 66672476<br/> pthnxxn@gmail.com</FooterText>
        </FooterRow>

        {/* Second row: 2 columns (year, designed by) */}
        <FooterRow>
          <FooterText1>2025</FooterText1>
          <FooterText1>DESIGNED BY HUNG PHAM</FooterText1>
        </FooterRow>
      </FooterContainer>
    </Section5Container>
  );
}
