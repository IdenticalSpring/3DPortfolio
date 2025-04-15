import React, { useEffect, useRef, useState } from "react";
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

const Text1 = styled(Box)(({ inview }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  width: "100%",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  fontSize: "calc(2rem)",
  color: "#1937d6",
  // marginTop: "75%",
  // opacity: inview ? 1 : 0,
  // transform: inview ? "translateY(0)" : "translateY(60px)",
  // transition: "opacity 1s ease, transform 1s ease",
}));

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
  fontWeight: 400,
  fontSize: "calc(0.5vw + 1vw)",
  color: "black",
  marginTop: "3rem",
  padding: "20px",
  marginBottom: "4rem",
  opacity: inview ? 1 : 0,
  transform: inview ? "translateY(0)" : "translateY(60px)",
  transition: "opacity 1s ease, transform 1s ease",
}));

// And similarly for Text3:
const Text3 = styled(Box)(({ inview }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "left",
  lineHeight: "calc(1vw + 1vw)",
  width: "100%",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 500,
  fontSize: "calc(0.5vw + 1vw)",
  color: "black",
  marginTop: "80%",
  opacity: inview ? 0 : 1,
  transform: inview ? "translateY(0)" : "translateY(60px)",
  transition: "opacity 1s ease, transform 1s ease",
}));

