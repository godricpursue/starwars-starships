import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Search from "../components/Search";
import Card from "../components/Card";
import Footer from "../components/Footer";
import LoadMore from "../components/LoadMore";
import Loading from "../components/Loading";

import { useStarships } from "../components/context/starshipsContext";
import getStarships from "../starshipService";
import { Link } from "react-router-dom";
import slugify from "slugify";

function Homepage() {
  const [page, setPage] = useState(1);
  const { starships, setStarships } = useStarships();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    if (starships.length === 0 || page > 1) {
      setIsLoading(true);
      (async () => {
        const ships = await getStarships(page);
        setStarships((prev) => [...prev, ...ships]);
        setIsLoading(false);
      })();
    }
  }, [page]);

  return (
    <div className="bg-black">
      <div
        className="bg-repeat opacity-50"
        style={{ backgroundImage: 'url("./image/dark-cosmos.jpg")' }}
      >
        <div className="container lg:w-9/12">
          <Title />
          <Search />

          <div className="flex flex-wrap justify-center py-10">
            {isLoading && starships.length === 0 ? (
              <Loading />
            ) : (
              starships.map((starship, index) => (
                <Link to={`/${slugify(starship.name, "_")}`}>
                  <Card
                    key={index}
                    name={starship.name}
                    model={starship.model}
                    rating={starship.hyperdrive_rating}
                  />
                </Link>
              ))
            )}
          </div>

          {page < 4 && starships.length !== 0 ? (
            <LoadMore isLoading={isLoading} page={page} setPage={setPage} />
          ) : null}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
