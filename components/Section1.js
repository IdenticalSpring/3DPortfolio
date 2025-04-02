import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const DraggableEye = dynamic(() => import("./DraggableEye"), { ssr: false });

const navItems = [
  { name: "HOME", target: "section1" },
  { name: "ABOUT", target: "section2" },
  { name: "WORK", target: "section3" },
  { name: "CONTACT", target: "section5" },
];

const HeaderBar = styled(Box)({
  maxWidth: "100vw",
  marginTop: "20px",
  marginLeft: "20px",
  marginRight: "20px",
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

const HeroContainer = styled(Box)({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#1937d6",
  position: "relative",
  overflow: "hidden",
  fontFamily: "Nauyryzdkeds",
});

const TopText = styled(Typography)({
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "6rem",
  fontWeight: "bold",
  color: "#FFF",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  lineHeight: 1,
  fontFamily: "NauryzRedKeds",
  zIndex: 1,
});

const EyeContainer = styled(Box)({
  position: "absolute",
  top: "-19%",
  // left: "50%",
  // transform: "translate(-80%, -80%)",
  width: "60vw",
  height: "60vw",
  zIndex: 2,
});

const BottomText = styled(Typography)({
  position: "absolute",
  bottom: "10%",
  left: "50%",
  transform: "translate(-50%, -100%)",
  fontSize: "6rem",
  fontWeight: "bold",
  color: "#FFD700",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  lineHeight: 1,
  fontFamily: "NauryzRedKeds",
  zIndex: 3,
});

const TestSide = styled(Typography)({
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translateX(270%)",
  fontSize: "6rem",
  fontWeight: "bold",
  color: "#FFF",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  lineHeight: 1,
  fontFamily: "Aspekta, sans-serif",
  zIndex: 1,
});


const TopImage = styled(Image)({
  position: "absolute",
  top: "3%",
  left: "50%",
  transform: "translate(-50%, 0)",
  zIndex: 1,
  width: "calc(100vw - 40px)", 
  height: "100%", 
  maxWidth: "1440px",

});

const TopOverlayImage = styled(Image)({
  position: "absolute",
  top: "0", 
  left: "50%",
  transform: "translate(-7%, 0)",
  zIndex: 2,
  width: "80vw",
  height: "30vw",
  // maxWidth: "calc( 1440px-80vw",
  maxHeight: "30vw",
});

const BottomImage = styled(Image)({
  position: "absolute",
  bottom: "-20%",
  left: "50%",
  transform: "translate(-50%, 0)",
  zIndex: 3,
  width: "calc(100vw - 40px)", 
  maxWidth: "1440px",
  height: "40%",
});

const BottomOverlayImage = styled(Image)({
  position: "absolute",
  bottom: "5%", 
  left: "50%",
  transform: "translate(-95%, 0)",
  zIndex: 4,
  width: "80vw",
  height: "30vw",
});

export default function Section1() {
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
                      hoveredIndex === null || hoveredIndex === index ? 1 : 0.5,
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

      <HeroContainer>
        <TopImage
          src="/assets/Asset 11.png"
          alt="What's up"
          width={600}
          height={100}
        />
        <TopOverlayImage
          src="/assets/Asset 13.png"
          alt="Top overlay"
          width={300}
          height={50}
        />

        <EyeContainer>
          <DraggableEye />
        </EyeContainer>

        <BottomImage
          src="/assets/Asset 12.png"
          alt="Pham Hung"
          width={600}
          height={100}
        />
        <BottomOverlayImage
          src="/assets/Asset 13.png"
          alt="Bottom overlay"
          width={300}
          height={50}
        />
      </HeroContainer>
    </>
  );
}
