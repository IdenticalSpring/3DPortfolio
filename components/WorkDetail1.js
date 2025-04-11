import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "./Footer";

const Container = styled(Box)({
  display: "flex",
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
  fontSize: "10vw",
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
const WorkDetail1 = () => {
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
      <Pic>
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
      </Pic>

      <Text1>
        <p>\PUBLICATION</p>
        <p>\MOTION</p>
      </Text1>
      <Pic1>
        <Image
          src="/assets/work/hue/3.png"
          alt="2"
          objectFit="contain"
          width={1000}
          height={600}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "auto",
          }}
        />
      </Pic1>
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
        The project "Conveying Hue Royal Court Music through AR Technology" is
        an innovative experiment combining
        <br /> traditional art and modern technology, aiming to bring a new
        perspective on Vietnam's cultural heritage.
        <br /> Stemming from the desire to preserve and spread the value of Hue
        Royal Court Music - an intangible heritage
        <br />
        of UNESCO, the project exploits the potential of Augmented Reality (AR)
        to help viewers not only see but also
        <br /> hear and interact with this art form in a more intuitive way.
      </Text2>
      <Pic>
        <Image
          src="/assets/work/hue/4.png"
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
      </Pic>
      <Row>
        <Image
          src="/assets/work/hue/5.png"
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
        <Image
          src="/assets/work/hue/6.png"
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
      </Row>
      <Text2>
        The project is not only a design product, but also has educational and
        cultural preservation significance. Hue Royal <br /> Court Music was
        once the official music of the Nguyen Dynasty, reflecting the
        sophistication and solemnity of the <br />
        royal culture. However, in the digital age, this art form has gradually
        been forgotten and is less widely accessible.
      </Text2>
      <MiddleImage>
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
      </MiddleImage>
      <Row1>
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
      </Row1>
      <Row2>
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
      </Row2>
      <Row3>
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
      </Row3>
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
      <Image
        src="/assets/work/hue/12.png"
        alt="2"
        objectFit="contain"
        width={800}
        height={800}
        style={{
          objectFit: "contain",
          width: "100%",
          height: "auto",
          // transform: "translateY(-40%)",
        }}
      />
      <Button>
        Next project
        <ArrowRight />
      </Button>
      <Footer />
    </Container>
  );
};

export default WorkDetail1;
