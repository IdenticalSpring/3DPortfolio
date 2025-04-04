import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
const navItems = [
  { name: "HOME", target: "section1" },
  { name: "ABOUT", target: "section2" },
  { name: "WORK", target: "section3" },
  { name: "CONTACT", target: "section5" },
];
const Wrap = styled(Box)({
  backgroundColor: "white",
  paddingTop: "20px",
  margin: 0,
  paddingLeft: "20px",
  paddingRight: "20px",
  paddingBottom: "80px",
});

// In your Section1 component
const StickyWrap = styled(Wrap)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  backgroundColor: "white",
});

const HeaderBar = styled(Box)({
  maxWidth: "100vw",
  // marginLeft: "20px",
  // marginRight: "20px",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 1rem",
  width: "calc(100% - 40px)",
  borderTop: "1px solid #1937d6",
  zIndex: 1000, // Ensure header stays on top
  position: "fixed",
  borderBottom: "1px solid #1937d6",
});

const LeftColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginRight: "18rem",
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
  backgroundColor: "#1937d6",
  margin: "0 1rem",
});

const CenterColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.5vw",
});

const NavLink = styled(Typography)({
  color: "#1937d6",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  fontSize: "1.3vw",
  margin: "0 0",
  cursor: "pointer",
  width: "100px",
  textAlign: "center",
});

const VietNam = styled(Typography)({
  color: "#1937d6",
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
  marginLeft: "18rem",
  color: "#1937d6",
  width: "6rem",
});
const Header = () => {
const [time, setTime] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter();
  const navigateToPage = (path) => {
    const targetPath =
      path.toLowerCase() === "home" ? "/" : `/${path.toLowerCase()}`;
    router.push(targetPath);
  };

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

  return (
    <div><StickyWrap>
    <HeaderBar>
      {/* Left: Logo */}
      <LeftColumn>
        <LogoWrapper>
          <Image
            src="/assets/logo xanh.png"
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
                onClick={() => navigateToPage(item.name)}
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
  </StickyWrap></div>
  )
}

export default Header