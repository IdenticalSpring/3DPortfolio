import React, { useEffect, useState } from "react";
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


const HeaderBar = styled(Box)({
  maxWidth: "100vw",
  // marginTop: "20px",
  // marginLeft: "20px",
  // marginRight: "20px",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 1rem",
  borderTop: "1px solid #1937d6",
  borderBottom: "1px solid #1937d6",
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
  margin: "0 1rem",
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
  marginLeft: "15rem",
  color: "#1937d6",
  width: "6rem",
});

const MainContent = styled(Box)({
  width: "100vw",
  backgroundColor: "white",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "0",
});

const AboutWrapper = styled(Box)({
  position: "relative",
  display: "block",
  width: "200px",
  height: "100px",
  marginLeft: "20px",
  marginTop: "10px",
  marginRight: "auto",
});

const GifWrapper = styled(Box)({
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  paddingTop: "0",
  transform: "translate(0, -10%)",
  justifyContent: "center",
  alignItems: "center",
  // width: "100%",
  height: "100%",
});

const ContentWrapper = styled(Box)({
  // width: "80vw",
  display: "flex",
  height: "600px",
  flexDirection: "column",
  transform: "translate(0,-60%)",
});

const BottomText = styled(Box)({
  width: "50vw",
  marginLeft: "30vw",
  transform: "translate(0, -150%)",
});

const Text = styled(Box)({
  color: "#1937d6",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 400,
  fontSize: "2rem",
});

const Bold = styled(Box)({
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 650,
});
export default function About1() {
  const [time, setTime] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter();
  const navigateToPage = (path) => {
    const targetPath = path.toLowerCase() === "home" ? "/" : `/${path.toLowerCase()}`;
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
      <MainContent>
        <AboutWrapper>
          <Image
            src="/assets/Asset 10.png"
            alt="Logo"
            // layout="fill"
            objectFit="contain"
            width={200}
            height={50}
          />
        </AboutWrapper>
        <GifWrapper>
          <Image
            src="/assets/motion 2_1.gif"
            alt="Logo"
            // layout="fill"
            objectFit="contain"
            width={1200}
            height={1200}
          />
        </GifWrapper>
        <ContentWrapper>
          <Image
            src="/assets/phamhung.png"
            alt="Logo"
            // layout="fill"
            objectFit="contain"
            width={1300}
            height={400}
          />
          <Box sx={{ transform: "translate(0, -130%)" }}>
            <Image
              src="/assets/aka.png"
              alt="Logo"
              width={1300}
              height={200}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </ContentWrapper>
        <BottomText>
          <Text>
            HELLO, MY NAME IS <strong>HUNG PHAM.</strong>
          </Text>
          <Text>
            <strong>
              A PASSIONATE AND ADVENTUROUS
              <br /> GRAPHIC DESIGNER,
            </strong>{" "}
            ALWAYS EAGER TO
            <br />
            EXPLORE NEW IDEAS AND PUSH CREATIVE
            <br /> BOUNDARIES.{" "}
            <strong>
              WITH A STRONG LOVE FOR
              <br /> BRANDING AND MOTION GRAPHICS
            </strong>
          </Text>
        </BottomText>
      </MainContent>
    </>
  );
}
