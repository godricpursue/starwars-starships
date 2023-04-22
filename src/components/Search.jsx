import React from "react";
import { useStarships } from "./context/starshipsContext";

function Search(props) {
  const { filterText, setFilterText } = useStarships();
  return (
    <div className="flex justify-center">
      <div className="mt-10 flex w-1/2 justify-center space-x-16 border-b-2 border-star-yellow pb-8">
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
      </div>
    </div>
  );
}

export default Search;
