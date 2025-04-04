import React, { useEffect, useRef } from "react";
import { styled, keyframes } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Container = styled(Box)({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Top = styled(Box)({
  borderBottom: "1px solid #1937d6",
  width: "calc(100% - 20px)",
  display: "flex",
  flexDirection: "row",
  padding: "10px",
  justifyContent: "space-between",
});
const Left = styled(Box)({
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  color: "#1937d6",
  fontSize: "1rem",
});
const Right = styled(Box)({});
const Testimony = styled(Box)({
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  color: "#1937d6",
  fontSize: "2vw",
  paddingTop: "50px",
  width: "calc(100vw - 40px)",
});
const Middle = styled(Box)({
  display: "flex",
  flexDirection: "row",
  // gap: "10vw",
  justifyContent: "space-between",
  width: "calc(100% - 20px)",
});
const WrapImg1 = styled(Box)({
  transform: "translate(-30%, 0)",
});
const WrapImg2 = styled(Box)({
  position: "relative",
  // left: "30%",
});
const Testimony1 = styled(Box)({
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  color: "#1937d6",
  fontSize: "2vw",
  paddingTop: "50px",
  width: "calc(100vw - 40px)",
});
const Testimony2 = styled(Box)({
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  color: "#1937d6",
  fontSize: "2vw",
  paddingTop: "80px",
  marginBottom: "5rem",
  width: "calc(100vw - 40px)",
});

const MarqueeContainer = styled(Box)({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  padding: "1rem 0",
  whiteSpace: "nowrap",
  marginTop: "5rem",
  borderTop: "1px solid #FFF",
  borderBottom: "1px solid #FFF",
  backgroundColor: "#1937d6",
});
const MarqueeWrapper = styled(Box)({
  display: "flex",
  width: "150%",
  animation: "marquee 20s linear infinite",
  "@keyframes marquee": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-50%)" },
  },
});

const MarqueeText = styled(Typography)({
  display: "flex",
  flexShrink: 0,
  whiteSpace: "nowrap",
  fontFamily: "Aspekta, sans-serif",
  fontSize: "2rem",
  color: "#FFF",
  fontWeight: "normal",
});
const StyledSpan = styled("span")({
  fontWeight: 700,
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
const Section5Container = styled(Box)({
  width: "100vw",
  height: "140vh",
  backgroundColor: "white",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
});

const MainContent = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "row",
  padding: "2rem",
});

const LeftSide = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  paddingTop: "0",
  gap: "1.5rem",
  marginTop: "80px",
});

const BulletList = styled("ul")({
  margin: 0,
  marginLeft: "5rem",
  paddingLeft: "1.5rem",
});

const BulletItem = styled("li")({
  listStyle: "none",
  position: "relative",
  paddingLeft: "1.5rem",
  color: "#1937d6",
  fontFamily: "Aspekta, sans-serif",
  fontSize: "1.3rem",
  marginBottom: "0.5rem",
  "&:hover": {
    opacity: 1,
  },
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: "1rem",
    height: "1rem",
    backgroundImage: "url('/assets/bullet.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});

const RightSide = styled(Box)({
  width: "40vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "2rem",
});

const EyeContainer = styled(Box)({
  position: "relative",
  width: "300px",
  height: "300px",
});

const EyeOuter = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  "&:hover": {
    animation: `${jelly} 0.5s ease-in-out`,
  },
});

const NavList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "1rem",
});

const NavItem = styled(Box)({
  width: "100%",
  borderBottom: "1px solid rgba(25, 55, 214, 0.8)",
  display: "flex",
  alignItems: "flex-end",
  paddingBottom: "0.3rem",
  cursor: "pointer",
  opacity: 0.8,

  "&:hover": {
    opacity: 1,
    borderBottom: "1px solid rgba(25, 55, 214, 1)",
  },
});

const NavItemText = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  color: "#1937d6",
  fontSize: "6rem",
  lineHeight: 1.2,
  textAlign: "right",
  width: "100%",
});

const FooterContainer = styled(Box)({
  width: "100%",
  padding: "1rem 2rem",
  display: "flex",
  flexDirection: "column",
  gap: "0",
});

const FooterRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderTop: "1px solid #1937d6",
});

const LogoWrapper = styled(Box)({
  position: "relative",
  width: "50px",
  height: "50px",
});

const FooterText = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  color: "#1937d6",
  fontSize: "1rem",
  borderLeft: "1px solid #1937d6",
  paddingTop: "1.3rem",
  paddingBottom: "1.3rem",
  paddingLeft: "4rem",
  paddingRight: "15rem",
  fontWeight: "600",
});

const FooterText1 = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  color: "#FFF",
  fontSize: "1rem",
  paddingTop: "1rem",
  paddingBottom: "1.3rem",
});

const StringImage = styled(Box)({
  transform: "translate(-40%, 0%)",
});
const StyledAnchor = styled("a")({
  color: "#FFF",
  textDecoration: "none",
  opacity: 0.8,
  alignItems: "end",
  "&:hover": {
    opacity: 1,
  },
});

const StyledLink = styled(Link)({
  color: "#fff",
  textDecoration: "none",
  opacity: 0.8,
  "&:hover": {
    opacity: 1,
    borderBottom: "1px solid rgba(255, 255, 255, 1)",
  },
});
const TextLine = styled(Typography)({
  fontFamily: "Aspekta, sans-serif",
  fontWeight: 600,
  fontSize: "1.9vw",
  lineHeight: "1.5",
  color: "#fffdfa", // Initial color
  position: "relative",
  overflow: "hidden",
  display: "inline-block",
  backgroundImage: "linear-gradient(to right, #1937d6 0%, #1937d6 100%)",
  backgroundSize: "0% 100%",
  backgroundRepeat: "no-repeat",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  transition: "background-size 0.8s ease-in-out",
});

