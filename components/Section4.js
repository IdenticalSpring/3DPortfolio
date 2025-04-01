import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

// ==========================
// STYLED COMPONENTS
// ==========================

// Full-screen container with blue background (#0000FF)
const Section4Container = styled(Box)({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#1937d6",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between", // space top button & bottom text
  padding: "2rem 0",
});

// 1) TOP BUTTON with two fonts + eye4 in the middle
const TopButton = styled("button")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  backgroundColor: "transparent",
  border: "2px solid #FFF",
  borderRadius: "999px",
  padding: "0.8rem 1.5rem",
  cursor: "pointer",
  whiteSpace: "nowrap",
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)",
  },
});

const LeftText = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
  marginRight: "0.8rem",
  fontSize: "1.5rem",
});

const MiddleEyeWrapper = styled(Box)({
  position: "relative",
  width: "40px",
  height: "40px",
  margin: "0 0.8rem",
  backgroundColor: "#FFF",
  borderRadius: "999px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const RightText = styled(Typography)({
  fontFamily: "Nauyryzdkeds, sans-serif",
  color: "#FFF",
  marginLeft: "0.8rem",
  fontSize: "1.5rem",
});

// 2) MARQUEE of "WEB DESIGN • BRANDING • CONCEPT DESIGN • MOTION GRAPHIC" with eye5
const MarqueeContainer = styled(Box)({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  marginTop: "2rem",
});

const MarqueeText = styled(Typography)({
  display: "inline-block",
  paddingLeft: "100%",
  // Slower animation (30s)
  animation: "marquee 30s linear infinite",
  "@keyframes marquee": {
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(100%)" },
  },
  fontFamily: "Aspekta, sans-serif",
  fontSize: "3rem",
  color: "#FFF",
});

// 3) TOP-RIGHT TEXT ("I can do three thing")
const TopRightText = styled(Typography)({
  position: "absolute",
  top: "2rem",
  right: "2rem",
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
  fontSize: "1.5rem", // smaller text
});

// 4) BOTTOM TEXT
const BottomTextContainer = styled(Box)({
  textAlign: "center",
  marginBottom: "2rem",
});

const BottomTextLine = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
  fontSize: "2rem",
});

export default function Section4() {
  return (
    <Section4Container>
      {/* TOP BUTTON */}
      <TopButton>
        <LeftText>NYCE</LeftText>
        <MiddleEyeWrapper>
          <Image
            src="/assets/eye4.png"
            alt="Eye4"
            layout="fill"
            objectFit="contain"
          />
        </MiddleEyeWrapper>
        <RightText>about project</RightText>
      </TopButton>

      {/* MARQUEE */}
      <MarqueeContainer>
        <MarqueeText>
          WEB DESIGN&nbsp;
          <Image
            src="/assets/eye5.png"
            alt="Eye5"
            width={30}
            height={30}
            style={{ verticalAlign: "middle", margin: "0 0.8rem" }}
          />
          BRANDING&nbsp;
          <Image
            src="/assets/eye5.png"
            alt="Eye5"
            width={30}
            height={30}
            style={{ verticalAlign: "middle", margin: "0 0.8rem" }}
          />
          CONCEPT DESIGN&nbsp;
          <Image
            src="/assets/eye5.png"
            alt="Eye5"
            width={30}
            height={30}
            style={{ verticalAlign: "middle", margin: "0 0.8rem" }}
          />
          MOTION GRAPHIC&nbsp;&nbsp;&nbsp;&nbsp;
          WEB DESIGN&nbsp;
          <Image
            src="/assets/eye5.png"
            alt="Eye5"
            width={30}
            height={30}
            style={{ verticalAlign: "middle", margin: "0 0.8rem" }}
          />
          BRANDING&nbsp;
          <Image
            src="/assets/eye5.png"
            alt="Eye5"
            width={30}
            height={30}
            style={{ verticalAlign: "middle", margin: "0 0.8rem" }}
          />
          CONCEPT DESIGN&nbsp;
          <Image
            src="/assets/eye5.png"
            alt="Eye5"
            width={30}
            height={30}
            style={{ verticalAlign: "middle", margin: "0 0.8rem" }}
          />
          MOTION GRAPHIC&nbsp;
        </MarqueeText>
      </MarqueeContainer>

      {/* TOP-RIGHT TEXT */}
      <TopRightText>I can do three thing</TopRightText>

      {/* BOTTOM TEXT */}
      <BottomTextContainer>
        <BottomTextLine>THANK FOR SCROLL TILL THE END</BottomTextLine>
        <BottomTextLine>CAN WE WORK TOGETHER...?</BottomTextLine>
      </BottomTextContainer>
    </Section4Container>
  );
}
