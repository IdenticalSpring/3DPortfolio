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
// const Wrap = styled(Box)({
//   margin: 0,
//   padding: 0,
//   backgroundColor: "#1937d6",
//   paddingTop: "20px",
//   marginTop: "20px"
// });
const Wrap = styled(Box)({
  backgroundColor: "#1937d6",
  paddingTop: "20px",
  margin: 0,
  paddingLeft: "20px",
  paddingRight: "20px",
});
const Section2Container = styled(Box)({
  width: "calc(100vw - 40px)",
  height: "200vh",
  backgroundColor: "#1937d6",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // margin: "20px",
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
  paddingTop: "0.6rem",
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

const Content = styled(Box)({
  maxWidth: "100vw",
  textAlign: "center",
  color: "#fff",
});

const FadeText = styled(Typography)(({ scale, opacity }) => ({
  fontFamily: "Aspekta, sans-serif",
  opacity: opacity,
  lineHeight: 1.2,
  fontWeight: 500,
  fontSize: "3.4rem",
  transition: "all 0.3s ease",
  transform: `scale(${scale})`,
  width: "100%",
}));

const FadeText1 = styled(Typography)(({ scale, opacity }) => ({
  fontFamily: "Aspekta, sans-serif",
  opacity: opacity,
  lineHeight: 1.2,
  fontWeight: 500,
  fontSize: "3.4rem",
  transition: "all 0.3s ease",
  transform: `scale(${scale})`,
  width: "100%",
}));
const FadeText2 = styled(Typography)(({ scale, opacity }) => ({
  fontFamily: "Aspekta, sans-serif",
  marginTop: "500px",
  opacity: opacity,
  lineHeight: 1.2,
  fontWeight: 500,
  fontSize: "3.4rem",
  transition: "all 0.3s ease",
  transform: `scale(${scale})`,
  width: "100%",
  color: "#ffcd00"
}));
const BottomRightContainer = styled(Box)({
  position: "absolute",
  right: "7rem",
  marginTop: "10rem",
  width: "280px",
  height: "280px",
});

const BigOuterEye = styled(Box)({
  position: "absolute",
  width: "50%",
  height: "50%",
  zIndex: 3,
  marginLeft: "15%",
  marginTop: "15%",
  // transform: "translate(30%, 30%)",
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
  transform: "translate(-50%, -30%)",
  width: "70vw",
  height: "30vw",
});

const StyleLink = styled("a")({
  textDecoration: "none",
  color: "#FFF",
});

const ChildText = styled(Typography)(({ scale, opacity }) => ({
  fontFamily: "Aspekta, sans-serif",
  opacity: opacity,
  lineHeight: 1.2,
  fontWeight: 500,
  fontSize: "1rem",
  transition: "all 0.3s ease",
  transform: `scale(${scale})`,
  width: "100%",
}));

export default function Section2() {
  const textRefs = [useRef(null), useRef(null), useRef(null)];
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const centerThreshold = viewportHeight * 0.4;

      // Check which text is closest to center
      let closestIndex = -1;
      let smallestDistance = Infinity;

      textRefs.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(viewportHeight / 2 - elementCenter);

          if (distance < centerThreshold && distance < smallestDistance) {
            smallestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Wrap>
      <Section2Container>
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
          <FadeText
            ref={textRefs[0]}
            sx={{
              marginBottom: "0.5rem",
              opacity: activeIndex === 0 ? 1 : 0.7,
              transform: activeIndex === 0 ? "scale(1.1)" : "scale(1)",
            }}
          >
            What's up, my name is Hung Pham, <br />
            A.k.a Neuahnsaianhxinloi
          </FadeText>

          <FadeText1
            ref={textRefs[1]}
            sx={{
              marginBottom: "0.5rem",
              opacity: activeIndex === 1 ? 1 : 0.7,
              transform: activeIndex === 1 ? "scale(1.1)" : "scale(1)",
            }}
          >
            A passionate and adventurous
            <br /> Graphic Designer, With a strong love for
            <br /> Branding and Motion Graphics.
          </FadeText1>
          <StyleLink href={`/about`} passHref legacyBehavior>
            <FadeText2
              ref={textRefs[2]}
              sx={{
                opacity: activeIndex === 2 ? 1 : 0.7,
                transform: activeIndex === 2 ? "scale(1.1)" : "scale(1)",
              }}
            >
              More about me...?
              <ChildText
                ref={textRefs[2]}
                sx={{
                  opacity: activeIndex === 2 ? 1 : 0.7,
                  transform: activeIndex === 2 ? "scale(1.1)" : "scale(1)",
                }}
              >
                CLICK HERE IF YOU LOVE ME
              </ChildText>
            </FadeText2>
          </StyleLink>
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
    </Wrap>
  );
}
