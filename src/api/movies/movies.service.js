const {
  fetchAllMovies,
  fetchMoiveByGenre,
  fetchMoiveById,
  fetchMoiveByYear,
} = require("./movie.dao");

module.exports.fetchAllMovies = async () => {
  try {
    let results = await fetchAllMovies();
    return results;
  } catch (error) {
    console.log(`error due to fetch all moives ${{ error }}`);
    throw error;
  }
};

module.exports.fetchMoiveByGenre = async (genre) => {
  try {
    let results = await fetchMoiveByGenre(genre);
    return results;
  } catch (error) {
    console.log(`error due to fetch moive by genre ${{ error }}`);
    throw error;
  }
};

module.exports.fetchMoiveById = async (id) => {
  try {
    const results = await fetchMoiveById(id);
    return results;
  } catch (error) {
    console.log(`error due to fetch moive by id ${{ error }}`);
    throw error;
  }
};

module.exports.fetchMoiveByYear = async (year) => {
  try {
    const results = await fetchMoiveByYear(year);
    return results;
  } catch (error) {
    console.log(`error due to fetch moive by year ${{ error }}`);
    throw error;
  }
};
