import React, { useEffect, useState } from "react";

// Importing custom components used in the application
import Title from "../components/Title";
import Search from "../components/Search";
import Card from "../components/Card";
import Footer from "../components/Footer";
import LoadMore from "../components/LoadMore";
import Loading from "../components/Loading";
import NoResults from "../components/NoResults";

// Importing context and service used in the application
import { useStarships } from "../components/context/starshipsContext";
import getStarships, { getSearch } from "../starshipService";
import ScrollToTop from "../components/ScrollToTop";
import useDebounce from "../hooks/useDebounce";

function Homepage() {
  // Setting initial states using useState hook

  const {
    starships,
    setStarships,
    filtered,
    setFiltered,
    filterText,
    page,
    loadedPage,
    setLoadedPage,
  } = useStarships(); // fetching and updating starships data
  const [isLoading, setIsLoading] = useState(true); // managing loading state
  const [isSearching, setIsSearching] = useState(false); // managing searching state
  const [showNoResults, setShowNoResults] = useState(false); // managing state to show no search result message

  // Fetching starships data from server using async-await and updating state
  const getShips = async (page) => {
    setIsLoading(true);
    setLoadedPage(page);
    const ships = await getStarships(page);
    setStarships((prev) => [...prev, ...ships]);
    setIsLoading(false);
  };

  const getSearchedShips = async (search) => {
    setIsSearching(true);
    const ships = await getSearch(search);
    setFiltered(ships);
    setIsSearching(false);
  };

  const debouncedSearch = useDebounce(filterText, 400);

  useEffect(() => {
    if (filterText.length > 0) {
      getSearchedShips(debouncedSearch);
      setShowNoResults(filtered.length === 0 && !isSearching);
    } else if (filterText.length === 0) {
      setFiltered([]);
    }
  }, [debouncedSearch]);

  // Fetching starships data on page load and updating state using useEffect hook
  useEffect(() => {
    setIsLoading(false);
    if (starships.length === 0 || page > loadedPage) {
      getShips(page);
    }
  }, [page]);

  return (
    <div className="bg-black">
      <div
        className={
          filterText.length > 0 && filtered.length === 0
            ? "h-screen opacity-50"
            : "bg-repeat opacity-50"
        }
        style={{ backgroundImage: 'url("./image/dark-cosmos.jpg")' }}
      >
        <ScrollToTop />

        <div className="container lg:w-9/12">
          <Title />
          <Search />

          <div className="flex flex-wrap justify-center py-10">
            {isLoading && (!starships || starships.length === 0) ? (
              <Loading />
            ) : filterText.length > 0 ? (
              <>
                {filtered.length > 0 ? (
                  filtered.map((starship, index) => (
                    <Card
                      key={index}
                      name={starship.name}
                      model={starship.model}
                      rating={starship.hyperdrive_rating}
                    />
                  ))
                ) : isSearching ? (
                  <Loading />
                ) : showNoResults ? (
                  <NoResults />
                ) : null}
              </>
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

          {(page < 4 || isLoading) &&
          starships.length !== 0 &&
          filterText.length === 0 ? (
            <LoadMore isLoading={isLoading} />
          ) : null}

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
