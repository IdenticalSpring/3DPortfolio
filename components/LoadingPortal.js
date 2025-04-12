// components/LoadingPortal.js
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Typography } from "@mui/material";

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
  opacity: ${(props) => (props.hide ? 0 : 1)};
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

const LoadingPortal = ({ loading, progress }) => {
  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <LoadingScreen hide={!loading}>
      <ProgressText variant="h1">{progress}%</ProgressText>
      <ProgressBarContainer>
        <ProgressBar style={{ width: `${progress}%` }} />
      </ProgressBarContainer>
    </LoadingScreen>,
    portalRoot
  );
};

export default LoadingPortal;
