import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Section4Container = styled(Box)({
  width: "100vw",
  height: "150vh",
  backgroundColor: "white",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "2rem 0",
});

const TopButton = styled(Box)({
  position: "relative",
  display: "flex",
  width: "300px",
  alignItems: "center",
  backgroundColor: "transparent",
  padding: "0.8rem 1.5rem",
  cursor: "pointer",
  whiteSpace: "nowrap",
  transition: "background-color 0.2s ease",
 
});


export default function Section4() {
  return (
    <Section4Container>
           
    </Section4Container>
  );
}
