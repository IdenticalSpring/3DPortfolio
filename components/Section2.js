import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

// ==========================
// STYLED COMPONENTS
// ==========================

// Container with top border pseudo-element spanning 90% width
const Section2Container = styled(Box)({
  width: "100vw",
  height: "100vh",
  backgroundColor: "##1937d6",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "5%", // centers 90% width border
    width: "90%",
    borderTop: "1px solid #FFF",
  },
});

// Top border label spanning 90% width with text at left and bullet at right
const TopBorderLabel = styled(Box)({
  position: "absolute",
  top: 0,
  left: "5%",
  width: "90%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: "0.3rem",
});

// ---------- Top-Left Eye ----------
const EyeWrapper = styled(Box)({
  position: "absolute",
  top: "4rem",
  left: "20rem",
  width: 100,
  height: 100,
});

const TopLeftLabel = styled(Typography)({
  position: "absolute",
  top: "-1.2rem", // positioned above the outer eye
  left: 0,
  color: "#fff",
  fontSize: "0.8rem",
  fontWeight: 600,
  opacity: 0.7,
  transition: "opacity 0.2s ease",
  "&:hover": {
    opacity: 1,
  },
  fontFamily: "Aspekta, sans-serif",
});

const OuterEye = styled(Box)({
  position: "relative",
  width: "120%",
  height: "120%",
});

const CenterEye = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "70%",
  width: 40,
  height: 40,
  transform: "translate(-50%, -50%)",
});

// ---------- Center Content ----------
const Content = styled(Box)({
  maxWidth: "60rem",
  textAlign: "center",
  color: "#fff",
});

const FadeText = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  opacity: 0.7,
  transition: "opacity 0.2s ease, transform 0.3s ease",
  "&:hover": {
    opacity: 1,
    transform: "scale(1.1)",
  },
});

// ---------- Bottom-Right Eye (Other Eye) ----------
const BottomRightContainer = styled(Box)({
  position: "absolute",
  right: "10rem",
  bottom: "5rem",
  width: "150px",
  height: "150px",
});

const BackEye = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "150%",
  height: "150%",
  zIndex: 1,
});

const BigOuterEye = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  zIndex: 2,
  // transform: "scaleX(-1) scaleY(-1)",
});

// Combine translate and flip for the bottom pupil
const BigCenterEye = styled(Box)({
  position: "absolute",
  top: "40%",
  left: "40%",
  width: 45,
  height: 45,
  // transform: "translate(-50%, -50%) scaleX(-1) scaleY(-1)",
});


export default function Section2() {
  // Refs for top-left pupil and bottom-right pupil
  const topLeftPupilRef = useRef(null);
  const bottomPupilRef = useRef(null);

  // Add mousemove listener to update the pupil positions
  useEffect(() => {
    function handleMouseMove(e) {
      // Update top-left pupil (CenterEye) without flipping
      if (topLeftPupilRef.current) {
        const rect = topLeftPupilRef.current.parentNode.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        let offsetX = (e.clientX - centerX) * 0.2;
        let offsetY = (e.clientY - centerY) * 0.2;
        const displacement = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
        const maxDisp = 20;
        if (displacement > maxDisp) {
          const scale = maxDisp / displacement;
          offsetX *= scale;
          offsetY *= scale;
        }
        topLeftPupilRef.current.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
      }
      // Update bottom-right pupil (BigCenterEye)
      if (bottomPupilRef.current) {
        const rect = bottomPupilRef.current.parentNode.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        let offsetX = (e.clientX - centerX) * 0.2;
        let offsetY = (e.clientY - centerY) * 0.2;
        const displacement = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
        const maxDisp = 30;
        if (displacement > maxDisp) {
          const scale = maxDisp / displacement;
          offsetX *= scale;
          offsetY *= scale;
        }
        // Invert offsets for the flipped container so movement remains consistent with mouse:
        bottomPupilRef.current.style.transform = `translate(calc(-50% - ${offsetX}px), calc(-50% - ${offsetY}px)) scaleX(-1) scaleY(-1)`;
      }
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Section2Container>
      {/* Top border label with left text and right bullet */}
      <TopBorderLabel>
        <Typography
          variant="body2"
          sx={{
            color: "#FFF",
            fontFamily: "Nauyryzdkeds, sans-serif",
            fontSize: "1rem",
          }}
        >
          NEUAHNSAIAHNXINLOI
        </Typography>
        <Image src="/assets/bullet.png" alt="bullet" width={16} height={16} />
      </TopBorderLabel>

      {/* ---------- Top-Left Eye ---------- */}
      <EyeWrapper>
        <OuterEye>
          <Image
            src="/assets/eye1.png"
            alt="Outer Eye"
            fill
            style={{ objectFit: "contain" }}
          />
          <CenterEye ref={topLeftPupilRef}>
            <Image
              src="/assets/center_eye1.png"
              alt="Center Eye"
              fill
              style={{ objectFit: "contain" }}
            />
          </CenterEye>
        </OuterEye>
      </EyeWrapper>

      {/* ---------- Center Content ---------- */}
      <Content>
        <FadeText variant="h3" sx={{ marginBottom: "1rem" }}>
          What's up, my name is Hung Pham, <br />
          A.k.a Neuahnsaianhxinloi
        </FadeText>
        <FadeText variant="h5" sx={{ marginBottom: "1rem" }}>
          A passionate and adventurous Graphic Designer, <br />
          with a strong love for Branding and Motion Graphics.
        </FadeText>
        <FadeText variant="h6">More about me...?</FadeText>
      </Content>

      {/* ---------- Bottom-Right Eye (Other Eye) ---------- */}
      <BottomRightContainer>
        <BackEye>
          <Image
            src="/assets/back_eye2.png"
            alt="Back Eye"
            fill
            style={{ objectFit: "contain" }}
          />
        </BackEye>
        <BigOuterEye>
          <Image
            src="/assets/eye11.png"
            alt="Big Outer Eye"
            fill
            style={{ objectFit: "contain" }}
          />
          <BigCenterEye ref={bottomPupilRef}>
            <Image
              src="/assets/center_eye1.png"
              alt="Big Center Eye"
              fill
              style={{ objectFit: "contain" }}
            />
          </BigCenterEye>
        </BigOuterEye>
      </BottomRightContainer>

      {/* ---------- HERO SECTION ---------- */}
    </Section2Container>
  );
}
