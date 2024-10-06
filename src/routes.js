const router = require("express").Router();
const userRoutes = require("./api/user/user.routes");
const moviesRoutes = require("./api/movies/movie.routes");

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "Ok" });
});

router.use("/user", userRoutes);
router.use("/movie", moviesRoutes);

module.exports = router;
