import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { useStarships } from "../components/context/starshipsContext";
import slugify from "slugify";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { navigateBackSVG } from "../SVG";

function DetailCard() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { starships } = useStarships();

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

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
        <div className="ml-4 w-10 pt-4">
          <Link onClick={goBack} className="hover:brightness-200">
            {navigateBackSVG}
          </Link>
        </div>
        {/* -- STARSHIP CARD -- */}
        <div className="flex h-screen cursor-default items-center justify-center">
          <div className=" drop-shadow-0 group relative mx-10 h-128 w-112 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm lg:mx-0">
            {/* -- STARSHIP IMAGE -- */}
            <div className="flex justify-center">
              <div className="absolute bottom-80 m-8 flex h-48 w-48 items-center justify-center">
                <img
                  src={`./starships/${slugify(cardDetails.name, "_")}.png`}
                  alt=""
                />
              </div>
            </div>

            {/* -- STARSHIP NAME -- */}
            <div className="flex justify-center">
              <h2 className="absolute bottom-72 my-3 px-3 text-center font-gemunu text-3xl font-bold capitalize  text-star-yellow">
                {cardDetails.name}
              </h2>
            </div>
            {/* -- STARSHIP DETAILS -- */}
            <div className="flex justify-center">
              <div className="absolute bottom-6 justify-center px-10 text-center font-gemunu text-star-yellow opacity-100 brightness-200">
                <p className=" font-open text-lg brightness-75">
                  {cardDetails.model}
                </p>
                <br />

                <table>
                  <tbody>
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
                      <td className="text-right">
                        {cardDetails.cargo_capacity}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left">Manufacturer</td>
                      <td className="text-right">{cardDetails.manufacturer}</td>
                    </tr>
                  </tbody>
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
