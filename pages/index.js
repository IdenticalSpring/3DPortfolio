import React from "react";
import Section1 from "../components/Section1"; 
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";

export default function Home() {
  return (
    <>
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
    </>
  );
}
