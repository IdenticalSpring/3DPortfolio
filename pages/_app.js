// pages/_app.js
import React from "react";
import dynamic from "next/dynamic";
import "../styles/globals.css";

export const Typed = dynamic(
  () => import("react-typed").then((mod) => mod.default),
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* You can also include a global header that uses Typed */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
