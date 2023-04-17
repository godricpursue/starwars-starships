import React from "react";

function Card() {
  return (
    <div className="group overflow-hidden ml-3 mt-5">
      <div className="w-48 h-72 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg drop-shadow-0 relative">
        <div className="absolute bottom-36 group-hover:bottom-32 group-hover:py-8 group-hover:mx-2 group-hover:my-2 duration-500">
          <img src="./starships/cr90_corvette.png" alt="" />
        </div>
        <div className="flex justify-center">
          <h2 className="absolute px-3 bottom-16   text-3xl font-gemunu text-star-yellow group-hover:bottom-24 duration-500 font-bold">
            CR90 Corvette
          </h2>
        </div>
        <div className="absolute px-10 bottom-6 group-hover:bottom-10 flex flex-col items-center font-open opacity-0 group-hover:opacity-100 duration-500 text-star-yellow brightness-200">
          <p>CR90 Corvette</p>
          <p className="font-gemunu">Rating: 2.0</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
