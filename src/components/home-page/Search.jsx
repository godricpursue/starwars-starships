import React from "react";

function Search() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center space-x-16 w-1/2 pb-8 border-b-2 mt-10 border-star-yellow">
        <input
          className="focus:outline-none bg-transparent text-star-yellow placeholder-star-yellow w-3/4 font-gemunu text-xl"
          name="Search"
          id="search"
          type="text"
          placeholder="What are you looking for?"
        />
        <button className="text-star-yellow font-gemunu text-xl outline capitalize rounded-xl hover:brightness-200 active:scale-105 py-2 px-6">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;