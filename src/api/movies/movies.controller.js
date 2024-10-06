const {
  fetchAllMovies,
  fetchMoiveByGenre,
  fetchMoiveById,
  fetchMoiveByYear,
} = require("./movies.service");

module.exports.fetchAllMovies = async (req, res, next) => {
  try {
    const results = await fetchAllMovies();
    return res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

module.exports.fetchMoiveByGenre = async (req, res, next) => {
  try {
    const genre = req.params["genre"];
    const results = await fetchMoiveByGenre(genre);
    return res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

module.exports.fetchMoiveById = async (req, res, next) => {
  try {
    const id = req.params["id"];
    const results = await fetchMoiveById(id);
    return res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

module.exports.fetchMoiveByYear = async (req, res, next) => {
  try {
    const year = req.params["year"];
    const results = await fetchMoiveByYear(year);
    return res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};
