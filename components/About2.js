import React, { useEffect, useRef, useState } from "react";
import { styled, keyframes } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

const Container = styled(Box)({
  height: "100%",
  width: "100%",
  display: "flex",
  backgroundColor: "#fffdfa",
  flexDirection: "column",
  alignItems: "center",
});

const Top = styled(Box)({
  borderBottom: "1px solid #1937d6",
  width: "calc(100% - 20px)",
  display: "flex",
  flexDirection: "row",
  padding: "10px",
  justifyContent: "space-between",
});
const Left = styled(Box)({
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  color: "#1937d6",
  fontSize: "1rem",
});
const Right = styled(Box)({});
const Testimony = styled(Box)({
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  color: "#1937d6",
  fontSize: "2vw",
  paddingTop: "50px",
  width: "calc(100vw - 40px)",
});
const Middle = styled(Box)({
  display: "flex",
  flexDirection: "row",
  // gap: "10vw",
  justifyContent: "space-between",
  width: "calc(100% - 20px)",
});
const WrapImg1 = styled(Box)({
  transform: "translate(-30%, 0)",
});
const WrapImg2 = styled(Box)({
  position: "relative",
  // left: "30%",
});
const Testimony1 = styled(Box)({
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  color: "#1937d6",
  fontSize: "2vw",
  paddingTop: "50px",
  width: "calc(100vw - 40px)",
});
const Testimony2 = styled(Box)({
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  color: "#1937d6",
  fontSize: "2vw",
  paddingTop: "80px",
  marginBottom: "5rem",
  width: "calc(100vw - 40px)",
});

const MarqueeContainer = styled(Box)({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  padding: "1rem 0",
  whiteSpace: "nowrap",
  marginTop: "5rem",
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
  fontSize: "2rem",
  color: "#FFF",
  fontWeight: "normal",
});
const StyledSpan = styled("span")({
  fontWeight: 700,
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
  width: "100vw",
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
  marginTop: "80px",
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
  fontSize: "calc(0.5vw + 1vw)",
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
  color: "black",
  fontSize: "calc(3rem + 1vw)",
  textAlign: "left",
  marginTop: "3rem",
  lineHeight: 1,
  marginLeft: "6rem",
  lineHeight: 1.3,
});
const Color = styled(Typography)({
  color: "#1937d6",
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
const ResumeButton = styled(Button)({
  position: "relative",
  overflow: "hidden",
  border: "1px solid #1937d6",
  borderRadius: "50px",
  padding: "0.5rem 1.5rem",
  display: "flex",
  alignItems: "center",
  fontFamily: "Aspekta, sans-serif",
  maxHeight: "40px",
  color: "#1937d6",
  fontWeight: 600,
  transform: "translate(-40%)",
  textTransform: "none",
  marginTop: "100px",
  transition: "color 0.3s ease, border-color 0.3s ease",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#ffcd00",
    zIndex: 0,
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease",
  },
  "&:hover": {
    borderColor: "#ffcd00",
    color: "#fff !important",
  },
  "&:hover *": {
    color: "#fff !important",
    stroke: "#fff !important",
    fill: "#fff !important",
  },
  "&:hover::before": {
    transform: "scaleX(1)",
  },
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
  "& .arrowIcon": {
    marginLeft: "0.5rem",
    transform: "rotate(45deg)",
    transition: "transform 0.3s ease",
  },
});
const About2 = () => {
  const textRefs = useRef([]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    textRefs.current = textRefs.current.filter(Boolean);

    const handleScroll = () => {
      textRefs.current.forEach((line) => {
        if (line) {
          const rect = line.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if (
            rect.top < windowHeight * 0.8 &&
            rect.bottom > windowHeight * 0.2
          ) {
            line.style.opacity = "1";
            line.style.transform = "translateY(0)";
          } else {
            line.style.opacity = "0";
            line.style.transform = "translateY(20px)";
          }
        }
      });
    };

    // Initial check on mount
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Container>
      <Top>
        <Left>NEUANHSAIANHXINLOI</Left>
        <Right>
          <Image src="/assets/bullet.png" alt="bullet" width={16} height={16} />
        </Right>
      </Top>
      <Box sx={{ paddingTop: "50px", width: "calc(100vw - 40px)" }}>
        {[
          "It’s great that you’re here to see more about me! So, you like me? Hmmm… My name is Hung Pham as mentioned quite a few times, and I ",
          "was born in Vietnam. I studied Graphic Design at Greenwich University, where I gained the essential knowledge to support you in your ",
          "work. What I learned here is not just about using tools but also advanced research skills and a deep understanding of images. You can trust me on this because I have graduated.",

        ].map((line, i) => (
          <TextLine
            key={`block1-${i}`}
            ref={(el) => (textRefs.current[i] = el)}
          >
            {line}
          </TextLine>
        ))}
      </Box>

      <Middle>
        <WrapImg1>
          <Image
            src="/assets/Asset 13.png"
            alt="bullet"
            width={600}
            height={250}
          />
        </WrapImg1>
        <a
          href="https://drive.google.com/file/d/1e4tRyBpZJvdji-6OeupQ3Lj1UbcwNtew/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <ResumeButton variant="outlined">
            RESUME
            <img
              src="/assets/resume.png"
              alt="Arrow Icon"
              width="16"
              height="16"
              style={{ marginLeft: "4px", verticalAlign: "middle" }}
            />
          </ResumeButton>
        </a>
        <WrapImg2>
          <Image
            src="/assets/Asset 13 - Copy.png"
            alt="bullet"
            width={500}
            height={250}
          />
        </WrapImg2>{" "}
      </Middle>
      <Box sx={{ paddingTop: "50px", width: "calc(100vw - 40px)" }}>
        {[
          "A little about myself—I am a friendly person, which makes communication with me easy. Don’t hesitate to ask me for multiple design",
          "edits; I’m genuinely a calm and chill guy. I have a strong passion for graphic design, as well as anything related to art and imagery. That’s",
          " a little about me—a relaxed, easygoing person.",
          
        ].map((line, i) => (
          <TextLine
            key={`block2-${i}`}
            ref={(el) => (textRefs.current[5 + i] = el)}
          >
            {line}
          </TextLine>
        ))}
      </Box>

      <Box sx={{ paddingTop: "80px", width: "calc(100vw - 40px)" }}>
        {[
          "I hope we’ll have the opportunity to work together! If you’ve read this far and find me interesting or trustworthy, feel free to contact me.",

        ].map((line, i) => (
          <TextLine
            key={`block3-${i}`}
            ref={(el) => (textRefs.current[9 + i] = el)}
          >
            {line}
          </TextLine>
        ))}
      </Box>

      {/* <Testimony2>
        I hope we’ll have the opportunity to work together! If you’ve read this
        far and find me interesting or trustworthy, feel free to contact me.
      </Testimony2> */}

      <Footer />
    </Container>
  );
};

export default About2;
