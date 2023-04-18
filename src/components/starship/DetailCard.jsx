import React from "react";
import Footer from "../Footer";

function DetailCard() {
  return (
    <div className="bg-black">
      <div
        className="bg-repeat opacity-50"
        style={{ backgroundImage: 'url("./image/dark-cosmos.jpg")' }}
      >
        {/* -- SVG BACK ARROW -- */}
        <div className="w-10 ml-4 pt-4">
          <a className="hover:brightness-200" href="#">
            <svg
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                  fill="#ffe81f"
                ></path>
              </g>
            </svg>
          </a>
        </div>
        {/* -- STARSHIP CARD -- */}
        <div className="h-screen flex justify-center items-center cursor-default">
          <div className=" w-112 h-128 mx-10 lg:mx-0 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg drop-shadow-0 relative group">
            {/* -- STARSHIP IMAGE -- */}
            <div className="absolute bottom-80 mx-8 my-8 ">
              <img src="./starships/cr90_corvette.png" alt="" />
            </div>
            {/* -- STARSHIP NAME -- */}
            <div className="flex justify-center">
              <h2 className="absolute px-3 bottom-72 text-center capitalize text-3xl font-gemunu text-star-yellow  font-bold">
                CR90 Corvette
              </h2>
            </div>
            {/* -- STARSHIP DETAILS -- */}
            <div className="flex justify-center">
              <div className="absolute px-10 bottom-8 justify-center text-center font-gemunu opacity-100 text-star-yellow brightness-200">
                <p className=" text-lg font-open brightness-75">
                  CR90 Corvette
                </p>
                <br />
                <table>
                  <tr>
                    <td className="text-left">Max Atmosphering Speed</td>
                    <td className="text-right">950</td>
                  </tr>
                  <tr>
                    <td className="text-left">Passangers</td>
                    <td className="text-right">600</td>
                  </tr>
                  <tr>
                    <td className="text-left">Crew</td>
                    <td className="text-right">30-165</td>
                  </tr>
                  <tr>
                    <td className="text-left">Cargo Capasity</td>
                    <td className="text-right">3000000</td>
                  </tr>
                  <tr>
                    <td className="text-left">Manufacturer</td>
                    <td className="text-right">
                      Corellian Engineering Corporation
                    </td>
                  </tr>
                </table>
                <br />
                <p className="text-xl brightness-75">Rating: 2.0</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default DetailCard;
