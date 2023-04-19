import React from "react";

function LoadMore(props) {
  const handleClick = (page) => {
    if (0 < page < 5) {
      props.setPage(page + 1);
    }
  };

  return (
    <div className="flex justify-center py-20">
      <button
        onClick={() => handleClick(props.page)}
        className="text-star-yellow font-gemunu text-xl outline uppercase hover:brightness-200 active:scale-105 rounded-xl py-2 px-6"
      >
        Load More
      </button>
    </div>
  );
}

export default LoadMore;
