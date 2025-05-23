import React, { useRef, useEffect } from "react";
import { styled, keyframes } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
  width: "100vw",
  height: "160vh",
  backgroundColor: "#1937d6",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  paddingTop: "100px",
  flexDirection: "column",
});

const MarqueeContainer = styled(Box)({
  position: "relative",
  width: "calc(100% - 40px)",
  overflow: "hidden",
  whiteSpace: "nowrap",
  backgroundColor: "transparent",
  padding: "1rem 0",
  zIndex: 100,
});

const MarqueeText = styled(Typography)({
  display: "inline-block",
  paddingLeft: "100%",
  animation: "marquee 280s linear infinite",
  "@keyframes marquee": {
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(-100%)" },
  },
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
  fontSize: "7rem",
});

const MainContent = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "row",
  padding: "2rem",
  marginTop: "2rem",
});

const LeftSide = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  paddingTop: "0",
  transform: "translateY(-8%)",
  gap: "1.5rem",
});

const BulletList = styled("ul")({
  margin: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  paddingTop: "0",
});
const BulletItem = styled("li")({
  listStyle: "none",
  position: "relative",
  maxWidth: "10vw",
  paddingRight: "1.5rem", // Reserve space on the right for the arrow
  color: "#FFF",
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
  borderBottom: "1px solid #FFF",
  display: "flex",
  alignItems: "center",
  paddingBottom: "0.3rem",
  cursor: "pointer",
  marginLeft: "auto",
  "&:hover": {
    opacity: 1,
    borderBottom: "1px solid rgba(255, 255, 255, 0.8)",
  },
});
const NavItemText = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
  fontSize: "7rem",
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
  borderTop: "1px solid #FFF",
});

const LogoWrapper = styled(Box)({
  position: "relative",
  width: "50px",
  height: "50px",
});

const FooterText = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
  fontSize: "1rem",
  borderLeft: "1px solid #FFF",
  paddingTop: "1.3rem",
  paddingBottom: "1.3rem",
  paddingLeft: "4rem",
  fontWeight: "600",
  paddingRight: "15rem",
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
const BackToTopButton = styled(Box)({
  display: "flex",
  width: "280px",
  justifyContent: "center", // Adjusted width for the button
  flexDirection: "row", // Arrange text and arrow horizontally
  alignItems: "center", // Vertically center the items
  marginBottom: "1rem",
  cursor: "pointer",
  border: "1px solid #FFF",
  borderRadius: "50px", // Curved horizontal edges
  opacity: 0.8, // Original opacity set to 0.8
  padding: "0.5rem 1rem",
  fontWeight: 600, // Optional: adds space inside the button
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

const ContactText = styled(Box)({
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
  fontSize: "calc(3rem + 1vw)",
  textAlign: "left",
  marginTop: "3rem",
  lineHeight: 1,
  lineHeight: 1.3,
});
const Color = styled(Typography)({
  color: "#ffcd00",
  lineHeight: 1,
  fontSize: "calc(3rem + 1vw)",
});

export default function Contact2() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Section5Container>
      <MarqueeContainer>
        <MarqueeText>
          {"Let's work together - Contact me pls - I'm Broke  Let's work together - Contact me pls - I'm Broke   Let's work together - Contact me pls - I'm Broke   Let's work together - Contact me pls - I'm Broke   Let's work together - Contact me pls - I'm Broke".repeat(
            3
          )}
        </MarqueeText>
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
                color: "#FFF",
                fontFamily: "Aspekta, sans-serif",
                fontSize: "1.3rem",
              }}
            >
              BACK TO THE TOP
            </Typography>
            <ArrowUp>
              <Image
                src="/assets/arrow.png" // Make sure you have this asset
                alt="Back to Top"
                layout="fill"
                objectFit="contain"
              />
            </ArrowUp>
          </BackToTopButton>
          {/* <BackToTopButton onClick={scrollToTop}>
            <Typography
              variant="body1"
              sx={{
                color: "#FFF",
                fontFamily: "Aspekta, sans-serif",
                fontSize: "1.3rem",
              }}
            >
              BACK TO THE TOP
            </Typography>
            <ArrowUp>
              <Image
                src="/assets/arrow.png" // Make sure you have this asset
                alt="Back to Top"
                layout="fill"
                objectFit="contain"
              />
            </ArrowUp>
          </BackToTopButton> */}
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
                src="/assets/logo.png"
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
  );
}
