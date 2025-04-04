import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Container = styled(Box)({
  marginTop: "80px",
  backgroundColor: "white",
  paddingTop: "20px",
  paddingLeft: "20px",
  paddingRight: "20px",
});
const WorkTitle = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  marginBottom: "80px",
  marginTop: "80px",
});
const MainContent = styled(Box)({
  color: "#1937d6",
  borderBottom: "2px solid #1937d6",
});
const Row = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  marginBottom: "20px",
  gap: "20px",
  borderTop: "2px solid #1937d6",
  paddingTop: "20px",
});
const Tag = styled(Box)({
  width: "100%",
});
const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
});
const HeadText = styled(Typography)({
  fontSize: "1.5rem",
  color: "#1937d6",
});
const ImageWrapper = styled(Box)({
  width: "48vw",
  height: "25vw",
  position: "relative",
});
const Title = styled(Box)({});
const TitleText = styled(Typography)({
  color: "#1937d6",
  marginTop: "10px",
  fontWeight: "700",
  fontSize: "3rem",
});

const Work2 = () => {
  return (
    <Container>
      <WorkTitle>
        <Image src="/assets/work1.png" alt="Work 2" width={400} height={100} />
      </WorkTitle>
      <MainContent>
        <Row>
          <Tag>
            <Header>
              <HeadText>BRAND IDENTITY</HeadText>
              <HeadText>2023</HeadText>
            </Header>
            <ImageWrapper>
              <Image
                src="/assets/work/1.png"
                alt="Work 1"
                layout="fill"
                objectFit="contain"
              />
            </ImageWrapper>
            <Title>
              <TitleText>THORN BRANDING</TitleText>
            </Title>
          </Tag>
          <Tag>
            <Header>
              <HeadText>MOTION GRAPHIC</HeadText>
              <HeadText>2023</HeadText>
            </Header>
            <ImageWrapper>
              <Image
                src="/assets/work/2.png"
                alt="Work 1"
                layout="fill"
                objectFit="contain"
              />
            </ImageWrapper>
            <Title>
              <TitleText>CYBERBULLY ANIMATION</TitleText>
            </Title>
          </Tag>
        </Row>
        <Row>
          <Tag>
            <Header>
              <HeadText>WORK SHOP</HeadText>
              <HeadText>2023</HeadText>
            </Header>
            <ImageWrapper>
              <Image
                src="/assets/work/3.png"
                alt="Work 1"
                layout="fill"
                objectFit="contain"
              />
            </ImageWrapper>
            <Title>
              <TitleText>WATER PUPPET WORKSHOP</TitleText>
            </Title>
          </Tag>
          <Tag>
            <Header>
              <HeadText>BRAND IDENTITY</HeadText>
              <HeadText>2023</HeadText>
            </Header>
            <ImageWrapper>
              <Image
                src="/assets/work/4.png"
                alt="Work 1"
                layout="fill"
                objectFit="contain"
              />
            </ImageWrapper>
            <Title>
              <TitleText>HUE ROYAL COURT MUSIC</TitleText>
            </Title>
          </Tag>
        </Row>
        <Row>
          <Tag>
            <Header>
              <HeadText>MOTION GRAPHIC</HeadText>
              <HeadText>2023</HeadText>
            </Header>
            <ImageWrapper>
              <Image
                src="/assets/work/5.png"
                alt="Work 1"
                layout="fill"
                objectFit="contain"
              />
            </ImageWrapper>
            <Title>
              <TitleText>HUMAN TYPOGRAPHY</TitleText>
            </Title>
          </Tag>
          <Tag>
            <Header>
              <HeadText>INFOGRAPHIC</HeadText>
              <HeadText>2023</HeadText>
            </Header>
            <ImageWrapper>
              <Image
                src="/assets/work/6.png"
                alt="Work 1"
                layout="fill"
                objectFit="contain"
              />
            </ImageWrapper>
            <Title>
              <TitleText>VIETNAMESE BUDDHISM</TitleText>
            </Title>
          </Tag>
        </Row>
      </MainContent>
    </Container>
  );
};

export default Work2;
