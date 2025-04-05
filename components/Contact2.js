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
  height: "140vh",
  backgroundColor: "#1937d6",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
});

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
});

const LeftSide = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  paddingTop: "0",
  gap: "1.5rem",
});

const BulletList = styled("ul")({
  margin: 0,
  marginLeft: "5rem",
  paddingLeft: "1.5rem",
});

const BulletItem = styled("li")({
  listStyle: "none",
  position: "relative",
  paddingLeft: "1.5rem",
  color: "#FFF",
  fontFamily: "Aspekta, sans-serif",
  fontSize: "1.3rem",
  marginBottom: "0.5rem",
  "&:hover": {
    opacity: 1,
  },
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: "1rem",
    height: "1rem",
    backgroundImage: "url('/assets/bullet.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
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
  fontSize: "5rem",
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

export default function Contact2() {
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
            +84 66672476
            <br /> pthnxxn@gmail.com
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
