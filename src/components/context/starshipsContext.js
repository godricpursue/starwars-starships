import { createContext, useContext, useEffect, useState } from "react";

const StarshipsContext = createContext();

export const StarshipsProvider = ({ children }) => {
  // Setting up state variables for starships data, filter text and filtered results
  const [starships, setStarships] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filtered, setFiltered] = useState([]);

  // Filtering starships data based on filter text
  useEffect(() => {
    const results = starships.filter((item) => {
      return ["name", "model"].some((key) => {
        return item[key]
          .toString()
          .toLowerCase()
          .includes(filterText.toLowerCase());
      });
    });
    setFiltered(results);
  }, [starships, filterText]);

  const values = {
    starships,
    setStarships,
    filterText,
    setFilterText,
    filtered,
  };

  return (
    <StarshipsContext.Provider value={values}>
      {children}
    </StarshipsContext.Provider>
  );
};

export const useStarships = () => useContext(StarshipsContext);
