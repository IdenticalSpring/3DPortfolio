import WorkDetail1 from "../../components/WorkDetail1";
import WorkDetail2 from "../../components/WorkDetail2";
import WorkDetail3 from "../../components/WorkDetail3";
import WorkDetail4 from "../../components/WorkDetail4";
import WorkDetail5 from "../../components/WorkDetail5";
import WorkDetail6 from "../../components/WorkDetail6";
import React, { useEffect, useState } from "react";
import { styled, keyframes } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "@/components/Header";

const navItems = [
  { name: "HOME", target: "section1" },
  // { name: "ABOUT", target: "section2" },
  { name: "WORK", target: "section3" },
  { name: "CONTACT", target: "section5" },
];

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
const Wrap = styled(Box)(() => ({
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  margin: 0,
}));

// In your Section1 component
const StickyWrap = styled(Wrap)(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
}));

const HeaderBar = styled(Box)(() => ({
  maxWidth: "100vw",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  display: "flex",
  alignItems: "center",
  height: "50px",
  justifyContent: "space-between",
  padding: "0 1rem",
  width: "100%",
  zIndex: 1000,
  position: "fixed",
}));

const LeftColumn = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  marginRight: "10rem",
  width: "6rem",
  "&:hover": {
    animation: `${jelly} 0.5s ease-in-out`,
  },
}));

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
const CenterColumn = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10vw",
}));

const NavLink = styled(Typography)(() => ({
  color: "rgba(25, 55, 214, 0.8)",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  fontSize: "calc(0.8vw + 0.5vw)",
  margin: "0",
  cursor: "pointer",
  width: "100px",
  textAlign: "center",
  position: "relative",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "rgba(25, 55, 214, 1)",
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
}));

const VietNam = styled(Typography)(() => ({
  color: "#1937d6",
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  margin: "0",
  fontSize: "calc(0.2vw + 0.5vw)",
  cursor: "pointer",
}));

const BulletImage = styled("img")(() => ({
  margin: "0 0.5rem",
  width: "8px",
  height: "8px",
  display: "inline-block",
  verticalAlign: "middle",
}));

const RightColumn = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  fontWeight: 600,
  alignItems: "flex-end",
  fontFamily: "Aspekta, sans-serif",
  marginLeft: "10rem",
  color: "#1937d6",
  width: "6rem",
}));

const Container = styled(Box)(() => ({
  width: "100vw",
  margin: 0,
  padding: 0,
  height: "100%",
}));

/* 
  MobileOverlay now uses the mobile.jpg asset as a full-screen background.
  We also disable scrolling on mobile in a useEffect below.
*/
const MobileOverlay = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  overflow: hidden;
`;

const WorkDetailPage = () => {
  const [time, setTime] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navigateToPage = (path) => {
    const targetPath =
      path.toLowerCase() === "home" ? "/" : `/${path.toLowerCase()}`;
    router.push(targetPath);
  };

  const isMobile = useMediaQuery("(max-width:768px)");

  // Disable scrolling on mobile devices when overlay is active
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobile]);

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

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderWorkDetail = () => {
    if (!id) return null; // Handle initial render when id is undefined
    switch (id.toString()) {
      case "1":
        return <WorkDetail1 />;
      case "2":
        return <WorkDetail2 />;
      case "3":
        return <WorkDetail3 />;
      case "4":
        return <WorkDetail6 />;
      case "5":
        return <WorkDetail5 />;
      case "6":
        return <WorkDetail4 />;
      default:
        return <Typography variant="h2">Project not found</Typography>;
    }
  };

  // Early return: If on mobile, render only the mobile overlay.
  if (isMobile) {
    return (
      <Container>
        <MobileOverlay>
          <Image
            src="/assets/mobile.jpg"
            alt="Mobile experience"
            layout="fill"
            objectFit="cover"
            priority
          />
        </MobileOverlay>
      </Container>
    );
  }

  // Render full page content for non-mobile devices.
  return (
    <Container>
      <Wrap>
        <Header>
          {/* Left: Logo */}
          <LeftColumn>
            <LogoWrapper>
              <Image
                src="/assets/logo xanh.png"
                alt="Logo"
                fill
                style={{ objectFit: "contain", pointerEvents: "none" }}
              />
            </LogoWrapper>
          </LeftColumn>
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
          <RightColumn>
            <VietNam variant="body1">VIET NAM</VietNam>
            <Typography variant="body1">
              <BulletImage src="/assets/bullet.png" alt="bullet" />
              {time}
            </Typography>
          </RightColumn>
        </Header>
      </Wrap>
      <Box
        sx={{
          pt: "100px",
          minHeight: "100vh",
          backgroundColor: "white",
          padding: "0",
        }}
      >
        {renderWorkDetail()}
      </Box>
    </Container>
  );
};

export default WorkDetailPage;
