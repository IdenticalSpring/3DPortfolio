import React, { useEffect, useRef, useState } from "react";
import { styled, keyframes } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Section5Container = styled(Box)({
  width: "100vw",
  height: "200vh",
  backgroundColor: "white",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
});

const MarqueeContainer = styled(Box)({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  padding: "1rem 0",
  whiteSpace: "nowrap",
  marginTop: "40vh",
  borderTop: "1px solid #FFF",
  borderBottom: "1px solid #FFF",
  backgroundColor: "#1937d6",
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
  fontSize: "1.8vw",
  color: "#FFF",
  fontWeight: "normal",
});
const StyledSpan = styled("span")({
  fontWeight: 700,
});
const FooterContainer = styled(Box)({
  width: "100%",
  padding: "1rem 2rem",
  display: "flex",
  flexDirection: "column",
  gap: "0",
});

const FooterRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderTop: "1px solid #1937d6",
});

const LogoWrapper = styled(Box)({
  position: "relative",
  width: "50px",
  height: "50px",
});

const FooterText = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  color: "#1937d6",
  fontSize: "1rem",
  borderLeft: "1px solid #1937d6",
  paddingTop: "1.3rem",
  paddingBottom: "1.3rem",
  paddingLeft: "4rem",
  paddingRight: "15rem",
  fontWeight: "600",
  opacity: 0.8, // Default opacity
  "&:hover": {
    opacity: 1, // Full opacity on hover
  },
});

const FooterText1 = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
  fontSize: "1rem",
  paddingTop: "1rem",
  paddingBottom: "1.3rem",
  opacity: 0.8, // Default opacity
  "&:hover": {
    opacity: 1, // Full opacity on hover
  },
});

const StringImage = styled(Box)({
  transform: "translate(-40%, 0%)",
});
const StyledAnchor = styled("a")({
  color: "#FFF",
  textDecoration: "none",
  opacity: 0.8,
  alignItems: "end",
  "&:hover": {
    opacity: 1,
  },
});

const StyledLink = styled(Link)({
  color: "#fff",
  textDecoration: "none",
  opacity: 0.8,
  "&:hover": {
    opacity: 1,
    borderBottom: "1px solid rgba(255, 255, 255, 1)",
  },
});
const TextLine = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  fontSize: "1.9vw",
  lineHeight: "1.5",
  color: "#1937d6",
  opacity: 0, // start hidden
  transform: "translateY(20px)", // start slightly lower
  transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
});

const BackToTopButton = styled(Box)({
  display: "flex",
  width: "280px",
  justifyContent: "center", // Adjusted width for the button
  flexDirection: "row", // Arrange text and arrow horizontally
  alignItems: "center", // Vertically center the items
  marginBottom: "1rem",
  cursor: "pointer",
  border: "1px solid #1937d6",
  borderRadius: "50px", // Curved horizontal edges
  opacity: 0.8, // Original opacity set to 0.8
  padding: "0.5rem 1rem",
  fontWeight: 600, // Optional: adds space inside the button
  color: "#1937d6",
  "&:hover": {
    opacity: 1, // Full opacity on hover
  },
  // "&::after": {                 // Pseudo-element for the arrow
  //   marginLeft: "0.5rem",        // Space between the text and the arrow
  // },
});

const ArrowUp = styled(Box)({
  position: "relative",
  width: "30px",
  height: "30px",
});

const ContactText = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  color: "black",
  fontSize: "calc(3rem + 1vw)",
  textAlign: "left",
  marginTop: "3rem",
  lineHeight: 1,
  lineHeight: 1.3,
});
const Color = styled(Typography)({
  color: "#1937d6",
  lineHeight: 1,
  fontSize: "calc(3rem + 1vw)",
});
const MainContent = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "row",
  padding: "2rem",
});
const ArrowUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1937d6"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const LeftSide = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  paddingTop: "0",
  gap: "1.5rem",
  marginTop: "80px",
});

const BulletList = styled("ul")({
  margin: 0,
});

