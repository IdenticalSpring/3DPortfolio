import React, { useEffect, useRef } from "react";
import Header from "./Header";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "./Footer";
import { useRouter } from "next/router";
const Container = styled(Box)({
  display: "flex",
  overflowX: "hidden",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100%",
});
const Tittle = styled(Box)({
  marginTop: "20px",
  width: "calc(100vw - 40px)",
  padding: "0",
  marginTop: "100px",
  height: "calc(9vw + 1vw)",

});
const Pic = styled(Box)({
  marginTop: "20px",
  display: "flex",
  flexDirection: "row",
  width: "calc(100vw - 40px)",
  padding: "0",
  justifyContent: "center",
});

const Text1 = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  width: "100%",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 550,
  fontSize: "2rem",
  color: "#1937d6",
});
const Pic1 = styled(Box)({
  width: "calc(80vw - 40px)",
  padding: "0",
  transform: "translateY(-10%)",
});
const Pic1Footer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "calc(100vw - 40px)",
  marginTop: "calc(10vw + 1vw)",
});
const Header1 = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  width: "100%",
  borderBottom: "2px solid #1937d6",
  paddingBottom: "10px",
});
const HeadText = styled(Typography)({
  fontSize: "calc(0.1vw + 1vw)",
  color: "#1937d6",
});
const Text2 = styled(Box)(({ inview }) => ({
  display: "flex",
  lineHeight: "calc(1vw + 1vw)",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  width: "100%",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 350,
  fontSize: "calc(0.7vw + 1vw)",
  color: "black",
  marginTop: "3rem",
  padding: "20px",
  marginBottom: "4rem",
  opacity: inview ? 1 : 0,
  transform: inview ? "translateY(0)" : "translateY(60px)",
  transition: "opacity 1s ease, transform 1s ease",
}));

const Row = styled(Box)({
  display: "flex",
  width: "calc(100% - 40px)",
  justifyContent: "space-between",
  // transform: "translate(110%,-25%)",
  flexDirection: "column",
  paddingTop: "20px",
});
const WrapImage1 = styled(Box)({
  width: "calc(60vw - 40px)",
  display: "flex",
  marginBottom: "2rem",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
});
const WrapImage2 = styled(Box)({
  width: "calc(100vw - 40px)",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",

});
const WrapImage3 = styled(Box)({
  width: "calc(100vw - 40px)",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  marginTop: "4rem",
});
const WrapImage4 = styled(Box)({
  width: "calc(100vw - 40px)",
  marginTop: "4rem",
});
const MiddleImage = styled(Box)({
  width: "calc(100vw - 40px)",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  marginTop: "4rem",
  flexDirection: "column",
});

const useInView = (threshold = 0.2) => {
  const ref = useRef();
  const [inView, setInView] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
};

const Section1 = styled(Box)({
  display: "flex",
  width: "calc(100vw - 40px)",
  justifyContent: "space-between",
  flexDirection: "row",
  gap: "20px",
});

const Left = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "calc(40vw - 20px)",
  height: "auto",
  padding: "0",
  margin: 0,
});
const Top = styled(Box)({
  padding: 0,
});
const Bottom = styled(Box)({});
const Right = styled(Box)({
  width: "calc(55vw - 20px)",
});
const BottomChild = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  borderBottom: "1px solid black",
  padding: "25px 0",
});
const Child = styled(Box)({
  width: "calc(50% - 10px)",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  fontSize: "calc(0.6vw + 0.5vw)",
});
const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: "Aspekta", sans-serif;
  color: #1937d6;
  background-color: transparent;
  border: 2px solid #1937d6;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  margin-top: 200px;

  svg {
    margin-left: 8px;
    transition: fill 0.4s ease-in-out;
    fill: #1937d6;
  }

  &:hover {
    background-color: #1937d6;
    color: #ffffff;

    svg {
      fill: #ffffff;
    }
  }
