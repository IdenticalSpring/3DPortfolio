import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

// ==========================
// STYLED COMPONENTS
// ==========================

// Full-screen container with blue background (#0000FF)
const Section2Container = styled(Box)({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#0000FF",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
});

// ---------- Top-Left Eye ----------
const EyeWrapper = styled(Box)({
  position: "absolute",
  top: "2rem",
  left: "2rem",
  width: 100,
  height: 100,
});

const TopLeftLabel = styled(Typography)({
  position: "absolute",
  top: "-1.2rem", // positioned above the outer eye
  left: 0,
  color: "#fff",
  fontSize: "0.8rem",
  opacity: 0.7,
  transition: "opacity 0.2s ease",
  "&:hover": {
    opacity: 1,
  },
  fontFamily: "Aspekta, sans-serif",
});

const OuterEye = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
});

const CenterEye = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 30,
  height: 30,
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

// ---------- Bottom-Right Eye & Back Image ----------
// Container for both the back image and the big eye overlayed
const BottomRightContainer = styled(Box)({
  position: "absolute",
  right: "2rem",
  bottom: "2rem",
  width: 150,
  height: 150,
});

const BackEye = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
});

const BigOuterEye = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  zIndex: 2,
});

const BigCenterEye = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 45,
  height: 45,
  transform: "translate(-50%, -50%)",
});

// ==========================
// MAIN COMPONENT
// ==========================
export default function Section2() {
  // Refs for the top-left and bottom-right pupils
  const pupilRef = useRef(null);
  const bottomPupilRef = useRef(null);

  // Maximum displacement for top-left eye (in pixels)
  const maxDisplacement = 20;
  // Maximum displacement for bottom-right eye
  const maxDisplacementBottom = 30;

  // Update pupil positions based on mouse movement
  useEffect(() => {
    function handleMouseMove(e) {
      // Update top-left pupil
      if (pupilRef.current) {
        const rect = pupilRef.current.parentNode.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        let offsetX = (e.clientX - centerX) * 0.2;
        let offsetY = (e.clientY - centerY) * 0.2;
        const displacement = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
        if (displacement > maxDisplacement) {
          const scale = maxDisplacement / displacement;
          offsetX *= scale;
          offsetY *= scale;
        }
        pupilRef.current.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
      }
      // Update bottom-right pupil
      if (bottomPupilRef.current) {
        const rect = bottomPupilRef.current.parentNode.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        let offsetX = (e.clientX - centerX) * 0.2;
        let offsetY = (e.clientY - centerY) * 0.2;
        const displacement = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
        if (displacement > maxDisplacementBottom) {
          const scale = maxDisplacementBottom / displacement;
          offsetX *= scale;
          offsetY *= scale;
        }
        bottomPupilRef.current.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
      }
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Section2Container>
      {/* ---------- Top-Left Eye ---------- */}
      <EyeWrapper>
        <TopLeftLabel variant="body2">NEUAHNSAIAHNXINLOI</TopLeftLabel>
        <OuterEye>
          <Image
            src="/assets/eye1.png"
            alt="Outer Eye"
            fill
            style={{ objectFit: "contain" }}
          />
          <CenterEye ref={pupilRef}>
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

      {/* ---------- Bottom-Right Eye Over Back Image ---------- */}
      <BottomRightContainer>
        {/* Back image (back_eye2.png) rendered as a background */}
        <BackEye>
          <Image
            src="/assets/back_eye2.png"
            alt="Back Eye"
            fill
            style={{ objectFit: "contain" }}
          />
        </BackEye>
        {/* Big eye overlayed on top */}
        <BigOuterEye>
          <Image
            src="/assets/eye1.png"
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
    </Section2Container>
  );
}
