import React from "react";
import Title from "./Title";
import Search from "./Search";
import Card from "./Card";
import Footer from "../Footer";

function Homepage() {
  return (
    <div className="bg-black">
      <div
        className="bg-repeat opacity-50"
        style={{ backgroundImage: 'url("./image/dark-cosmos.jpg")' }}
      >
        <div className="container lg:w-9/12">
          <Title />

          <div className="flex justify-center">
            <Search />
          </div>

          <div className="flex flex-wrap py-10 justify-center">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex justify-center py-20">
            <button className="text-star-yellow font-gemunu text-xl outline uppercase hover:brightness-200 active:scale-105 rounded-xl py-2 px-6">
              Load More
            </button>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
