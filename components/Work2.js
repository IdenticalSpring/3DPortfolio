import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

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
  "&:hover img": {
    transform: "scale(1.1)",
    transition: "transform 0.3s ease-in-out",
  },
  "&:hover .image-overlay": {
    backgroundColor: "rgba(25, 55, 214, 0.2)",
  },
  "&:hover .head-text, &:hover .title-text": {
    opacity: 1,
    transition: "opacity 0.3s ease-in-out",
  },
});

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
});
const HeadText = styled(Typography).attrs(() => ({
  className: "head-text",
}))({
  fontSize: "1.5rem",
  color: "#1937d6",
  opacity: 0.5,
  transition: "opacity 0.3s ease-in-out",
});
const ImageWrapper = styled(Box)({
  width: "47.5vw",
  height: "24vw",
  position: "relative",
  overflow: "hidden", // This ensures zoom doesn't affect layout
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    transition: "transform 0.3s ease-in-out",
    transformOrigin: "center center", // Zoom from center
  },
  "& .image-overlay": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(25, 55, 214, 0)", // Initially transparent
    transition: "background-color 0.3s ease-in-out",
  },
});

const Title = styled(Box)({});
const TitleText = styled(Typography).attrs(() => ({
  className: "title-text",
}))({
  color: "#1937d6",
  marginTop: "10px",
  fontWeight: "700",
  fontSize: "3rem",
  opacity: 0.5,
  transition: "opacity 0.3s ease-in-out",
});

const Work2 = () => {
  const router = useRouter();

  return (
    <Container>
      <WorkTitle>
        <Image src="/assets/work1.png" alt="Work 2" width={400} height={100} />
      </WorkTitle>
      <MainContent>
        <Row>
          <Tag onClick={() => router.push("/work/1")} sx={{ cursor: "pointer" }}>
            <Header>
              <HeadText>BRAND IDENTITY</HeadText>
              <HeadText>2023</HeadText>
            </Header>
            <ImageWrapper>
              <Image
                src="/assets/work/1.png"
                layout="fill"
                style={{ objectFit: "cover" }} 
                />
                <div className="image-overlay" />

            </ImageWrapper>
            <Title>
              <TitleText>THORN BRANDING</TitleText>
            </Title>
          </Tag>
          <Tag onClick={() => router.push("/work/2")} sx={{ cursor: "pointer" }}>
            <Header>
              <HeadText>MOTION GRAPHIC</HeadText>
              <HeadText>2023</HeadText>
            </Header>
            <ImageWrapper>
              <Image
                src="/assets/work/2.png"
                layout="fill"
                style={{ objectFit: "cover" }} 
                />
                <div className="image-overlay" />

            </ImageWrapper>
            <Title>
              <TitleText>CYBERBULLY ANIMATION</TitleText>
            </Title>
          </Tag>
        </Row>
        <Row>
          <Tag onClick={() => router.push("/work/6")} sx={{ cursor: "pointer" }}>
            <Header>
              <HeadText>WORK SHOP</HeadText>
              <HeadText>2023</HeadText>
            </Header>
            <ImageWrapper>
              <Image
                src="/assets/work/3.png"
                layout="fill"
                style={{ objectFit: "cover" }} 
                />
                <div className="image-overlay" />

            </ImageWrapper>
            <Title>
              <TitleText>WATER PUPPET WORKSHOP</TitleText>
            </Title>
          </Tag>
          <Tag onClick={() => router.push("/work/4")} sx={{ cursor: "pointer" }}>
            <Header>
              <HeadText>BRAND IDENTITY</HeadText>
              <HeadText>2023</HeadText>
            </Header>
            <ImageWrapper>
              <Image
                src="/assets/work/4.png"
                layout="fill"
                style={{ objectFit: "cover" }} 
                />
                <div className="image-overlay" />

            </ImageWrapper>
            <Title>
              <TitleText>HUE ROYAL COURT MUSIC</TitleText>
            </Title>
          </Tag>
        </Row>
        <Row>
          <Tag onClick={() => router.push("/work/5")} sx={{ cursor: "pointer" }}>
            <Header>
              <HeadText>MOTION GRAPHIC</HeadText>
              <HeadText>2023</HeadText>
            </Header>
            <ImageWrapper>
              <Image
                src="/assets/work/5.png"
                layout="fill"
                style={{ objectFit: "cover" }} 
                />
                <div className="image-overlay" />

            </ImageWrapper>
            <Title>
              <TitleText>HUMAN TYPOGRAPHY</TitleText>
            </Title>
          </Tag>
          <Tag onClick={() => router.push("/work/6")} sx={{ cursor: "pointer" }}>
            <Header>
              <HeadText>INFOGRAPHIC</HeadText>
              <HeadText>2023</HeadText>
            </Header>
            <ImageWrapper>
              <Image
                src="/assets/work/3.png"
                layout="fill"
                style={{ objectFit: "cover" }} 
                />
                <div className="image-overlay" />

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
