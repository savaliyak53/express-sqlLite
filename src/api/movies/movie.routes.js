const router = require("express").Router();
const {
  fetchAllMovies,
  fetchMoiveByGenre,
  fetchMoiveById,
  fetchMoiveByYear,
} = require("./movies.controller");

router.get("/all", fetchAllMovies);
router.get("/genre/:genre", fetchMoiveByGenre);
router.get("/details/:id", fetchMoiveById);
router.get("/release_year/:year", fetchMoiveByYear);

module.exports = router;
