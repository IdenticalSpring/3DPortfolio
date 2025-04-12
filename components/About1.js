import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "./Header";

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
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100vw",
  height: "100px",
  marginLeft: "20px",
  marginTop: "10px",
  marginRight: "auto",
});

const GifWrapper = styled(Box)({
  width: "80%",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  paddingTop: "0",
  transform: "translate(0, -10%)",
  justifyContent: "center",
  alignItems: "center",
  // width: "100%",
  height: "80%",
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

  useEffect(() => {
    // Remove any undefined or null references.
    textRef.current = textRef.current.filter(Boolean);

    const handleScroll = () => {
      textRef.current.forEach((line) => {
        if (line) {
          const rect = line.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (
            rect.top < windowHeight * 0.8 &&
            rect.bottom > windowHeight * 0.2
          ) {
            // When the line is in view, fade it in and slide upward.
            line.style.opacity = "1";
            line.style.transform = "translateY(0)";
          } else {
            // When out-of-view, hide it and slide downward.
            line.style.opacity = "0";
            line.style.transform = "translateY(20px)";
          }
        }
      });
    };

    // Initial check on mount.
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
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
            width={1000}
            height={1000}
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
