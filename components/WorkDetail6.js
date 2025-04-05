import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef } from "react";

const TextLine = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  fontSize: "2vw",
  lineHeight: "3rem",
  color: "#000",
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

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100%",
});
const Tittle = styled(Box)({
  width: "calc(100vw - 40px)",
  padding: "0",
  marginTop: "60px",
});
const Pic = styled(Box)({
  marginTop: "20px",
  width: "calc(100vw - 40px)",
  padding: "0",
});
const MarqueeContainer = styled(Box)({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  padding: "1rem 0",
  whiteSpace: "nowrap",
  marginTop: "4rem",
  borderTop: "1px solid #FFF",
  borderBottom: "1px solid #FFF",
  backgroundColor: "#1937d6",
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
  fontSize: "1.8vw",
  color: "#FFF",
  fontWeight: "normal",
});
const StyledSpan = styled("span")({
  fontWeight: 700,
});
const Text1 = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  width: "100%",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  fontSize: "2rem",
  color: "#1937d6",
  marginTop: "4rem",
  padding: "20px",
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
  fontSize: "1.5rem",
  color: "#1937d6",
});
const Text2 = styled(Box)({
  display: "flex",
  lineHeight: "3rem",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  width: "100%",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 400,
  fontSize: "2vw",
  color: "black",
  marginTop: "3rem",
  padding: "20px",
  marginBottom: "4rem",
});
const Row = styled(Box)({
  display: "flex",
  width: "calc(100% - 40px)",
  justifyContent: "space-between",
  marginBottom: "20px",
  gap: "20px",
  paddingTop: "20px",
});

const MiddleImage = styled(Box)({
  width: "calc(100vw - 40px)",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  marginTop: "4rem",
  flexDirection: "column",
});
const Row1 = styled(Box)({
  display: "flex",
  width: "calc(100% - 40px)",
  justifyContent: "left",
});
const Row2 = styled(Box)({
  display: "flex",
  width: "calc(100% - 40px)",
  justifyContent: "right",
  transform: "translateY(-20%)",
});
const Row3 = styled(Box)({
  display: "flex",
  width: "calc(100% - 40px)",
  justifyContent: "left",
  transform: "translateY(-40%)",
});

const WorkDetail6 = () => {
  const textRef = useRef([]);
  const imageRefs = useRef([]);

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
          src="/assets/work/hue/1.png"
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
      <div
        ref={(el) => imageRefs.current.push(el)}
        style={{ transform: "translateY(60px)", opacity: 0 }}
      >
        <Image
          src="/assets/work/hue/2.png"
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
          </MarqueeText>
          {/* Duplicate for seamless effect */}
        </MarqueeWrapper>
      </MarqueeContainer>
      <Text1>
        <p>\PUBLICATION</p>
        <p>\MOTION</p>
      </Text1>
      <div
        ref={(el) => imageRefs.current.push(el)}
        style={{ transform: "translateY(60px)", opacity: 0 }}
      >
        <Image
          src="/assets/work/hue/3.png"
          alt="3"
          objectFit="contain"
          width={1000}
          height={600}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      <Pic1Footer>
        <Header1>
          <HeadText>MOTION GRAPHIC</HeadText>
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
      <Text2>
        {[
          'The project "Conveying Hue Royal Court Music through AR Technology" is an innovative experiment combining',
          "traditional art and modern technology, aiming to bring a new perspective on Vietnam's cultural heritage.",
          "Stemming from the desire to preserve and spread the value of Hue Royal Court Music - an intangible heritage",
          "of UNESCO, the project exploits the potential of Augmented Reality (AR) to help viewers not only see but also",
          "hear and interact with this art form in a more intuitive way.",
        ].map((line, i) => (
          <TextLine key={i} ref={(el) => textRef.current.push(el)}>
            {line}
          </TextLine>
        ))}
      </Text2>

      <div
        ref={(el) => imageRefs.current.push(el)}
        style={{ transform: "translateY(60px)", opacity: 0, width: "100%" }}
      >
        <Image
          src="/assets/work/hue/4.png"
          alt="4"
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

      <Row>
        <div
          ref={(el) => imageRefs.current.push(el)}
          style={{ transform: "translateY(60px)", opacity: 0, width: "100%" }}
        >
          <Image
            src="/assets/work/hue/5.png"
            alt="5"
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

        <div
          ref={(el) => imageRefs.current.push(el)}
          style={{ transform: "translateY(60px)", opacity: 0, width: "100%" }}
        >
          <Image
            src="/assets/work/hue/6.png"
            alt="6"
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
      </Row>
      <Text2>
        {[
          "The project is not only a design product, but also has educational and cultural preservation significance.",
          "Hue Royal Court Music was once the official music of the Nguyen Dynasty, reflecting the sophistication",
          "and solemnity of the royal culture.",
          "However, in the digital age, this art form has gradually been forgotten and is less widely accessible.",
        ].map((line, i) => (
          <TextLine key={`line2-${i}`} ref={(el) => textRef.current.push(el)}>
            {line}
          </TextLine>
        ))}
      </Text2>

      <MiddleImage>
        <div
          ref={(el) => imageRefs.current.push(el)}
          style={{
            transform: "translateY(60px)",
            opacity: 0,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            src="/assets/work/hue/7.png"
            alt="2"
            objectFit="contain"
            width={100}
            height={100}
            style={{
              objectFit: "contain",
              width: "10%",
              height: "auto",
            }}
          />
        </div>
      </MiddleImage>
      <Row1>
        <div
          ref={(el) => imageRefs.current.push(el)}
          style={{ transform: "translateY(60px)", opacity: 0 }}
        >
          <Image
            src="/assets/work/hue/8.png"
            alt="2"
            objectFit="contain"
            width={1400}
            height={800}
            style={{
              objectFit: "contain",
              width: "80%",
              height: "auto",
            }}
          />
        </div>
      </Row1>
      <Row2>
        <div
          ref={(el) => imageRefs.current.push(el)}
          style={{
            transform: "translateY(60px)",
            opacity: 0,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            src="/assets/work/hue/9.png"
            alt="2"
            objectFit="contain"
            width={1400}
            height={800}
            style={{
              objectFit: "contain",
              width: "80%",
              height: "auto",
            }}
          />
        </div>
      </Row2>
      <Row3>
        <div
          ref={(el) => imageRefs.current.push(el)}
          style={{ transform: "translateY(60px)", opacity: 0 , width: "100%"}}
        >
          <Image
            src="/assets/work/hue/10.png"
            alt="2"
            objectFit="contain"
            width={800}
            height={800}
            style={{
              objectFit: "contain",
              width: "80%",
              height: "auto",
            }}
          />
        </div>
      </Row3>
      <div
        ref={(el) => imageRefs.current.push(el)}
        style={{ transform: "translateY(60px)", opacity: 0 , width: "100%", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "row"}}
      >
        <Image
          src="/assets/work/hue/11.png"
          alt="2"
          objectFit="contain"
          width={800}
          height={800}
          style={{
            objectFit: "contain",
            width: "10%",
            height: "auto",
            transform: "translateY(-40%)",
          }}
        />
      </div>
      <div
        ref={(el) => imageRefs.current.push(el)}
        style={{ transform: "translateY(60px)", opacity: 0 , width: "100%"}}
      >
        <Image
          src="/assets/work/hue/12.png"
          alt="2"
          objectFit="contain"
          width={1400}
          height={800}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "auto",
            transform: "translateX(-2%)",
          }}
        />
      </div>
    </Container>
  );
};

export default WorkDetail6;
