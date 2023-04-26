import axios from "axios";
import useDebounce from "./hooks/useDebounce";

export const getSearch = async (search) => {
  try {
    // Sending GET request to SWAPI to fetch starships data for the search
    const {
      data: { results },
    } = await axios(`https://swapi.dev/api/starships/?search=${search}`);

    return results;
  } catch (err) {
    console.log(err);
  }
};

// Function to fetch starships data from SWAPI
const getStarships = async (page) => {
  if (0 < page < 5) {
    try {
      // Sending GET request to SWAPI to fetch starships data for the given page number
      const {
        data: { results },
      } = await axios(`https://swapi.dev/api/starships/?page=${page}`);

      return results;
    } catch (err) {
      console.log(err);
    }
  }
};

export default getStarships;
