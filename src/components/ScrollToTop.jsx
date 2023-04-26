import React, { useEffect, useState } from "react";
import { scrollToTopSVG } from "../SVG";

function ScrollToTop() {
  const [scrollToTop, setScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 500) {
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={scrollToTop ? "" : "hidden"}>
      <button
        className="fixed bottom-5 right-10 z-10 h-14 w-14"
        onClick={handleClick}
      >
        {scrollToTopSVG}
      </button>
    </div>
  );
}

export default ScrollToTop;
