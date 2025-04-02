import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { styled, keyframes } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

// ==========================
// STYLED COMPONENTS
// ==========================
const jelly = keyframes`
  0% {
    transform: scale(0.8, 0.8);
  }
  25% {
    transform: scale(1.2, 0.8); /* Wider horizontally, squished vertically */
  }
  50% {
    transform: scale(1, 1);
  }
  75% {
    transform: scale(0.8, 1.2); /* Narrower horizontally, stretched vertically */
  }
  100% {
    transform: scale(1, 1);
  }
`;
// Container with top border pseudo-element spanning 90% width
const Section2Container = styled(Box)({
  width: "calc(100vw - 40px)",
  height: "140vh",
  backgroundColor: "#1937d6",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "20px",
  // padding: "2rem",
  borderTop: "1px solid #FFF",

  // "&::before": {
  //   content: '""',
  //   position: "absolute",
  //   top: 0,
  //   left: "5%", // centers 90% width border
  //   width: "90%",
  // },
});

// Top border label spanning 90% width with text at left and bullet at right
const TopBorderLabel = styled(Box)({
  position: "absolute",
  top: 0,
  // left: "5%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: "1rem",
});

// ---------- Top-Left Eye ----------
const EyeWrapper = styled(Box)({
  position: "absolute",
  top: "9rem",
  left: "12rem",
  width: "7em",
  height: "7rem",
  "&:hover": {
    animation: `${jelly} 0.5s ease-in-out`,
  },
});

const OuterEye = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
});

const CenterEye = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "70%",
  width: 40,
  height: 40,
  transform: "translate(-50%, -50%)",
});

const Content = styled(Box)({
  maxWidth: "80vw",
  marginTop: "7rem",
  textAlign: "center",
  color: "#fff",
});

const FadeText = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  opacity: 0.7,
  lineHeight: 1.2,
  fontWeight: 400,
  fontSize: "3.4rem",
  transition: "opacity 0.2s ease, transform 0.3s ease",
  "&:hover": {
    opacity: 1,
    transform: "scale(1.1)",
  },
});

const BottomRightContainer = styled(Box)({
  position: "absolute",
  right: "7rem",
  marginTop: "50rem",
  width: "280px",
  height: "280px",
  
});

const BigOuterEye = styled(Box)({
  position: "absolute", 
  width: "50%",
  height: "50%",
  zIndex: 3, 
  transform: "translate(30%, 30%)",
  "&:hover": {
    animation: `${jelly} 0.3s ease-in-out`,
  },
});

const BackEye = styled(Box)({
  position: "absolute", 
  width: "100%",
  height: "100%",
  zIndex: 2,
});

const StringBottom = styled(Box)({
  position: "absolute",
  bottom: "0",
  top: "100vh",
  left: "2%",
  transform: "translate(-50%, 0)",
  width: "50vw",
  height: "20vw",
});
export default function Section2() {
  // const topLeftPupilRef = useRef(null);
  // const bottomPupilRef = useRef(null);
  // const contentRef = useRef(null);
  const [fadeOpacity, setFadeOpacity] = useState(0.7);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (contentRef.current) {
  //       const rect = contentRef.current.getBoundingClientRect();
  //       const contentCenterY = rect.top + rect.height / 2;
  //       const windowCenterY = window.innerHeight / 2;
  //       const distance = Math.abs(contentCenterY - windowCenterY);
  //       const threshold = 100; // adjust threshold as needed
  //       if (distance < threshold) {
  //         setFadeOpacity(1);
  //       } else {
  //         setFadeOpacity(0.7);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   // Run once on mount
  //   handleScroll();
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  // // Add mousemove listener to update the pupil positions
  // useEffect(() => {
  //   function handleMouseMove(e) {
  //     // Update top-left pupil (CenterEye) without flipping
  //     if (topLeftPupilRef.current) {
  //       const rect = topLeftPupilRef.current.parentNode.getBoundingClientRect();
  //       const centerX = rect.left + rect.width / 2;
  //       const centerY = rect.top + rect.height / 2;
  //       let offsetX = (e.clientX - centerX) * 0.2;
  //       let offsetY = (e.clientY - centerY) * 0.2;
  //       const displacement = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
  //       const maxDisp = 20;
  //       if (displacement > maxDisp) {
  //         const scale = maxDisp / displacement;
  //         offsetX *= scale;
  //         offsetY *= scale;
  //       }
  //       topLeftPupilRef.current.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
  //     }
  //     // Update bottom-right pupil (BigCenterEye)
  //     if (bottomPupilRef.current) {
  //       const rect = bottomPupilRef.current.parentNode.getBoundingClientRect();
  //       const centerX = rect.left + rect.width / 2;
  //       const centerY = rect.top + rect.height / 2;
  //       let offsetX = (e.clientX - centerX) * 0.2;
  //       let offsetY = (e.clientY - centerY) * 0.2;
  //       const displacement = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
  //       const maxDisp = 30;
  //       if (displacement > maxDisp) {
  //         const scale = maxDisp / displacement;
  //         offsetX *= scale;
  //         offsetY *= scale;
  //       }
  //       // Invert offsets for the flipped container so movement remains consistent with mouse:
  //       bottomPupilRef.current.style.transform = `translate(calc(-50% - ${offsetX}px), calc(-50% - ${offsetY}px)) scaleX(-1) scaleY(-1)`;
  //     }
  //   }
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  return (
    <Section2Container>
      <TopBorderLabel>
        <Typography
          variant="body2"
          sx={{
            color: "#FFF",
            fontFamily: "Nauyryzdkeds, sans-serif",
            fontSize: "1.3rem",
          }}
        >
          NEUAHNSAIAHNXINLOI
        </Typography>
        <Image src="/assets/bullet.png" alt="bullet" width={16} height={16} />
      </TopBorderLabel>
        <EyeWrapper>
          <OuterEye>
            <Image
              src="/assets/Asset 14.png"
              alt="Outer Eye"
              fill
              style={{ objectFit: "contain" }}
            />
          </OuterEye>
        </EyeWrapper>
        <Content>
          <FadeText sx={{ marginBottom: "0.5rem" }}>
            What's up, my name is Hung Pham, <br />
            A.k.a Neuahnsaianhxinloi
          </FadeText>
          <FadeText sx={{ marginBottom: "0.5rem" }}>
            A passionate and adventurous
            <br /> Graphic Designer, With a strong love for
            <br /> Branding and Motion Graphics.
          </FadeText>
          <FadeText>More about me...?</FadeText>
        </Content>
        <BottomRightContainer>
          <BigOuterEye>
            <Image
              src="/assets/Asset 17.png"
              alt="Big Outer Eye"
              fill
              style={{ objectFit: "contain" }}
            />
          </BigOuterEye>
          <BackEye>
          <Image
              src="/assets/back_eye2.png"
              alt="Big Outer Eye"
              fill
              style={{ objectFit: "contain" }}
            />
          </BackEye>
        </BottomRightContainer>
        <StringBottom>
          <Image
            src="/assets/Asset 13.png"
            alt="String"
            fill
            style={{ objectFit: "contain" }}
          />
        </StringBottom>

    </Section2Container>
  );
}
