const router = require("express").Router();
const userRoutes = require("./api/user/user.routes");

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "Ok" });
});

router.use("/user", userRoutes);

module.exports = router;
