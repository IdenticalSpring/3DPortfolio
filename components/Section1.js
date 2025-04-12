import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const DraggableEye = dynamic(() => import("./DraggableEye"), { ssr: false });

const navItems = [
  { name: "ABOUT", target: "section2" },
  { name: "WORK", target: "section3" },
  { name: "CONTACT", target: "section5" },
];

const Wrap = styled(Box)({
  backgroundColor: "rgba(25, 55, 214, 0.7)", // 0.8 = 80% opacity
  margin: 0,
});
const StickyWrap = styled(Wrap)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  // backgroundColor: "rgba(25, 55, 214, 0.7)", // 0.8 = 80% opacity
});
const HeaderBar = styled(Box)({
  maxWidth: "100vw",
  backgroundColor: "rgba(25, 55, 214, 0.7)", // 0.8 = 80% opacity
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

const LogoWrapper = styled(Box)({
  position: "relative",
  width: "30px",
  height: "30px",
});

const CenterColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10vw",
});
const NavLink = styled(Typography)({
  color: "#FFF",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  fontSize: "calc(0.8vw + 0.5vw)",
  margin: "0 0",
  cursor: "pointer",
  width: "100px",
  textAlign: "center",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    left: "0",
    bottom: "0",
    width: "0",
    height: "2px",
    backgroundColor: "#FFF",
    transition: "width 0.3s ease",
  },
  "&:hover::after": {
    width: "110%",
  },
});

const VietNam = styled(Typography)({
  color: "#FFF",
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
  color: "#FFF",
  width: "6rem",
});

const HeroContainer = styled(Box)({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#1937d6",
  position: "relative",
  overflow: "hidden",
  marginTop: "80px",
  fontFamily: "Nauyryzdkeds",
});

const EyeContainer = styled(Box)({
  position: "absolute",
  top: "-35%",
  // left: "50%",
  // transform: "translate(-80%, -80%)",
  width: "30vw",
  height: "30vw",
  zIndex: 2,
});

const TopImage = styled(Image)({
  position: "absolute",
  top: "3%",
  left: "50%",
  transform: "translate(-50%, 0)",
  zIndex: 1,
  width: "calc(100vw - 40px)",
  height: "100%",
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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* HEADER */}
      <StickyWrap>
        <HeaderBar>
          {/* Left: Logo */}
          <LeftColumn>
            <Link href="/" passHref>
              <LogoWrapper>
                <Image
                  src="/assets/logo.png"
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
                    style={{
                      opacity:
                        hoveredIndex === null || hoveredIndex === index
                          ? 1
                          : 0.5,
                      transform:
                        hoveredIndex === index
                          ? "translateY(0)"
                          : "translateY(0)",
                      transition: "all 0.3s ease",
                    }}
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
          {/* <DraggableEye /> */}
          </EyeContainer>

        <BottomImage
          alt="Pham Hung"
          src="/assets/Asset 12.png"
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