const About2 = () => {
  const textRef = useRef([]);

  useEffect(() => {
    textRef.current = textRef.current.filter(Boolean);

    const handleScroll = () => {
      textRef.current.forEach((line) => {
        if (line) {
          const rect = line.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (
            rect.top < windowHeight * 0.8 &&
            rect.bottom > windowHeight * 0.2
          ) {
            line.style.backgroundSize = "100% 100%";
          } else {
            line.style.backgroundSize = "0% 100%";
          }
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <Top>
        <Left>NEUANHSAIANHXINLOI</Left>
        <Right>
          <Image src="/assets/bullet.png" alt="bullet" width={16} height={16} />
        </Right>
      </Top>
      <Box sx={{ paddingTop: "50px", width: "calc(100vw - 40px)" }}>
        {[
          "It’s great that you’re here to see more about me! So, you like me? Hmmm… My name is Hung Pham ",
          "as mentioned quite a few times, and I was born in Vietnam. I studied Graphic Design at Greenwich",
          " University, where I gained the essential knowledge to support you in your work. What I learned ",
          "here is not just about using tools but also advanced research skills and a deep understanding of",
          " images. You can trust me on this because I have graduated.",
        ].map((line, index) => (
          <TextLine key={index} ref={(el) => (textRef.current[index] = el)}>
            {line}
          </TextLine>
        ))}
      </Box>

      <Middle>
        <WrapImg1>
          <Image
            src="/assets/Asset 13.png"
            alt="bullet"
            width={600}
            height={250}
          />
        </WrapImg1>
        <WrapImg2>
          <Image
            src="/assets/Asset 13 - Copy.png"
            alt="bullet"
            width={500}
            height={250}
          />
        </WrapImg2>{" "}
      </Middle>
      <Box sx={{ paddingTop: "50px", width: "calc(100vw - 40px)" }}>
        {[
          "A little about myself—I am a friendly person, which makes communication with me easy.",
          "Don’t hesitate to ask me for multiple design edits; I’m genuinely a calm and chill guy.",
          "I have a strong passion for graphic design, as well as anything related to art and imagery.",
          "That’s a little about me—a relaxed, easygoing person.",
        ].map((line, index) => (
          <TextLine key={`t1-${index}`} ref={(el) => textRef.current.push(el)}>
            {line}
          </TextLine>
        ))}
      </Box>

      <Box
        sx={{
          paddingTop: "80px",
          marginBottom: "5rem",
          width: "calc(100vw - 40px)",
        }}
      >
        {[
          "I hope we’ll have the opportunity to work together!",
          "If you’ve read this far and find me interesting or trustworthy, feel free to contact me.",
        ].map((line, index) => (
          <TextLine key={`t2-${index}`} ref={(el) => textRef.current.push(el)}>
            {line}
          </TextLine>
        ))}
      </Box>

      {/* <Testimony2>
        I hope we’ll have the opportunity to work together! If you’ve read this
        far and find me interesting or trustworthy, feel free to contact me.
      </Testimony2> */}
      <MarqueeContainer>
        <MarqueeWrapper>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          <MarqueeText>
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(0%)",
              }}
            />
            WEB DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>BRANDING</StyledSpan>&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            CONCEPT DESIGN&nbsp;
            <Image
              src="/assets/eye5.png"
              alt="Eye5"
              width={35}
              height={35}
              style={{
                verticalAlign: "middle",
                margin: "0 2rem 0 2rem",
                transform: "translateY(10%)",
              }}
            />
            <StyledSpan>MOTION GRAPHIC</StyledSpan>&nbsp;
          </MarqueeText>
          {/* Duplicate for seamless effect */}
        </MarqueeWrapper>
      </MarqueeContainer>

      <Section5Container>
        {/* <MarqueeContainer>
              <MarqueeText>
                {"Let's work together - Contact me pls - I'm Broke  Let's work together - Contact me pls - I'm Broke   Let's work together - Contact me pls - I'm Broke   Let's work together - Contact me pls - I'm Broke   Let's work together - Contact me pls - I'm Broke".repeat(3)}
              </MarqueeText>
             
            </MarqueeContainer> */}
        <MainContent>
          <LeftSide>
            <StringImage>
              <Image
                src="/assets/Asset 13.png"
                alt="Let's Work Together"
                width={900}
                height={400}
              />
            </StringImage>
            <BulletList>
              <StyledAnchor
                href="https://www.behance.net/phmhng79"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BulletItem>BEHANCE</BulletItem>
              </StyledAnchor>

              <StyledAnchor
                href="https://www.instagram.com/neuanhsaianhxinloi?igsh=MXRpMTMyc3E5cmo0bg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BulletItem>INSTAGRAM</BulletItem>
              </StyledAnchor>

              <StyledAnchor
                href="https://www.upwork.com/freelancers/~01e23b44f2efa24e1d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BulletItem>UPWORK</BulletItem>
              </StyledAnchor>
            </BulletList>
          </LeftSide>

          <RightSide>
            <EyeContainer>
              <EyeOuter>
                <Image
                  src="/assets/Asset 19.png"
                  alt="Outer Eye"
                  layout="fill"
                  objectFit="contain"
                />
              </EyeOuter>
            </EyeContainer>

            {/* Nav items */}
            <NavList>
              <StyledLink href="/about">
                <NavItem>
                  <NavItemText>ABOUT</NavItemText>
                </NavItem>
              </StyledLink>

              <StyledLink href="/work">
                <NavItem>
                  <NavItemText>WORK</NavItemText>
                </NavItem>
              </StyledLink>

              <StyledLink href="/contact">
                <NavItem>
                  <NavItemText>CONTACT</NavItemText>
                </NavItem>
              </StyledLink>
            </NavList>
          </RightSide>
        </MainContent>

        <FooterContainer>
          <FooterRow>
            <Box
              display="flex"
              alignItems="center"
              gap="1rem"
              paddingRight="25rem"
            >
              <LogoWrapper>
                <Image
                  src="/assets/logo xanh.png"
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </LogoWrapper>
            </Box>

            <FooterText>
              HA NOI,
              <br /> VIET NAM
            </FooterText>

            <FooterText>
              +84 66712476
              <br /> pthisone@gmail.com
            </FooterText>
          </FooterRow>

          <FooterRow>
            <FooterText1>2025</FooterText1>
            <FooterText1>DESIGNED BY HUNG PHAM</FooterText1>
          </FooterRow>
        </FooterContainer>
      </Section5Container>
    </Container>
  );
};

export default About2;
