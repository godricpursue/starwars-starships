import React from "react";
import slugify from "slugify";

function Card(props) {
  const { name, model, rating } = props;
  return (
    <div className="group ml-3 mt-5 cursor-pointer">
      <div className="drop-shadow-0 relative h-96 w-56 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm">
        <div className="flex justify-center">
          <div className="absolute bottom-40 mx-2  flex h-48 w-48 items-center justify-center overflow-hidden p-3 ">
            <img
              className="duration-500 group-hover:scale-110"
              src={`./starships/${slugify(name, "_")}.png`}
              alt=""
            />
          </div>
        </div>
        <div className="absolute bottom-0 w-full duration-500 group-hover:bottom-3 ">
          <h2 className="absolute bottom-20 w-full px-3 text-center font-gemunu text-3xl font-bold capitalize text-star-yellow duration-500">
            {name}
          </h2>
          <div className="absolute bottom-2 flex w-full flex-col items-center px-3 text-center font-open text-star-yellow opacity-0 brightness-200 duration-500 group-hover:opacity-100">
            <p className="capitalize">{model}</p>
            <p className="font-gemunu">Rating: {rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
