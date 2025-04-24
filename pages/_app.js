import { useEffect, useRef } from "react";
import "../styles/globals.css"; // make sure this exists
import "../styles/font-face.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <div className="cursor-circle" ref={cursorRef}></div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
