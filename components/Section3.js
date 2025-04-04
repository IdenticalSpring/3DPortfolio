import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Wrap = styled(Box)({
  backgroundColor: "#1937d6",
  paddingTop: "20px",
  margin: 0,
  paddingLeft: "20px",
  paddingRight: "20px",
});

const Section3Container = styled(Box)({
  width: "calc(100vw - 40px)",
  height: "160vh",
  backgroundColor: "#1937d6",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  // margin: "20px",
  paddingBottom: "100px",
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
  transform: "translate(0%, -20%)",
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
  gap: "0",
  transform: "translate(3%, 0%)",
  "&:hover div:not(:hover)": { opacity: 0.4 },
  width: "100vw",
});

const ProjectItemContainer = styled("div")({
  textAlign: "center",
  color: "#FFF",
  fontFamily: "Aspekta, sans-serif",
  cursor: "default",
  "& a:hover": { // Add this selector
    opacity: "1 !important",
    transform: "none !important",
  },
});

const YearSpan = styled("span")({
  fontSize: "1.5rem",
  verticalAlign: "top",
  paddingTop: "0.5rem",
  marginRight: "0.5rem",
  cursor: "default",

  opacity: 0.8,
});

const CategorySpan = styled("span")({
  fontSize: "1.5rem",
  verticalAlign: "top",
  marginLeft: "0.5rem",
  cursor: "default",

  opacity: 0.8,
});

const MainTitle = styled("span")({
  fontSize: "3.5rem",
  margin: "0 0.5rem",
  letterSpacing: "-1px",
  cursor: "default",
});
const FloatingImage = styled(Image)({
  position: "fixed",
  pointerEvents: "none",
  zIndex: 990999,
  transform: "translate(-48%, 210%)",
  transition: "transform 0.1s ease-out",
});
const ProjectLink = styled('a')({
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'default',
  display: 'block',
  width: '100%',
});

function ProjectItem({ id, year, title, category, onHover }) {
  return (
    <Link href={`/work/${id}`} passHref legacyBehavior>
      <ProjectLink>
        <ProjectItemContainer
          onMouseEnter={(e) => onHover(id, e)}
          onMouseMove={(e) => onHover(id, e)}
          onMouseLeave={() => onHover(null, null)}
        >
          <YearSpan>({year})</YearSpan>
          <MainTitle>{title}</MainTitle>
          <CategorySpan>({category})</CategorySpan>
        </ProjectItemContainer>
      </ProjectLink>
    </Link>
  );
}

export default function Section3() {
  const trackingPupilRef = useRef(null);
  const maxDisplacement = 30;
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoverPosition, setHoverPosition] = useState(null);

  const projects = [
    { id: 1, year: "2023", title: "THORN BRANDING", category: "Branding" },
    { id: 2, year: "2023", title: "CYBERBULLY ANIMATION", category: "Motion" },
    { id: 3, year: "2024", title: "PUPER WORKSHOP", category: "Space" },
    {
      id: 4,
      year: "2024",
      title: "HUE ROYAL COURT MUSIC",
      category: "Publication",
    },
    { id: 5, year: "2024", title: "HUMAN TYPOGRAPHY", category: "Motion" },
    {
      id: 6,
      year: "2025",
      title: "VIETNAMESE BUDDHISM",
      category: "Infographic",
    },
  ];
  const handleProjectHover = (projectId, e) => {
    setHoveredProject(projectId);
    if (e) {
      setHoverPosition({ x: e.clientX, y: e.clientY });
    } else {
      setHoverPosition(null);
    }
  };

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
    <Wrap>
      <Section3Container>
        {/* Marquee across the top */}
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
            </MarqueeText><MarqueeText>
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
            </MarqueeText><MarqueeText>
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
            </MarqueeText><MarqueeText>
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
            </MarqueeText><MarqueeText>
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
            </MarqueeText><MarqueeText>
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
            </MarqueeText><MarqueeText>
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
        {/* <BorderLine /> */}
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

          <ProjectsContainer>
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                id={project.id}
                {...project}
                onHover={handleProjectHover}
              />
            ))}
          </ProjectsContainer>

          {hoveredProject && hoverPosition && (
            <FloatingImage
              src={`/assets/work/${hoveredProject}.png`}
              alt="Project Preview"
              style={{
                left: hoverPosition.x,
                top: hoverPosition.y,
              }}
              width={500}
              height={300}
            />
          )}
        </CenterContent>
      </Section3Container>
    </Wrap>
  );
}
