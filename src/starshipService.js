import axios from "axios";

const BASE_URL = "https://swapi.dev/api/starships";

const getStarships = async (page) => {
  if (0 < page < 5) {
    try {
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
