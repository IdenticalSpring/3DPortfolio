import React, { useState, useEffect } from "react";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import styled from "styled-components";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #1937d6;
`;

const Wrap = styled(Box)({
  width: "100vw",
  height: "100%",
  backgroundColor: "#1937d6",
});

const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #1937d6, #1937d6, #ffffff);
  z-index: 9999;
  transition: opacity 0.5s ease-out;
`;

const ProgressText = styled(Typography)`
  color: white;
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

const ProgressBarContainer = styled.div`
  width: 80%;
  max-width: 400px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: white;
  border-radius: 5px;
  transition: width 0.3s ease;
`;

const MobileOverlay = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #1937d6, #1937d6, #ffffff);
  z-index: 99999; // Increased z-index
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px;
`;
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const isMobile = useMediaQuery("(max-width:768px)");

  // Disable page scrolling on mobile
  useEffect(() => {
    if (isMobile) {
      // document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobile]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500); // Fade out delay
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30); // Adjust timing to control how fast it counts to 100

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <LoadingScreen style={{ opacity: progress === 100 ? 0 : 1 }}>
        <ProgressText variant="h1">{progress}%</ProgressText>
        <ProgressBarContainer>
          <ProgressBar style={{ width: `${progress}%` }} />
        </ProgressBarContainer>
      </LoadingScreen>
    );
  }

  return (
    <Page>
      {isMobile && (
        <MobileOverlay>
          <Image
            src="/assets/mobile.jpg"
            alt="Mobile experience"
            layout="fill"
            objectFit="cover"
            priority
          />
        </MobileOverlay>
      )}
      <Wrap id="section1">
        <Section1 />
      </Wrap>
      <Wrap id="section2">
        <Section2 />
      </Wrap>
      <Wrap id="section3">
        <Section3 />
      </Wrap>
      {/*
      <Wrap id="section4">
        <Section4 />
      </Wrap>
      */}
      <Wrap id="section5">
        <Section5 />
      </Wrap>
    </Page>
  );
}
