import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Footer from "./Footer";
import { useRouter } from "next/router";

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
  margin: "0",
  padding: "0",
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
  fontSize: "1.5rem",
  color: "#1937d6",
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
  height: "calc(35vw + 1vw)",
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
const Text2 = styled(Box)(({ inview }) => ({
  display: "flex",
  lineHeight: "3rem",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  width: "100%",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 400,
  fontSize: "calc(0.5vw + 1vw)",
  color: "black",
  marginTop: "3rem",
  padding: "20px",
  marginBottom: "4rem",
  opacity: inview ? 1 : 0,
  transform: inview ? "translateY(0)" : "translateY(60px)",
  transition: "opacity 1s ease-out, transform 1s ease-out",
}));
const Wrapper5 = styled(Box)({
  display: "flex",
  width: "calc(100% - 40px)",
  justifyContent: "center",
  marginBottom: "20px",


})
const Text3 = styled(Box)(({ inview }) => ({
  display: "flex",
  lineHeight: "3rem",
  flexDirection: "column",
  alignSelf: "left",
  alignItems: "left",
  marginLeft: "50%",
  justifyContent: "left",
  width: "50%",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 400,
  fontSize: "calc(0.5vw + 1vw)",
  color: "black",
  marginTop: "3rem",
  padding: "20px",
  marginBottom: "4rem",
  opacity: inview ? 1 : 0,
  transform: inview ? "translateY(0)" : "translateY(60px)",
  transition: "opacity 1s ease-out, transform 1s ease-out",
}));

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
const WorkDetail6 = () => {
  const textRef = useRef([]);
  const imageRefs = useRef([]);
  const [text2Ref, text2InView] = useInView();
  const [text3Ref, text3InView] = useInView();
  const router = useRouter();

  const handleClick = () => {
    router.push("/work/5");
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
      <Section1>
        <Left>
          <Top>
            <Text1>
              <p>\PUBLICATION</p>
              <p>\MOTION</p>
            </Text1>
          </Top>
          <Bottom>
            <BottomChild>
              <Child>YEAR</Child>
              <Child>2025</Child>
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
        The project "Conveying Hue Royal Court Music through AR Technology" is
        an innovative experiment combining traditional art and modern
        technology, aiming to bring a new perspective on Vietnam's cultural
        heritage.
        <br /> Stemming from the desire to preserve and spread the value of Hue
        Royal Court Music - an intangible heritage of UNESCO, the project
        exploits the potential of Augmented Reality (AR) to help viewers not
        only see but also hear and interact with this art form in a more
        intuitive way.
      </Text2>

      <div
        ref={(el) => imageRefs.current.push(el)}
        style={{ transform: "translateY(60px)", opacity: 0 }}
      >
        <Wrapper5>
          <Image
            src="/assets/work/hue/3.png"
            alt="3"
            objectFit="contain"
            width={1200}
            height={900}
            style={{
              objectFit: "contain",
              width: "130%",
              height: "auto",
            }}
          />
        </Wrapper5>
      </div>

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
      <Text3 ref={text3Ref} inview={text3InView}>
        The project is not only a design product, but also has educational and
        cultural preservation significance. Hue Royal Court Music was once the
        official music of the Nguyen Dynasty, reflecting the sophistication and
        solemnity of the royal culture. However, in the digital age, this art
        form has gradually been forgotten and is less widely accessible.
      </Text3>

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
          style={{ transform: "translateY(60px)", opacity: 0, width: "100%" }}
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
      <Button onClick={handleClick}>
        Next project
        <ArrowRight />
      </Button>
      <Footer></Footer>
    </Container>
  );
};

export default WorkDetail6;
