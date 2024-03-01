import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const size = () => {
    const isMobile = windowSize.width <= 640;
    const isTablet = windowSize.width <= 992;
    const isLaptop = windowSize.width >= 992;
    const isDesktop = windowSize.width >= 1200;

    return { isMobile, isDesktop, isLaptop, isTablet };
  };

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export default useWindowSize;