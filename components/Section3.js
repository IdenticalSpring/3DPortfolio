import React, { useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";


const Section3Container = styled(Box)({
  width: "calc(100vw - 40px)",
  height: "160vh",
  backgroundColor: "##1937d6",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  margin: "20px",
  paddingBottom: "100px",
});

const MarqueeContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  display: "flex",
});

const MarqueeText = styled(Typography)({
  display: "flex",
  whiteSpace: "nowrap",
  textTransform: "uppercase",
  animation: "marquee 40s linear infinite",
  fontFamily: "Aspekta, sans-serif",
  color: "#ffcd00",
  // letterSpacing: "1rem",
  fontSize: "7rem",
  "@keyframes marquee": {
    "0%": { transform: "translateX(-50%)" },
    "100%": { transform: "translateX(0%)" }, 
  },
});
const BorderLine = styled(Box)({
  position: "absolute",
  top: "150px",
  left: 0,
  width: "calc(100% - 40px)",
  height: "1px",
  backgroundColor: "white",
});

const CenterContent = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "1440px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0",
});

const ImageTitle = styled(Image)({
  width: "450px",
  height: "300px",
  transform: "translate(0%, 0)",
  marginTop: "15rem",
});

const TrackingEyeContainer = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "300px",
  alignItems: "center",
  height: "300px",
  padding: "auto",
  transform: "translate(-4%, 0%)",
});

const TrackingOuterEye = styled(Box)({
  position: "relative",
  width: "250px",
  height: "250px",
});

const TrackingCenterEye = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100px",
  height: "100px",
  transform: "translate(-50%, -50%)",
});

const ProjectsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
  "&:hover div:not(:hover)": { opacity: 0.4 },
  width: "100%",
});

const ProjectItemContainer = styled("div")({
  textAlign: "center", 
  color: "#FFF",  
  fontFamily: "Aspekta, sans-serif",
  
});

const YearSpan = styled("span")({
  fontSize: "1.5rem",
  verticalAlign: "top",
  paddingTop: "0.5rem",
  marginRight: "0.5rem",
  opacity: 0.8,
});

const CategorySpan = styled("span")({
  fontSize: "1.5rem",
  verticalAlign: "top",
  marginLeft: "0.5rem",
  opacity: 0.8,
});

const MainTitle = styled("span")({
  fontSize: "3.5rem",
  margin: "0 0.5rem",
});

function ProjectItem({ year, title, category }) {
  return (
    <ProjectItemContainer>
      <YearSpan>({year})</YearSpan>
      <MainTitle>{title}</MainTitle>
      <CategorySpan>({category})</CategorySpan>
    </ProjectItemContainer>
  );
}

export default function Section3() {
  const trackingPupilRef = useRef(null);
  const maxDisplacement = 30;

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
      const parentRect =
        trackingPupilRef.current.parentNode.getBoundingClientRect();
      const centerX = parentRect.left + parentRect.width / 2;
      const centerY = parentRect.top + parentRect.height / 1.5;

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
          WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK
          WORK WORK WORK WORK 
        </MarqueeText>
        <MarqueeText aria-hidden="true">
          WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK
          WORK WORK WORK WORK 
        </MarqueeText>
        <MarqueeText>
          WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK
          WORK WORK WORK WORK 
        </MarqueeText>
        <MarqueeText aria-hidden="true">
          WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK
          WORK WORK WORK WORK 
        </MarqueeText>
        <MarqueeText>
          WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK
          WORK WORK WORK WORK 
        </MarqueeText>
        <MarqueeText aria-hidden="true">
          WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK
          WORK WORK WORK WORK 
        </MarqueeText>
      </MarqueeContainer>
      <BorderLine />
      <CenterContent>
        <ImageTitle
          src="/assets/Asset 16.png"
          alt="Title Image"
          width={300}
          height={100}
        />
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
