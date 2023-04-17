import React from "react";
import Title from "./Title";
import Search from "./Search";
import Card from "./Card";

function Homepage() {
  return (
    <div className="bg-black">
      <div
        className="bg-repeat opacity-50"
        style={{ backgroundImage: 'url("./image/dark-cosmos.jpg")' }}
      >
        <div className="container">
          <Title />

          <div className="flex justify-center">
            <Search />
          </div>

          <div className="flex flex-wrap py-10">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
