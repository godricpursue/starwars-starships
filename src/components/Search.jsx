import React from "react";
import { useStarships } from "./context/starshipsContext";
import { clearAllSVG } from "../SVG";

function Search(props) {
  const { filterText, setFilterText } = useStarships();
  const clearButtonHidden = filterText.length === 0;

  const handleClick = () => {
    setFilterText("");
  };
  return (
    <div className="flex justify-center">
      <div className="mt-10 flex w-1/2 justify-center space-x-8 border-b-2 border-star-yellow pb-3">
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
