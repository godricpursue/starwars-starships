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
import getStarships from "../starshipService";
import ScrollToTop from "../components/ScrollToTop";

function Homepage() {
  // Setting initial states using useState hook
  const [page, setPage] = useState(1); // current page number
  const [prevPage, setPrevPage] = useState(0); // previously fetched page number
  const { starships, setStarships, filtered, filterText } = useStarships(); // fetching and updating starships data
  const [isLoading, setIsLoading] = useState(true); // managing loading state
  const [isSearching, setIsSearching] = useState(false); // managing searching state
  const [showNoResults, setShowNoResults] = useState(false); // managing state to show no search result message

  // Fetching starships data from server using async-await and updating state
  const getShips = async (page) => {
    setIsLoading(true);
    setPrevPage(page); // update the previously fetched page number
    const ships = await getStarships(page);
    setStarships((prev) => [...prev, ...ships]);
    setIsLoading(false);
  };

  // Searching starships based on the search input and updating the state accordingly
  const handleSearch = async (page) => {
    setIsSearching(true);
    setPage(page + 1);
    // only call getShips if the current page number is not equal to the previously fetched page number
    if (page !== prevPage) {
      await getShips(page);
    }
    setIsSearching(false);
    setTimeout(() => {
      setShowNoResults(filtered.length === 0); // show no results message if search result is empty
    }, 3000); // wait for 3 seconds before showing no results message
  };

  // Fetching starships data on page load and updating state using useEffect hook
  useEffect(() => {
    setIsLoading(false);
    if (starships.length === 0 || page > 1) {
      getShips(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  // Searching starships data based on filter text and updating state using useEffect hook
  useEffect(() => {
    if (filterText.length > 0 && filtered.length === 0 && page < 4) {
      handleSearch(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterText, filtered]);

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

          {(page < 4 || isLoading) && starships.length !== 0 ? (
            <LoadMore isLoading={isLoading} page={page} setPage={setPage} />
          ) : null}

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
