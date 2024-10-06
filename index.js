// Create express app
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./src/routes.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server port
const HTTP_PORT = 8000;

//routes
app.use(router);

// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});


// // Default response for any other request
// app.use(function (req, res) {
//   res.status(404);
// });
