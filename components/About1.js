import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const navItems = [
  { name: "HOME", target: "section1" },
  // { name: "ABOUT", target: "section2" },
  { name: "WORK", target: "section3" },
  { name: "CONTACT", target: "section5" },
];
const Wrap = styled(Box)({
  backgroundColor: "rgba(255, 255, 255, 0.7)", // 80% opacity
  margin: 0,
});

// In your Section1 component
const StickyWrap = styled(Wrap)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  // backgroundColor: "rgba(255, 255, 255, 0.7)", // 80% opacity
});

const HeaderBar = styled(Box)({
  maxWidth: "100vw",
  // marginLeft: "20px",
  // marginRight: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.7)", // 80% opacity
  display: "flex",
  alignItems: "center",
  height: "70px",
  justifyContent: "space-between",
  padding: "0 1rem",
  width: "100%",
  zIndex: 1000,
  position: "fixed",
});

const LeftColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginRight: "10rem",
  width: "6rem",
});

const LogoWrapper = styled(Box)({
  position: "relative",
  width: "40px",
  height: "40px",
});

const CenterColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10vw",
});

const NavLink = styled(Typography)({
  color: "rgba(25, 55, 214, 0.8)", // Default color with 0.8 opacity
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  fontSize: "calc(1vw + 0.5vw)",
  margin: "0",
  cursor: "pointer",
  width: "100px",
  textAlign: "center",
  position: "relative",
  transition: "color 0.3s ease", // Smooth transition for the text color
  "&:hover": {
    color: "rgba(25, 55, 214, 1)", // Full opacity on hover
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "0",
    height: "2px",
    backgroundColor: "#1937d6",
    transition: "width 0.3s ease",
  },
  "&:hover::after": {
    width: "110%",
  },
});

const VietNam = styled(Typography)({
  color: "#1937d6",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  margin: "0 ",
  cursor: "pointer",
});

const BulletImage = styled("img")({
  margin: "0 0.5rem",
  width: "8px",
  height: "8px",
  display: "inline-block",
  verticalAlign: "middle",
});

const RightColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  fontWeight: 600,
  alignItems: "flex-end",
  fontFamily: "Aspekta, sans-serif",
  marginLeft: "18rem",
  color: "#1937d6",
  width: "6rem",
});
const MainContent = styled(Box)({
  width: "100vw",
  backgroundColor: "#fffdfa",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "100px",
  justifyContent: "center",
  gap: "0",
});

const AboutWrapper = styled(Box)({
  position: "relative",
  display: "block",
  width: "200px",
  height: "100px",
  marginLeft: "20px",
  marginTop: "10px",
  marginRight: "auto",
});

const GifWrapper = styled(Box)({
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  paddingTop: "0",
  transform: "translate(0, -10%)",
  justifyContent: "center",
  alignItems: "center",
  // width: "100%",
  height: "100%",
});

const ContentWrapper = styled(Box)({
  width: "calc(100vw - 40px)",
  display: "flex",
  height: "40vw",
  gap: "1vw",
  flexDirection: "column",
  transform: "translate(0,-60%)",
});

const BottomText = styled(Box)({
  width: "50vw",
  marginLeft: "30vw",
  transform: "translate(0, -150%)",
  overflow: "hidden",
});

const TextLine = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 400,
  fontSize: "1.6vw",
  lineHeight: "1.5",
  color: "#1937d6", // Final text color
  opacity: 0, // Start invisible
  transform: "translateY(20px)", // Start slightly lower
  transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
});

const TextSpan = styled("span")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  color: "#1937d6",
  transform: "scaleX(0)",
  transformOrigin: "left",
  transition: "transform 0.8s ease-in-out",
});
const Bold = styled(Box)({
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 650,
});
const ScrollDownButton = styled(Box)({
  marginTop: "1rem", // Adds space below the BottomText container
  display: "inline-flex", // Using inline-flex so the button only takes as much width as needed
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "#1937d6",
  marginTop: "10vh",
  marginLeft: "20vw",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  fontSize: "1rem",
  opacity: 0.8,
  transition: "opacity 0.3s ease, transform 0.3s ease",
  padding: "0.5rem 1rem",
  border: "1px solid #1937d6",
  borderRadius: "50px", // Creates a pill shape by curving both ends
  "&:hover": {
    opacity: 1,
  },
});

const DownArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#1937d6"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginLeft: "0.5rem" }} // Adds spacing between the text and icon
  >
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
);

