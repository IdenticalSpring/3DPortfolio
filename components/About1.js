import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const navItems = [
  { name: "HOME", target: "section1" },
  { name: "ABOUT", target: "section2" },
  { name: "WORK", target: "section3" },
  { name: "CONTACT", target: "section5" },
];
const Wrap = styled(Box)({
  backgroundColor: "rgba(255, 255, 255, 0.7)", // 80% opacity
  paddingTop: "20px",
  margin: 0,
  paddingLeft: "20px",
  paddingRight: "20px",
  paddingBottom: "80px",
});

// In your Section1 component
const StickyWrap = styled(Wrap)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  backgroundColor: "rgba(255, 255, 255, 0.7)", // 80% opacity
});

const HeaderBar = styled(Box)({
  maxWidth: "100vw",
  // marginLeft: "20px",
  // marginRight: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.7)", // 80% opacity
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 1rem",
  width: "calc(100% - 40px)",
  borderTop: "1px solid #1937d6",
  zIndex: 1000, // Ensure header stays on top
  position: "fixed",
  borderBottom: "1px solid #1937d6",
});

const LeftColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginRight: "18rem",
  width: "6rem",
});

const LogoWrapper = styled(Box)({
  position: "relative",
  width: "40px",
  height: "40px",
});

const VerticalDivider = styled("div")({
  width: "1px",
  height: "80px",
  backgroundColor: "#1937d6",
  margin: "0 1rem",
});

const CenterColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.5vw",
});

const NavLink = styled(Typography)({
  color: "#1937d6",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  fontSize: "1.3vw",
  margin: "0 0",
  cursor: "pointer",
  width: "100px",
  textAlign: "center",
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
  backgroundColor: "white",
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
  fontSize: "2rem",
  lineHeight: "1.5",
  color: "#fffdfa", // Initial color
  position: "relative",
  overflow: "hidden",
  display: "inline-block",
  backgroundImage: "linear-gradient(to right, #1937d6 0%, #1937d6 100%)",
  backgroundSize: "0% 100%",
  backgroundRepeat: "no-repeat",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  transition: "background-size 0.8s ease-in-out",
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
    textRef.current = textRef.current.filter(Boolean); // Remove any null values

    const handleScroll = () => {
      textRef.current.forEach((line) => {
        if (line) {
          const rect = line.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (
            rect.top < windowHeight * 0.8 &&
            rect.bottom > windowHeight * 0.2
          ) {
            line.style.backgroundSize = "100% 100%";
          } else {
            line.style.backgroundSize = "0% 100%";
          }
        }
      });
    };

    handleScroll(); // Run once on mount
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
            <VerticalDivider />

            <CenterColumn>
              {navItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <NavLink
                    variant="body1"
                    onClick={() => navigateToPage(item.name)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      opacity:
                        hoveredIndex === null || hoveredIndex === index
                          ? 1
                          : 0.5,
                      transform:
                        hoveredIndex === index
                          ? "translateY(-5px)"
                          : "translateY(0)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.name}
                  </NavLink>
                </React.Fragment>
              ))}
            </CenterColumn>

            <VerticalDivider />
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
        </BottomText>
      </MainContent>
    </>
  );
}
