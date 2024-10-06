const router = require("express").Router();
const {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("./user.controller");

// Insert here other API endpoints
router.get("/users", getUser);

//Get user by id
router.get("/user/:id", getUserById);

//Create user
router.post("/addUser", createUser);

//Update user
router.patch("/update/:id", updateUser);

//Delete user
router.delete("/delete/:id", deleteUser);

module.exports = router;
