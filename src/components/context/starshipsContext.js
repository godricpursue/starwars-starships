import { createContext, useContext, useEffect, useState } from "react";

const StarshipsContext = createContext();

export const StarshipsProvider = ({ children }) => {
  // Setting up state variables for starships data, filter text and filtered results
  const [starships, setStarships] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [page, setPage] = useState(1); // current page number
  const [loadedPage, setLoadedPage] = useState(0);

  const values = {
    starships,
    setStarships,
    filterText,
    setFilterText,
    filtered,
    setFiltered,
    page,
    setPage,
    loadedPage,
    setLoadedPage,
  };

  return (
    <StarshipsContext.Provider value={values}>
      {children}
    </StarshipsContext.Provider>
  );
};

export const useStarships = () => useContext(StarshipsContext);
