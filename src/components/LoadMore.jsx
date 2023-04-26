import React from "react";
import { loadingCircleSVG } from "../SVG";
import { useStarships } from "./context/starshipsContext";

function LoadMore(props) {
  const { isLoading } = props;

  const { page, setPage } = useStarships();

  const handleClick = (page) => {
    setPage(page + 1);
  };

  return (
    <div className="flex justify-center py-20">
      {isLoading ? (
        <button
          disabled
          type="button"
          className="mr-2 inline-flex items-center rounded-xl bg-transparent px-6 py-2 text-center font-gemunu text-xl font-medium uppercase text-star-yellow outline  focus:ring-4 focus:ring-star-yellow"
        >
          {loadingCircleSVG}
          Loading...
        </button>
      ) : (
        <button
          onClick={() => handleClick(page)}
          className="rounded-xl px-6 py-2 font-gemunu text-xl uppercase text-star-yellow outline hover:brightness-200 active:scale-105"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default LoadMore;