const WrapImage1 = styled(Box)({
  width: "calc(100vw - 40px)",
  // transform: "translate(48%,-60%)",
  zIndex: 1,
});
const WrapImage2 = styled(Box)({
  position: "relative",
  width: "calc(20vw - 40px)",
  transform: "translate(0,-40%)",
  zIndex: 100000,
});
const WrapImage3 = styled(Box)({
  position: "relative",
  width: "calc(100vw - 40px)",
  marginTop: "calc(1vw + 1vw)",
  // transform: "translate(0,-35%)",
});
const WrapImage4 = styled(Box)({
  width: "calc(20vw - 40px)",
  zIndex: 1000,
  marginLeft: "80vw",
  transform: "translate(0,-300%)",
});
const WrapImage5 = styled(Box)({
  width: "calc(100vw - 40px)",
  zIndex: 0,  
  transform: "translate(0,2%)",
  height: "calc(60vw + 1vw)",
});
const WrapImage6 = styled(Box)({
  width: "calc(50vw - 40px)",
  marginLeft: "20px",
  marginTop: "200px",
  // transform: "translate(0,-60%)",
});
const MiddleImage = styled(Box)({
  width: "calc(100vw - 40px)",
  alignItems: "flex-start",
  justifyContent: "flex-start",
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
const Col = styled(Box)({
  display: "flex",
  gap: "10px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "calc(10vw + 1vw)",
});
const Row = styled(Box)({
  display: "flex",
  width: "calc(100% - 40px)",
  justifyContent: "space-between",
  gap: "160px",
  flexDirection: "row",
  zIndex: 1000,
});
const RowChild = styled(Box)({
  width: "calc(45vw + 1vw)",
});

const WorkDetail3 = () => {
  const textRef = useRef([]);
  const imageRefs = useRef([]);
  const [text2Ref, text2InView] = useInView(); // already added
  const [text3Ref, text3InView] = useInView();
  const router = useRouter();
  const [text2HasBeenInView, setText2HasBeenInView] = useState(false);
  const [text3HasBeenInView, setText3HasBeenInView] = useState(false);
  const handleClick = () => {
    router.push("/work/4");
  };
  useEffect(() => {
    if (text2InView) {
      setText2HasBeenInView(true);
    }
  }, [text2InView]);
  
  useEffect(() => {
    if (text3InView) {
      setText3HasBeenInView(true);
    }
  }, [text3InView]);
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
          src="/assets/work/puppet/puppet.png"
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
              <p>\VISUAL IDENTITY</p>
              <p>\SPACE DESIGN</p>
            </Text1>
          </Top>
          <Bottom>
            <BottomChild>
              <Child>YEAR</Child>
              <Child>2024</Child>
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
              src="/assets/work/puppet/0.png"
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
      <Text2 ref={text2Ref} inview={text2HasBeenInView}>
        This project proposes a sustainable cultural space in Hanoi that bridges
        generations through creative and traditional arts. By revitalizing
        underused cultural areas, the space fosters intergenerational exchange,
        preserves traditional values, and promotes community cohesion through
        environmentally friendly design and engaging cultural activities.
      </Text2>
      <div
        ref={(el) => imageRefs.current.push(el)}
        style={{ transform: "translateY(60px)", opacity: 0 }}
      >
        <MiddleImage>
          <Image
            src="/assets/work/puppet/1.png"
            alt="2"
            objectFit="contain"
            width={1440}
            height={800}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "auto",
            }}
          />
        </MiddleImage>
      </div>

      <Row>
        <div
          ref={(el) => imageRefs.current.push(el)}
          style={{ transform: "translateY(60px)", opacity: 0 }}
        >
          <WrapImage1>
            <Image
              src="/assets/work/puppet/2.png"
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
          </WrapImage1>
        </div>
        <div
          ref={(el) => imageRefs.current.push(el)}
          style={{ transform: "translateY(60px)", opacity: 0 }}
        >
          <WrapImage2>
            <Image
              src="/assets/work/puppet/10.png"
              alt="2"
              objectFit="contain"
              width={1400}
              height={800}
              style={{
                zIndex: 100000,
                objectFit: "contain",
                width: "100%",
                height: "auto",
              }}
            />
          </WrapImage2>
        </div>
      </Row>
      <div
        ref={(el) => imageRefs.current.push(el)}
        style={{ transform: "translateY(60px)", opacity: 0 }}
      >
        <WrapImage3>
          <Image
            src="/assets/work/puppet/3.png"
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
        </WrapImage3>
      </div>
      
      <div
        ref={(el) => imageRefs.current.push(el)}
        style={{ transform: "translateY(60px)", opacity: 0 }}
      >
        <WrapImage5>
          <Image
            src="/assets/work/puppet/5.png"
            alt="2"
            objectFit="contain"
            width={1400}
            height={700}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "auto",
            }}
          />
        </WrapImage5>
        <WrapImage4>
          <Image
            src="/assets/work/puppet/11.png"
            alt="2"
            objectFit="contain"
            width={1400}
            height={800}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "auto",
              zIndex: 100000,
            }}
          />
        </WrapImage4>
      </div>
      {/* <div
        ref={(el) => imageRefs.current.push(el)}
        style={{ transform: "translateY(60px)", opacity: 0 }}
      > */}
        
      {/* </div> */}
      <Col>
        {" "}
        <div
          ref={(el) => imageRefs.current.push(el)}
          style={{ transform: "translateY(60px)", opacity: 0 }}
        >
          <Row>
            <RowChild>
              <WrapImage6>
                <Image
                  src="/assets/work/puppet/6.png"
                  alt="2"
                  objectFit="contain"
                  width={900}
                  height={900}
                  style={{
                    objectFit: "contain",
                    width: "80%",
                    height: "auto",
                  }}
                />
              </WrapImage6>
            </RowChild>
            <RowChild>
              <Image
                src="/assets/work/puppet/9.png"
                alt="2"
                objectFit="contain"
                width={1400}
                height={800}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                  marginLeft: "calc(0.5vw + 0.5vw)",
                }}
              />
            </RowChild>
          </Row>
        </div>
        <div
          ref={(el) => imageRefs.current.push(el)}
          style={{ transform: "translateY(60px)", opacity: 0 }}
        >
          <Row>
            <RowChild>
              {" "}
              <Image
                src="/assets/work/puppet/8.png"
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
            </RowChild>
            <RowChild>
              <Text3 ref={text3Ref} inview={text3HasBeenInView}>
                The solution of building a space connecting generations through
                creative cultural activities and traditional arts in Hanoi will
                help create a cohesive community where generations can interact,
                share experiences and learn from each other. This space will be
                a place to organize cultural activities and traditional art
                classes, while combining sustainable and environmentally
                friendly design. Through this, we not only restore and preserve
                traditional cultural values but also create opportunities for
                young generations and the elderly to develop together, creating
                a healthy, united and creative community. This space will take
                advantage of underutilized traditional cultural and artistic
                spaces in Hanoi
              </Text3>{" "}
            </RowChild>
          </Row>
        </div>
      </Col>

      <Button onClick={handleClick}>
        Next project
        <ArrowRight />
      </Button>
      <Footer />
    </Container>
  );
};

export default WorkDetail3;
