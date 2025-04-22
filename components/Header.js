import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { styled, keyframes } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
const navItems = [
  // { name: "HOME", target: "section1" },
  { name: "ABOUT", target: "section2" },
  { name: "WORK", target: "section3" },
  { name: "CONTACT", target: "section5" },
];
const Wrap = styled(Box)({
  backgroundColor: "rgba(255, 255, 255, 0.7)", // 80% opacity
  margin: 0,
});

// In your Section1 component
const StickyWrap = styled(Wrap)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  // backgroundColor: "rgba(255, 255, 255, 0.7)", // 80% opacity
});

const HeaderBar = styled(Box)({
  maxWidth: "100vw",
  // marginLeft: "20px",
  // marginRight: "20px",

  backgroundColor: "rgba(255, 255, 255, 0.7)", // 80% opacity
  display: "flex",
  alignItems: "center",
  height: "50px",
  justifyContent: "space-between",
  padding: "0 1rem",
  width: "100%",
  zIndex: 1000,
  position: "fixed",
});

const LeftColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginRight: "10rem",
  width: "6rem",
});
const jelly = keyframes`
  0% {
    transform: scale(0.8, 0.8);
  }
  25% {
    transform: scale(1.2, 0.8); 
  }
  50% {
    transform: scale(1, 1);
  }
  75% {
    transform: scale(0.8, 1.2);
  }
  100% {
    transform: scale(1, 1);
  }
`;
const LogoWrapper = styled(Box)(() => ({
  position: "relative",
  width: "30px",
  height: "30px",
  "&:hover": {
    animation: `${jelly} 0.5s ease-in-out`,
  },
  "& > span": {
    pointerEvents: "none",
  },
}));

const CenterColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10vw",
});

const NavLink = styled(Typography)({
  color: "rgba(25, 55, 214, 0.8)", // Default color with 0.8 opacity
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  fontSize: "calc(0.8vw + 0.5vw)",
  margin: "0",
  cursor: "pointer",
  width: "100px",
  textAlign: "center",
  position: "relative",
  transition: "color 0.3s ease", // Smooth transition for the text color
  "&:hover": {
    color: "rgba(25, 55, 214, 1)", // Full opacity on hover
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "0",
    height: "2px",
    backgroundColor: "#1937d6",
    transition: "width 0.3s ease",
  },
  "&:hover::after": {
    width: "110%",
  },
});

const VietNam = styled(Typography)({
  color: "#1937d6",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  margin: "0 ",
  fontSize: "calc(0.2vw + 0.5vw)",

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
  marginLeft: "10rem",
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
    <StickyWrap>
      <HeaderBar>
        {/* Left: Logo */}
        <LeftColumn>
          <Link href="/" passHref>
            <LogoWrapper>
              <Image
                src="/assets/logo xanh.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </LogoWrapper>
          </Link>
        </LeftColumn>
        <>
          <CenterColumn>
            {navItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <NavLink
                  variant="body1"
                  onClick={() => navigateToPage(item.name)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  // style={{
                  //   opacity:
                  //     hoveredIndex === null || hoveredIndex === index
                  //       ? 1
                  //       : 0.5,
                  //   transform:
                  //     hoveredIndex === index
                  //       ? "translateY(-5px)"
                  //       : "translateY(0)",
                  //   transition: "all 0.3s ease",
                  // }}
                >
                  {item.name}
                </NavLink>
              </React.Fragment>
            ))}
          </CenterColumn>
        </>

        <RightColumn>
          <VietNam variant="body1">VIET NAM</VietNam>
          <Typography variant="body1">
            <BulletImage src="/assets/bullet.png" alt="bullet" />
            {time}
          </Typography>
        </RightColumn>
      </HeaderBar>
    </StickyWrap>
  );
};

export default Header;
