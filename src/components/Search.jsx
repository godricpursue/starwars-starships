import React from "react";

function Search() {
  return (
    <div className="flex justify-center">
      <div className="mt-10 flex w-1/2 justify-center space-x-16 border-b-2 border-star-yellow pb-8">
        <input
          className="w-3/4 bg-transparent font-gemunu text-xl text-star-yellow placeholder-star-yellow focus:outline-none"
          name="Search"
          id="search"
          type="text"
          placeholder="What are you looking for?"
        />
        <button className="rounded-xl px-6 py-2 font-gemunu text-xl capitalize text-star-yellow outline hover:brightness-200 active:scale-105">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