const BulletItem = styled("li")({
  listStyle: "none",
  position: "relative",
  maxWidth: "10vw",
  paddingRight: "1.5rem", // Reserve space on the right for the arrow
  color: "black",
  fontFamily: "Aspekta, sans-serif",
  fontSize: "1.3rem",
  marginBottom: "0.5rem",
  "&:hover": {
    opacity: 1,
  },
  "&::after": {
    content: '"→"', // Right-pointing arrow
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
});

const RightSide = styled(Box)({
  width: "40vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "2rem",
});

const EyeContainer = styled(Box)({
  position: "relative",
  width: "300px",
  height: "300px",
});
const jelly = keyframes`
  0% {
    transform: scale(0.8, 0.8);
  }
  25% {
    transform: scale(1.2, 0.8); 
  }
  50% {
    transform: scale(1, 1);
  }
  75% {
    transform: scale(0.8, 1.2);
  }
  100% {
    transform: scale(1, 1);
  }
`;
const EyeOuter = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  "&:hover": {
    animation: `${jelly} 0.5s ease-in-out`,
  },
});

const NavList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "1rem",
});

const NavItem = styled(Box)({
  width: "100%",
  borderBottom: "1px solid rgba(25, 55, 214, 0.8)",
  display: "flex",
  alignItems: "flex-end",
  paddingBottom: "0.3rem",
  cursor: "pointer",
  opacity: 0.8,

  "&:hover": {
    opacity: 1,
    borderBottom: "1px solid rgba(25, 55, 214, 1)",
  },
});

const NavItemText = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  color: "#1937d6",
  fontSize: "6rem",
  lineHeight: 1.2,
  textAlign: "right",
  width: "100%",
});

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Section5Container>
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
            {/* Duplicate for seamless effect */}
          </MarqueeWrapper>
        </MarqueeContainer>
        <MainContent>
          <LeftSide>
            <StringImage>
              <Image
                src="/assets/Asset 13.png"
                alt="Let's Work Together"
                width={900}
                height={400}
              />
            </StringImage>
            <BackToTopButton onClick={scrollToTop}>
              <Typography
                variant="body1"
                sx={{
                  color: "#1937d6",
                  fontFamily: "Aspekta, sans-serif",
                  fontSize: "1.3rem",
                }}
              >
                BACK TO THE TOP
              </Typography>
              <ArrowUp>
                <ArrowUpIcon />
              </ArrowUp>
            </BackToTopButton>

            <BulletList>
              <StyledAnchor
                href="https://www.behance.net/phmhng79"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BulletItem>BEHANCE</BulletItem>
              </StyledAnchor>

              <StyledAnchor
                href="https://www.instagram.com/neuanhsaianhxinloi?igsh=MXRpMTMyc3E5cmo0bg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BulletItem>INSTAGRAM</BulletItem>
              </StyledAnchor>

              <StyledAnchor
                href="https://www.upwork.com/freelancers/~01e23b44f2efa24e1d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BulletItem>UPWORK</BulletItem>
              </StyledAnchor>
              <StyledAnchor
                href="https://www.linkedin.com/in/h%C6%B0ng-pham-8b1b3235a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BulletItem>LINKEDIN</BulletItem>
              </StyledAnchor>
            </BulletList>
            <ContactText>
              <a
                href="mailto:PTHISONE@GMAIL.COM?subject=Hello&body=Hi%20there!"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                Feel free to <br /> <Color>drop me a line anytime!</Color>
              </a>
            </ContactText>
          </LeftSide>

          <RightSide>
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
              <StyledLink href="/about">
                <NavItem>
                  <NavItemText>ABOUT</NavItemText>
                </NavItem>
              </StyledLink>

              <StyledLink href="/work">
                <NavItem>
                  <NavItemText>WORK</NavItemText>
                </NavItem>
              </StyledLink>

              <StyledLink href="/contact">
                <NavItem>
                  <NavItemText>CONTACT</NavItemText>
                </NavItem>
              </StyledLink>
            </NavList>
          </RightSide>
        </MainContent>

        <FooterContainer>
          <FooterRow>
            <Box
              display="flex"
              alignItems="center"
              gap="1rem"
              paddingRight="25rem"
            >
              <LogoWrapper>
                <Image
                  src="/assets/logo xanh.png"
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </LogoWrapper>
            </Box>

            <FooterText>
              HA NOI,
              <br /> VIET NAM
            </FooterText>

            <FooterText>
              <a
                href="mailto:PTHISONE@GMAIL.COM?subject=Hello&body=Hi%20there!"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                +84 66712476
                <br /> PTHISONE@GMAIL.COM
              </a>
            </FooterText>
          </FooterRow>

          <FooterRow>
            <FooterText1>2025</FooterText1>
            <FooterText1>DESIGNED BY HUNG PHAM</FooterText1>
          </FooterRow>
        </FooterContainer>
      </Section5Container>
    </>
  );
};

export default Footer;