`;

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path
      d="M13 5l7 7-7 7M5 12h14"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const WorkDetail2 = () => {
  const textRef = useRef([]);
  const imageRefs = useRef([]);
  const [text2Ref, text2InView] = useInView(); // already added
  const [text3Ref, text3InView] = useInView();
  const router = useRouter();

  const handleClick = () => {
    router.push("/work/3");
  };

  useEffect(() => {
    imageRefs.current = imageRefs.current.filter(Boolean);

    const handleScroll = () => {
      imageRefs.current.forEach((img) => {
        if (img) {
          const rect = img.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const isVisible = rect.top < windowHeight * 0.9 && rect.bottom > 0;

          img.style.transition = "transform 1s ease, opacity 1s ease";
          img.style.opacity = isVisible ? "1" : "0";
          img.style.transform = isVisible
            ? "translateY(0)"
            : "translateY(60px)";
        }
      });
    };

    handleScroll(); // initial run
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
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
            line.style.backgroundSize = "100% 100%";
          } else {
            line.style.backgroundSize = "0% 100%";
          }
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Container>
      {/* <Headers /> */}
      <Tittle>
        <Image
          src="/assets/work/cyber/cyber.png"
          alt="1"
          objectFit="contain"
          width={1400}
          height={600}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "auto",
          }}
        />
      </Tittle>
      <Section1>
        <Left>
          <Top>
            <Text1>
              <p>\MOTION</p>
              <p>\VISUAL IDENTITY</p>
            </Text1>
          </Top>
          <Bottom>
            <BottomChild>
              <Child>YEAR</Child>
              <Child>2023</Child>
            </BottomChild>
            <BottomChild>
              <Child>CLIENT</Child>
              <Child>PERSONAL</Child>
            </BottomChild>
          </Bottom>
        </Left>
        <Right>
          <div
            ref={(el) => imageRefs.current.push(el)}
            style={{ transform: "translateY(60px)", opacity: 0 }}
          >
            <Image
              src="/assets/work/cyber/1.png"
              alt="2"
              objectFit="contain"
              width={1400}
              height={800}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </Right>
      </Section1>
      <Pic1Footer>
        <Header1>
          <HeadText>ABOUT PROJECT</HeadText>
          <HeadText>
            <Image
              src="/assets/bullet.png"
              alt="Eye5"
              width={20}
              height={20}
              style={{
                verticalAlign: "middle",
                margin: "0 0 0.4rem 0",
              }}
            />
          </HeadText>
        </Header1>
      </Pic1Footer>
      <Text2 ref={text2Ref} inview={text2InView}>
        This short film is part of a larger campaign against cyber violence—a
        growing and urgent issue in today’s digital age. As online interactions
        become more common, so do forms of verbal abuse and harassment. The
        project aims to raise awareness, promote empathy, and encourage
        prevention.
        <br />
        <br /> My contribution focused on the motion graphics segment of the
        film, where I translated key messages into visual motion elements.
        Through animated typography, symbolic visuals, and a carefully paced
        narrative, I worked to enhance the emotional impact and clarity of the
        message. It was a meaningful experience that allowed me to use design
        not just as a tool for communication, but also as a form of advocacy.
      </Text2>
      <Pic>
        <video
          width="100%"
          height="800"
          autoPlay
          loop
          playsInline
          controls={false} // set to true if you want UI
          style={{
            objectFit: "cover", // or "contain" depending on your style
          }}
        >
          <source src="/assets/work/1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Pic>

      <Row>
        <div
          ref={(el) => imageRefs.current.push(el)}
          style={{ transform: "translateY(60px)", opacity: 0 }}
        >
          <WrapImage1>
            <Image
              src="/assets/work/cyber/2.png"
              alt="2"
              objectFit="contain"
              width={1000}
              height={800}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "auto",
              }}
            />
          </WrapImage1>
        </div>
        <div
          ref={(el) => imageRefs.current.push(el)}
          style={{ transform: "translateY(60px)", opacity: 0 }}
        >
          <WrapImage2>
            <Image
              src="/assets/work/cyber/3.png"
              alt="2"
              objectFit="contain"
              width={1400}
              height={800}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "auto",
              }}
            />
          </WrapImage2>
        </div>
      </Row>

      <Button onClick={handleClick}>
        Next project
        <ArrowRight />
      </Button>
      <Footer />
    </Container>
  );
};

export default WorkDetail2;
