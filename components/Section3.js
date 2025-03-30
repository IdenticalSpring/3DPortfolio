import React, { useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

// ======================
// STYLED COMPONENTS
// ======================

// Section container with blue background
const Section3Container = styled(Box)({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#0000FF",
  position: "relative",
  overflow: "hidden",
});

// Marquee (scrolling text at the top)
const MarqueeContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

const MarqueeText = styled(Typography)({
  display: "inline-block",
  paddingLeft: "100%", // start offscreen left
  animation: "marquee 15s linear infinite",
  "@keyframes marquee": {
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(100%)" },
  },
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
  fontSize: "2rem",
});

// Center content container - now all items are centered
const CenterContent = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // center horizontally
  gap: "1.5rem",
});

// Title container with work.png background; center its content
const TitleContainer = styled(Box)({
  position: "relative",
  width: "300px",
  height: "100px",
  backgroundImage: "url('/assets/work.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center", // center the background
  backgroundSize: "contain",
  display: "flex",
  alignItems: "center",
  justifyContent: "center", // center the title text horizontally
});

const WorkTitle = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  fontSize: "3rem",
  color: "#FFF",
  zIndex: 1,
  textAlign: "center",
});

// Tracking eye container (using eye3 and center_eye3)
const TrackingEyeContainer = styled(Box)({
  position: "relative",
  width: "150px",
  height: "150px",
});

const TrackingOuterEye = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
});

const TrackingCenterEye = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "45px",
  height: "45px",
  transform: "translate(-50%, -50%)",
});

// ---------------------
// PROJECT ITEMS STYLES
// ---------------------
const ProjectsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // center each item
  gap: "1rem",
  width: "100%",
});

const ProjectItemContainer = styled("div")({
  textAlign: "center", // center text in each project item
  color: "#FFF",
  fontFamily: "Aspekta, sans-serif",
});

// Smaller text for year and category, aligned at the top
const YearSpan = styled("span")({
  fontSize: "1rem",
  verticalAlign: "top",
  marginRight: "0.5rem",
  opacity: 0.8,
});

const CategorySpan = styled("span")({
  fontSize: "1rem",
  verticalAlign: "top",
  marginLeft: "0.5rem",
  opacity: 0.8,
});

// Main text in larger font
const MainTitle = styled("span")({
  fontSize: "2rem",
  margin: "0 0.5rem",
});

// Helper component for each project item
function ProjectItem({ year, title, category }) {
  return (
    <ProjectItemContainer>
      <YearSpan>({year})</YearSpan>
      <MainTitle>{title}</MainTitle>
      <CategorySpan>({category})</CategorySpan>
    </ProjectItemContainer>
  );
}

// ======================
// MAIN COMPONENT
// ======================
export default function Section3() {
  // Ref for the tracking eye pupil
  const trackingPupilRef = useRef(null);
  // Maximum displacement for the tracking pupil
  const maxDisplacement = 30;

  // Array of projects
  const projects = [
    { year: "2023", title: "THORN BRANDING", category: "Branding" },
    { year: "2023", title: "CYBERBULLY ANIMATION", category: "Motion" },
    { year: "2024", title: "PUPER WORKSHOP", category: "Space" },
    { year: "2024", title: "HUE ROYAL COURT MUSIC", category: "Publication" },
    { year: "2024", title: "HUMAN TYPOGRAPHY", category: "Motion" },
    { year: "2025", title: "VIETNAMESE BUDDHISM", category: "Infographic" },
  ];

  useEffect(() => {
    function handleMouseMove(e) {
      if (!trackingPupilRef.current) return;
      const parentRect = trackingPupilRef.current.parentNode.getBoundingClientRect();
      const centerX = parentRect.left + parentRect.width / 2;
      const centerY = parentRect.top + parentRect.height / 2;

      let offsetX = (e.clientX - centerX) * 0.2;
      let offsetY = (e.clientY - centerY) * 0.2;
      const displacement = Math.sqrt(offsetX * offsetX + offsetY * offsetY);

      if (displacement > maxDisplacement) {
        const scale = maxDisplacement / displacement;
        offsetX *= scale;
        offsetY *= scale;
      }

      trackingPupilRef.current.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Section3Container>
      {/* Marquee across the top */}
      <MarqueeContainer>
        <MarqueeText>
          Work Work Work Work Work &nbsp; Work Work Work Work Work &nbsp; Work Work Work Work Work &nbsp;
        </MarqueeText>
      </MarqueeContainer>

      {/* Center content */}
      <CenterContent>
        {/* Title with work.png background */}
        <TitleContainer>
          <WorkTitle>WORK</WorkTitle>
        </TitleContainer>

        {/* Tracking Eye using eye3 and center_eye3 */}
        <TrackingEyeContainer>
          <TrackingOuterEye>
            <Image
              src="/assets/eye3.png"
              alt="Tracking Outer Eye"
              layout="fill"
              objectFit="contain"
            />
            <TrackingCenterEye ref={trackingPupilRef}>
              <Image
                src="/assets/center_eye3.png"
                alt="Tracking Center Eye"
                layout="fill"
                objectFit="contain"
              />
            </TrackingCenterEye>
          </TrackingOuterEye>
        </TrackingEyeContainer>

        {/* Project list */}
        <ProjectsContainer>
          {projects.map((p, idx) => (
            <ProjectItem
              key={idx}
              year={p.year}
              title={p.title}
              category={p.category}
            />
          ))}
        </ProjectsContainer>
      </CenterContent>
    </Section3Container>
  );
}
