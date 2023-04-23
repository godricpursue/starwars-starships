import React from "react";
import { useStarships } from "./context/starshipsContext";

function Search(props) {
  const { filterText, setFilterText } = useStarships();
  const clearButtonHidden = filterText.length === 0;

  const clearAllSVG = (
    <svg
      fill="#ffe81f"
      viewBox="-28 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>cancel</title>
        <path d="M64 388L196 256 64 124 96 92 228 224 360 92 392 124 260 256 392 388 360 420 228 288 96 420 64 388Z"></path>
      </g>
    </svg>
  );

  const handleClick = () => {
    setFilterText("");
  };
  return (
    <div className="flex justify-center">
      <div className="mt-10 flex w-1/2 justify-center space-x-8 border-b-2 border-star-yellow pb-8">
        <input
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          autoComplete="off"
          className="w-full bg-transparent font-gemunu text-xl text-star-yellow placeholder-star-yellow focus:outline-none"
          name="Search"
          id="search"
          type="text"
          placeholder="What are you looking for?"
        />
        <div className="flex items-center justify-center pr-4">
          <button
            onClick={handleClick}
            className={`h-6 w-6 ${clearButtonHidden ? "hidden" : ""}`}
          >
            {clearAllSVG}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
