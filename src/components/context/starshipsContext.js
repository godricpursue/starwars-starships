import { createContext, useContext, useState } from "react";

const StarshipsContext = createContext();

export const StarshipsProvider = ({ children }) => {
  const [starships, setStarships] = useState([]);

  const values = {
    starships,
    setStarships,
  };

  return (
    <StarshipsContext.Provider value={values}>
      {children}
    </StarshipsContext.Provider>
  );
};

export const useStarships = () => useContext(StarshipsContext);
