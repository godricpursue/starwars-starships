import React from "react";

function Title() {
  return (
    <div>
      <div className="flex flex-col items-center -space-y-12 pt-10">
        <img
          className="w-72 brightness-100"
          src="./image/starwars.png"
          alt="Star Wars"
        />
        <img
          className="w-96 pt-2"
          src="./image/spaceship.png"
          alt="Star Wars"
        />
      </div>
    </div>
  );
}

export default Title;
