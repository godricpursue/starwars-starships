import React, { useEffect, useState } from "react";

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
        className="fixed bottom-5 right-10 h-14 w-14"
        onClick={handleClick}
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#ffe81fCCCCCC"
            stroke-width="0.048"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title></title>{" "}
            <g id="Complete">
              {" "}
              <g id="F-Push">
                {" "}
                <g id="Up">
                  {" "}
                  <g>
                    {" "}
                    <polyline
                      data-name="Down"
                      fill="none"
                      id="Down-2"
                      points="19 17.9 12 10.9 5 17.9"
                      stroke="#ffe81f"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polyline>{" "}
                    <line
                      fill="none"
                      stroke="#ffe81f"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="19"
                      x2="5"
                      y1="6.1"
                      y2="6.1"
                    ></line>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
}

export default ScrollToTop;
