import { useState, useEffect } from "react";

export default function () {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const sm = 640;
    const lg = 1024;
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    const isTabletDimension = width <= lg;
    const isMobileDimension = width <= sm;
    const islaptopDimension = width <= lg;

    return {
      width,
      height,
      isTabletDimension,
      isMobileDimension,
      islaptopDimension,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}
