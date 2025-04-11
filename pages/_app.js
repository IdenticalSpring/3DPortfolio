import { useEffect, useRef } from "react";
import "../styles/globals.css"; // make sure this exists

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
      <div className="cursor-circle" ref={cursorRef}></div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
