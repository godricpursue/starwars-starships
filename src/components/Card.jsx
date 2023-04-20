import React from "react";
import slugify from "slugify";

function Card(props) {
  const { name, model, rating } = props;
  return (
    <div className="group ml-3 mt-5 cursor-pointer">
      <div className="w-56 h-96 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg drop-shadow-0 relative">
        <div className="flex justify-center">
          <div className="absolute bottom-40 p-3  mx-2 w-48 h-48 flex items-center justify-center overflow-hidden ">
            <img
              className="group-hover:scale-110 duration-500"
              src={`./starships/${slugify(name, "_")}.png`}
              alt=""
            />
          </div>
        </div>
        <div className="absolute bottom-0 w-full group-hover:bottom-3 duration-500 ">
          <h2 className="absolute px-3 bottom-20 text-center capitalize text-3xl font-gemunu text-star-yellow duration-500 font-bold w-full">
            {name}
          </h2>
          <div className="absolute px-3 bottom-2 flex flex-col items-center font-open opacity-0 group-hover:opacity-100 duration-500 text-star-yellow brightness-200 text-center w-full">
            <p className="capitalize">{model}</p>
            <p className="font-gemunu">Rating: {rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