export default function About1() {
  const [time, setTime] = useState("");
  const textRef = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter();
  const navigateToPage = (path) => {
    const targetPath =
      path.toLowerCase() === "home" ? "/" : `/${path.toLowerCase()}`;
    router.push(targetPath);
  };
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // Adjust as needed (e.g., scroll by the viewport height)
      behavior: "smooth",
    });
  };

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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    textRef.current = textRef.current.filter(Boolean); // Ensure no null values

    const handleScroll = () => {
      textRef.current.forEach((line) => {
        if (line) {
          const rect = line.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (
            rect.top < windowHeight * 0.8 &&
            rect.bottom > windowHeight * 0.2
          ) {
            // When the line is in view, fade in and move it upward
            line.style.opacity = "1";
            line.style.transform = "translateY(0)";
          } else {
            // When out-of-view, hide it and move it down
            line.style.opacity = "0";
            line.style.transform = "translateY(20px)";
          }
        }
      });
    };

    handleScroll(); // Initial check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <StickyWrap>
        <HeaderBar>
          {/* Left: Logo */}
          <LeftColumn>
            <LogoWrapper>
              <Image
                src="/assets/logo xanh.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </LogoWrapper>
          </LeftColumn>
          <>
            <CenterColumn>
              {navItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <NavLink
                    variant="body1"
                    onClick={() => navigateToPage(item.name)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    // style={{
                    //   opacity:
                    //     hoveredIndex === null || hoveredIndex === index
                    //       ? 1
                    //       : 0.5,
                    //   transform:
                    //     hoveredIndex === index
                    //       ? "translateY(-5px)"
                    //       : "translateY(0)",
                    //   transition: "all 0.3s ease",
                    // }}
                  >
                    {item.name}
                  </NavLink>
                </React.Fragment>
              ))}
            </CenterColumn>
          </>

          <RightColumn>
            <VietNam variant="body1">VIET NAM</VietNam>
            <Typography variant="body1">
              <BulletImage src="/assets/bullet.png" alt="bullet" />
              {time}
            </Typography>
          </RightColumn>
        </HeaderBar>
      </StickyWrap>
      <MainContent>
        <AboutWrapper>
          <Image
            src="/assets/Asset 10.png"
            alt="Logo"
            // layout="fill"
            objectFit="contain"
            width={200}
            height={50}
          />
        </AboutWrapper>
        <GifWrapper>
          <Image
            src="/assets/motion 2_1.gif"
            alt="Logo"
            // layout="fill"
            objectFit="contain"
            width={1200}
            height={1200}
          />
        </GifWrapper>
        <ContentWrapper>
          <Image
            src="/assets/phamhung.png"
            alt="Logo"
            // layout="fill"
            objectFit="contain"
            width={1400}
            height={600}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "auto",
            }}
          />
          <Box sx={{ transform: "translate(0, -130%)" }}>
            <Image
              src="/assets/aka.png"
              alt="Logo"
              width={1400}
              height={200}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </ContentWrapper>
        <BottomText>
          {[
            {
              text: "HELLO, MY NAME IS HUNG PHAM.",
              bold: ["HUNG PHAM"],
            },
            {
              text: "A PASSIONATE AND ADVENTUROUS GRAPHIC DESIGNER,",
              bold: ["A PASSIONATE AND ADVENTUROUS GRAPHIC DESIGNER"],
            },
            {
              text: "ALWAYS EAGER TO EXPLORE NEW IDEAS AND PUSH CREATIVE BOUNDARIES.",
              bold: [],
            },
            {
              text: "WITH A STRONG LOVE FOR BRANDING AND MOTION GRAPHICS",
              bold: ["WITH A STRONG LOVE FOR BRANDING AND MOTION GRAPHICS"],
            },
          ].map((line, index) => {
            const parts = line.text.split(
              new RegExp(`(${line.bold.join("|")})`, "gi")
            );
            return (
              <TextLine key={index} ref={(el) => (textRef.current[index] = el)}>
                {parts.map((part, i) =>
                  line.bold.some(
                    (b) => b.toLowerCase() === part.toLowerCase()
                  ) ? (
                    <Bold component="span" key={i}>
                      {part}
                    </Bold>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </TextLine>
            );
          })}
          <ScrollDownButton onClick={handleScrollDown}>
          SCROLL DOWN TO EXPLORE MORE
          <DownArrowIcon />
        </ScrollDownButton>
        </BottomText>
        
      </MainContent>
    </>
  );
}
