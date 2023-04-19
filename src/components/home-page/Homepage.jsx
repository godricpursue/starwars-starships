import React, { useEffect, useState } from "react";
import Title from "./Title";
import Search from "./Search";
import Card from "./Card";
import Footer from "../Footer";
import LoadMore from "./LoadMore";

import getStarships from "../../starshipService";

function Homepage() {
  const [page, setPage] = useState(1);
  const [starships, setStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const ships = await getStarships(page);
      setStarships((prev) => [...prev, ...ships]);
      setIsLoading(false);
    })();
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

          <div className="flex flex-wrap py-10 justify-center">
            {isLoading && starships.length === 0 ? (
              <p>Loading...</p>
            ) : (
              starships.map((starship, index) => (
                <Card
                  key={index}
                  name={starship.name}
                  model={starship.model}
                  rating={starship.hyperdrive_rating}
                />
              ))
            )}
          </div>

          {page < 4 ? <LoadMore page={page} setPage={setPage} /> : null}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
