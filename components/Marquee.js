import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
const MarqueeContainer = styled(Box)({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  padding: "1rem 0",
  whiteSpace: "nowrap",
  marginTop: "5rem",
  borderTop: "1px solid #FFF",
  borderBottom: "1px solid #FFF",
});
const MarqueeWrapper = styled(Box)({
  display: "flex",
  width: "150%",
  animation: "marquee 20s linear infinite",
  "@keyframes marquee": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-50%)" },
  },
});

const MarqueeText = styled(Typography)({
  display: "flex",
  flexShrink: 0,
  whiteSpace: "nowrap",
  fontFamily: "Aspekta, sans-serif",
  fontSize: "2rem",
  color: "#FFF",
  fontWeight: "normal",
});
const StyledSpan = styled("span")({
  fontWeight: 700,
});

const Marquee = () => {
  return (
    <>
      <MarqueeContainer>
        <MarqueeWrapper>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          {/* Duplicate for seamless effect */}
        </MarqueeWrapper>
      </MarqueeContainer>
    </>
  );
};

export default Marquee;
