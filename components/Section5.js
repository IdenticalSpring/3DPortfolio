import React, { useRef, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

// ==========================
// STYLED COMPONENTS
// ==========================

// Full-screen container
const Section5Container = styled(Box)({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#0000FF",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
});

// ---------- TOP MARQUEE ----------
const MarqueeContainer = styled(Box)({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  backgroundColor: "transparent",
  padding: "1rem 0",
});

const MarqueeText = styled(Typography)({
  display: "inline-block",
  paddingLeft: "100%",
  animation: "marquee 15s linear infinite",
  "@keyframes marquee": {
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(100%)" },
  },
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
  fontSize: "2rem",
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
  justifyContent: "center",
  gap: "1.5rem",
});

const BigHeading = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
  fontSize: "3rem",
  fontWeight: 700,
});

const ColoredSpan = styled("span")({
  color: "#FFD700", // gold color for "Tog3ther!"
});

const BulletList = styled("ul")({
  margin: 0,
  paddingLeft: "1.5rem",
});

const BulletItem = styled("li")({
  listStyleType: "disc",
  color: "#FFF",
  fontFamily: "Aspekta, sans-serif",
  fontSize: "1.2rem",
  marginBottom: "0.5rem",
});

// RIGHT SIDE: Eye + ABOUT/WORK/CONTACT
const RightSide = styled(Box)({
  width: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "2rem",
});

// Eye container (eye1 + center_eye1) on the right
const EyeContainer = styled(Box)({
  position: "relative",
  width: "150px",
  height: "150px",
});

const EyeOuter = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
});

const EyeCenter = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "50px",
  height: "50px",
  transform: "translate(-50%, -50%)",
});

// ABOUT/WORK/CONTACT items
const NavList = styled(Box)({
  display: "flex",
  flexDirection: "column",
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
  fontSize: "2rem",
});

// ---------- UPDATED FOOTER WITH WHITE LINE ----------
const FooterContainer = styled(Box)({
  width: "100%",
  borderTop: "1px solid #FFF", // white line at the top
  padding: "1rem 2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

// A row for columns
const FooterRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

// Logo
const LogoWrapper = styled(Box)({
  position: "relative",
  width: "30px",
  height: "30px",
});

// Footer text
const FooterText = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
  fontSize: "1rem",
});

// ==========================
// MAIN COMPONENT
// ==========================
export default function Section5() {
  // Ref for the pupil in the eye on the right
  const pupilRef = useRef(null);
  const maxDisplacement = 20; // clamp movement within the eye

  // Mouse tracking for center_eye1
  useEffect(() => {
    function handleMouseMove(e) {
      if (!pupilRef.current) return;
      const rect = pupilRef.current.parentNode.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      let offsetX = (e.clientX - centerX) * 0.2;
      let offsetY = (e.clientY - centerY) * 0.2;
      const displacement = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
      if (displacement > maxDisplacement) {
        const scale = maxDisplacement / displacement;
        offsetX *= scale;
        offsetY *= scale;
      }
      pupilRef.current.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Section5Container>
      {/* ---------- TOP MARQUEE ---------- */}
      <MarqueeContainer>
        <MarqueeText>
          {/* Repeat the text so it scrolls continuously */}
          {"Let's work together - Contact me pls - I'm Broke   ".repeat(3)}
        </MarqueeText>
      </MarqueeContainer>

      {/* ---------- MAIN CONTENT ---------- */}
      <MainContent>
        {/* LEFT SIDE */}
        <LeftSide>
          {/* "Let’s Work Tog3ther!" */}
          <BigHeading>
            Let’s Work <ColoredSpan>Tog3ther!</ColoredSpan>
          </BigHeading>

          {/* Bullets: Behance, Instagram, Upwork */}
          <BulletList>
            <BulletItem>BEHANCE</BulletItem>
            <BulletItem>INSTAGRAM</BulletItem>
            <BulletItem>UPWORK</BulletItem>
          </BulletList>
        </LeftSide>

        {/* RIGHT SIDE: Eye + ABOUT/WORK/CONTACT */}
        <RightSide>
          {/* Eye container */}
          <EyeContainer>
            <EyeOuter>
              <Image
                src="/assets/eye1.png"
                alt="Outer Eye"
                layout="fill"
                objectFit="contain"
              />
              <EyeCenter ref={pupilRef}>
                <Image
                  src="/assets/center_eye1.png"
                  alt="Center Eye"
                  layout="fill"
                  objectFit="contain"
                />
              </EyeCenter>
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
          <Box display="flex" alignItems="center" gap="1rem">
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
          <FooterText>HA NOI, VIET NAM</FooterText>

          {/* Right column: Phone / Email */}
          <FooterText>+84 66672476 / pthnxxn@gmail.com</FooterText>
        </FooterRow>

        {/* Second row: 2 columns (year, designed by) */}
        <FooterRow>
          <FooterText>2025</FooterText>
          <FooterText>DESIGNED BY HUNG PHAM</FooterText>
        </FooterRow>
      </FooterContainer>
    </Section5Container>
  );
}
