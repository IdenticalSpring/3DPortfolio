import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const navItems = [
  { name: "HOME", target: "section1" },
  { name: "ABOUT", target: "section2" },
  { name: "WORK", target: "section3" },
  { name: "CONTACT", target: "section5" },
];
const Wrap = styled(Box)({
  backgroundColor: "#1937d6",
  paddingTop: "20px",
  margin: 0,
  paddingLeft: "20px",
  paddingRight: "20px",
});
const HeaderBar = styled(Box)({
  maxWidth: "100vw",
  // marginTop: "20px",
  // marginLeft: "20px",
  // marginRight: "20px",
  backgroundColor: "#1937d6",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 1rem",
  borderTop: "1px solid #FFF",
  borderBottom: "1px solid #FFF",
});

const LeftColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginRight: "15rem",
  width: "6rem",
});

const LogoWrapper = styled(Box)({
  position: "relative",
  width: "40px",
  height: "40px",
});

const VerticalDivider = styled("div")({
  width: "1px",
  height: "80px",
  backgroundColor: "#FFF",
  margin: "0 1rem",
});

const CenterColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.5vw",
});

const NavLink = styled(Typography)({
  color: "#FFF",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  fontSize: "1.3vw",
  margin: "0 1rem",
  cursor: "pointer",
  width: "100px",
  textAlign: "center",
});

const VietNam = styled(Typography)({
  color: "#FFF",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  margin: "0 ",
  cursor: "pointer",
});

const BulletImage = styled("img")({
  margin: "0 0.5rem",
  width: "8px",
  height: "8px",
  display: "inline-block",
  verticalAlign: "middle",
});

const RightColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  fontWeight: 600,
  alignItems: "flex-end",
  fontFamily: "Aspekta, sans-serif",
  marginLeft: "15rem",
  color: "#FFF",
  width: "6rem",
});

export default function Contact1() {
  const [time, setTime] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* HEADER */}
      <Wrap>
        <HeaderBar>
          {/* Left: Logo */}
          <LeftColumn>
            <LogoWrapper>
              <Image
                src="/assets/logo.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </LogoWrapper>
          </LeftColumn>
          <>
            <VerticalDivider />

            <CenterColumn>
              {navItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <NavLink
                    variant="body1"
                    onClick={() => scrollToSection(item.target)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      opacity:
                        hoveredIndex === null || hoveredIndex === index
                          ? 1
                          : 0.5,
                      transform:
                        hoveredIndex === index
                          ? "translateY(-5px)"
                          : "translateY(0)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.name}
                  </NavLink>
                </React.Fragment>
              ))}
            </CenterColumn>

            <VerticalDivider />
          </>

          <RightColumn>
            <VietNam variant="body1">VIET NAM</VietNam>
            <Typography variant="body1">
              <BulletImage src="/assets/bullet.png" alt="bullet" />
              {time}
            </Typography>
          </RightColumn>
        </HeaderBar>
      </Wrap>
    </>
  );
}
