import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const router = useRouter();
const navigateToPage = (path) => {
  const targetPath =
    path.toLowerCase() === "home" ? "/" : `/${path.toLowerCase()}`;
  router.push(targetPath);
};


const Tittle = styled(Box)({
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",

})
const Work1 = () => {
  return (
    <div>
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
      <Tittle>
        <Image
          src="/assets/work1.png"
          alt="Logo"
          layout="fill"
          objectFit="contain"
        ></Image>
      </Tittle>
      <MainWork>

      </MainWork>
    </div>
  );
};

export default Work1;
