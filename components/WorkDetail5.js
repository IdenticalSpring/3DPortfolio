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
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
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
  fontSize: "calc(1vw + 1vw)",
  color: "black",
  marginTop: "3rem",
  padding: "20px",
  marginBottom: "4rem",
});
const Row = styled(Box)({
  display: "flex",
  width: "calc(100% - 40px)",
  justifyContent: "space-between",
  // transform: "translate(110%,-25%)",
  gap: "20px",
  flexDirection: "column",
  paddingTop: "20px",
});
const WrapImage1 = styled(Box)({});
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
const WorkDetail5 = () => {
  return (
    <Container>
      {/* <Headers /> */}
      <Tittle>
        <Image
          src="/assets/work/human/1.png"
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
        <iframe
          width="1400"
          height="800"
          src="https://www.youtube.com/embed/Eo4CWISwZT8?si=aktpWQmJBFlweH_Z"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Pic>
      <Text1>
        <p>\MOTION</p>
        <p>\TYPOGRAPHY</p>
      </Text1>
      <Pic1>
        <Image
          src="/assets/work/human/1_1.png"
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
        In this project, I was tasked with choosing a phrase from the article
        “How to Edit Writing by a Robot: A Step-by-Step Guide” to develop into a
        typography product. The phrase I chose was “we have nothing to fear from
        AI” – a message that left me with many thoughts. It made me ask the
        question: “Why are people afraid of artificial intelligence?” After much
        thought, I realized that AI is just a tool – something that humans
        create, control and exploit. With a long history of development and the
        great achievements that humanity has achieved, we have every reason to
        believe in ourselves.
      </Text2>
      <Pic>
        <Image
          src="/assets/work/human/3.png"
          alt="2"
          objectFit="contain"
          width={1440}
          height={800}
          style={{
            objectFit: "contain",
            width: "80%",
            height: "auto",
          }}
        />
      </Pic>
      <Row>
        <WrapImage1>
          <Image
            src="/assets/work/human/4.png"
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

        <Image
          src="/assets/work/human/5.png"
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
          src="/assets/work/human/1_1.png"
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
      <Footer/>
    </Container>
  );
};

export default WorkDetail5;
