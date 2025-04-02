import React from "react";
import Section1 from "../components/Section1"; 
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #1937d6;
`;

export default function Home() {
  return (
    <Page>
      <div id="section1">
        <Section1 />
      </div>
      <div id="section2">
        <Section2 />
      </div>
      <div id="section3">
        <Section3 />
      </div>
      <div id="section4">
        <Section4 />
      </div>
      <div id="section5">
        <Section5 />
      </div>
    </Page>
  );
}
