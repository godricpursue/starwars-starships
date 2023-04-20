import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { useStarships } from "../components/context/starshipsContext";
import slugify from "slugify";
import { Link, useLocation, useParams } from "react-router-dom";

function DetailCard() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { starships } = useStarships();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let cardDetails = {};
  starships.map((starship) => {
    let stringify = String(starship.name);
    if (slugify(stringify, "_") === id) {
      return (cardDetails = {
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        max_atmosphering_speed: starship.max_atmosphering_speed,
        crew: starship.crew,
        cargo_capacity: starship.cargo_capacity,
        passengers: starship.passengers,
        rating: starship.hyperdrive_rating,
      });
    }
  });

  return (
    <div className="bg-black">
      <div
        className="bg-repeat opacity-50"
        style={{ backgroundImage: 'url("./image/dark-cosmos.jpg")' }}
      >
        {/* -- SVG BACK ARROW -- */}
        <div className="w-10 ml-4 pt-4">
          <Link to="/" className="hover:brightness-200">
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
          </Link>
        </div>
        {/* -- STARSHIP CARD -- */}
        <div className="h-screen flex justify-center items-center cursor-default">
          <div className=" w-112 h-128 mx-10 lg:mx-0 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg drop-shadow-0 relative group">
            {/* -- STARSHIP IMAGE -- */}
            <div className="flex justify-center">
              <div className="absolute bottom-80 m-8 w-48 h-48 flex items-center justify-center">
                <img
                  src={`./starships/${slugify(cardDetails.name, "_")}.png`}
                  alt=""
                />
              </div>
            </div>

            {/* -- STARSHIP NAME -- */}
            <div className="flex justify-center">
              <h2 className="absolute px-3 my-3 bottom-72 text-center capitalize text-3xl font-gemunu text-star-yellow  font-bold">
                {cardDetails.name}
              </h2>
            </div>
            {/* -- STARSHIP DETAILS -- */}
            <div className="flex justify-center">
              <div className="absolute px-10 bottom-6 justify-center text-center font-gemunu opacity-100 text-star-yellow brightness-200">
                <p className=" text-lg font-open brightness-75">
                  {cardDetails.model}
                </p>
                <br />
                <table>
                  <tr>
                    <td className="text-left">Max Atmosphering Speed</td>
                    <td className="text-right">
                      {cardDetails.max_atmosphering_speed}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left">Passangers</td>
                    <td className="text-right">{cardDetails.passengers}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Crew</td>
                    <td className="text-right">{cardDetails.crew}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Cargo Capasity</td>
                    <td className="text-right">{cardDetails.cargo_capacity}</td>
                  </tr>
                  <tr>
                    <td className="text-left">Manufacturer</td>
                    <td className="text-right">{cardDetails.manufacturer}</td>
                  </tr>
                </table>
                <br />
                <p className="text-xl brightness-75">
                  Rating: {cardDetails.rating}
                </p>
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
