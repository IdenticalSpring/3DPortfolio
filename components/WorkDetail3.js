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
  width: "calc(10vw - 40px)",
  padding: "0",
  height: "100vh",
  transform: "translateY(10%)",
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
  marginBottom: "20px",
  paddingRight: "10vw",

  gap: "15  0px",
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
  width: "100%",
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

const WorkDetail3 = () => {
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
      <Pic>
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
      </Pic>
      <Text1>
        <p>\VSPACE DESIGN</p>
        <p>\SPACE DESIGN</p>
      </Text1>
      <Pic1>
        <Image
          src="/assets/work/puppet/1.png"
          alt="2"
          objectFit="contain"
          width={500}
          height={300}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "auto",
          }}
        />
      </Pic1>
      <Pic1Footer>
        <Header1>
          <HeadText>CULTURE DESIGN</HeadText>
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
        Vietnamese Buddhism Infographic is an informSPACE DESIGN project that
        aims to convey knowledge about Vietnamese Buddhism in a visual,
        easy-to-understand and engaging way. Stemming from the fact that many
        Vietnamese people believe in Buddhism but do not really understand its
        teachings, history and influence, the project aims to create an
        infographic book that combines illustrations, diagrams and charts to
        help readers access information in a vivid way.
      </Text2>
      <Pic>
        <Image
          src="/assets/work/puppet/2.png"
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
      </Pic>
      <Row>
        <Text2>
          Vietnamese Buddhism Infographic is an informSPACE DESIGN project that
          aims to convey knowledge about Vietnamese Buddhism in a visual,
          easy-to-understand and engaging way. Stemming from the fact that many
          Vietnamese people believe in Buddhism but do not really understand its
          teachings, history and influence, the project aims to create an
          infographic book that combines illustrations, diagrams and charts to
          help readers access information in a vivid way.
        </Text2>
        <Image
          src="/assets/work/puppet/3.png"
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
      </Row>
      {/* <Text2>
        The project is not oSPACE DESIGN product, but also has educational and
        cultural preservation significance. Hue Royal <br /> Court Music was
        once the official music of the Nguyen Dynasty, reflecting the
        sophistication and solemnity of the <br />
        royal culture. However, in the digital age, this art form has gradually
        been forgotten and is less widely accessible.
      </Text2> */}
      <MiddleImage>
        <Image
          src="/assets/work/puppet/4.png"
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
      </MiddleImage>
      <Row1>
        <Image
          src="/assets/work/puppet/5.png"
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
      </Row1>
      <Image
        src="/assets/work/puppet/6.png"
        alt="2"
        objectFit="contain"
        width={600}
        height={600}
        style={{
          objectFit: "contain",
          width: "60%",
          height: "auto",
          marginTop: "20vh",
          marginBottom: "20vh",
          // transform: "translateY(-40%)",
        }}
      />
      <Image
        src="/assets/work/puppet/7.png"
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

export default WorkDetail3;
