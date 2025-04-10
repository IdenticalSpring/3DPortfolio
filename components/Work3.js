import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { styled, keyframes } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const MarqueeWrapper = styled(Box)({
  display: "flex",
  width: "200%",
  animation: "marquee 30s linear infinite",
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
  fontSize: "3rem",
  color: "#FFF",
  fontWeight: "normal",
});

const StyledSpan = styled("span")({
  fontWeight: 700,
});

const MarqueeContainer = styled(Box)({
  position: "relative",
  marginTop: "50px",
  alignSelf: "center",
  width: "calc(100% - 40px)",
  overflow: "hidden",
  whiteSpace: "nowrap",
  backgroundColor: "#1937d6",
  padding: "1rem 0",
  marginLeft: "20px",
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
const Section5Container = styled(Box)({
  maxWidth: "100vw",
  height: "140vh",
  backgroundColor: "white",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
});

const MainContent = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "row",
  padding: "2rem",
});

const LeftSide = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  paddingTop: "0",
  gap: "1.5rem",
  marginTop: "100px",
});

const BulletList = styled("ul")({
  margin: 0,
  marginLeft: "5rem",
  paddingLeft: "1.5rem",
});
const BulletItem = styled("li")({
  listStyle: "none",
  position: "relative",
  maxWidth: "10vw",
  paddingRight: "1.5rem", // Reserve space on the right for the arrow
  color: "#1937d6",
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
  paddingRight: "5rem",
});

const EyeContainer = styled(Box)({
  position: "relative",
  width: "250px",
  height: "250px",
});

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

const Middle = styled(Box)({
  display: "flex",
  flexDirection: "row",
  // gap: "10vw",
  justifyContent: "space-between",
  maxWidth: "calc(100vw - 20px)",
});
const WrapImg1 = styled(Box)({
  transform: "translate(-30%, 0)",
});
const WrapImg2 = styled(Box)({
  transform: "translate(-10%, 0)",
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
  opacity: 0.8, // Initial opacity
  transform: "translateY(20px)", // Start slightly lower
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
  marginLeft: "100px",
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
  color: "#1937d6",
  fontSize: "calc(3rem + 1vw)",
  textAlign: "left",
  marginTop: "3rem",
  lineHeight: 1,
  marginLeft: "6rem",
  lineHeight: 1.3,
});
const Color = styled(Typography)({
  color: "#DDB520",
  lineHeight: 1,
  fontSize: "calc(3rem + 1vw)",
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

const Work3 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Middle>
        <WrapImg1>
          <Image
            src="/assets/Asset 13.png"
            alt="bullet"
            width={1000}
            height={400}
          />
        </WrapImg1>
        <WrapImg2>
          <Image
            src="/assets/Asset 13 - Copy.png"
            alt="bullet"
            width={500}
            height={400}
          />
        </WrapImg2>{" "}
      </Middle>
      <MarqueeContainer>
        <MarqueeWrapper>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={50}
              height={50}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={50}
              height={50}
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
              width={50}
              height={50}
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
              width={50}
              height={50}
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
              width={50}
              height={50}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={50}
              height={50}
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
              width={50}
              height={50}
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
              width={50}
              height={50}
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
              width={50}
              height={50}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={50}
              height={50}
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
              width={50}
              height={50}
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
              width={50}
              height={50}
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
              width={50}
              height={50}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={50}
              height={50}
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
              width={50}
              height={50}
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
              width={50}
              height={50}
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
              width={50}
              height={50}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={50}
              height={50}
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
              width={50}
              height={50}
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
              width={50}
              height={50}
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
              width={50}
              height={50}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={50}
              height={50}
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
              width={50}
              height={50}
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
              width={50}
              height={50}
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
              width={50}
              height={50}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={50}
              height={50}
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
              width={50}
              height={50}
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
              width={50}
              height={50}
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

      <Section5Container>
        {/* <MarqueeContainer>
              <MarqueeText>
                {"Let's work together - Contact me pls - I'm Broke  Let's work together - Contact me pls - I'm Broke   Let's work together - Contact me pls - I'm Broke   Let's work together - Contact me pls - I'm Broke   Let's work together - Contact me pls - I'm Broke".repeat(3)}
              </MarqueeText>
             
            </MarqueeContainer> */}
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
            </BulletList>
            <ContactText>
              Feel free to <br /> <Color>drop me a line anytime!</Color>
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
              +84 66712476
              <br /> pthisone@gmail.com
            </FooterText>
          </FooterRow>

          <FooterRow>
            <FooterText1>2025</FooterText1>
            <FooterText1>DESIGNED BY HUNG PHAM</FooterText1>
          </FooterRow>
        </FooterContainer>
      </Section5Container>
    </div>
  );
};

export default Work3;
