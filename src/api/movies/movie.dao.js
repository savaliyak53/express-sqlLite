const db = require("./movie.model");

module.exports.fetchAllMovies = () => {
  let query = "SELECT * FROM movies";
  let param = [];
  return new Promise((resolve, reject) => {
    db.all(query, param, (err, rows) => {
      if (err) {
        reject({ error: err.message }); // Reject the promise with an error
      } else {
        resolve({
          message: "success",
          data: rows, // Resolve with the rows data
        });
      }
    });
  });
};

module.exports.fetchMoiveByGenre = (genre) => {
  let query = "SELECT * FROM movies WHERE genre = ?";
  let param = [genre];
  return new Promise((resolve, reject) => {
    db.all(query, param, (err, rows) => {
      if (err) {
        reject({ error: err.message }); // Reject the promise with an error
      } else {
        resolve({
          message: "success",
          data: rows, // Resolve with the rows data
        });
      }
    });
  });
};

module.exports.fetchMoiveById = (id) => {
  let query = "SELECT * FROM movies WHERE id = ?";
  let param = [id];
  return new Promise((resolve, reject) => {
    db.all(query, param, (err, rows) => {
      if (err) {
        reject({ error: err.message }); // Reject the promise with an error
      } else {
        resolve({
          message: "success",
          data: rows, // Resolve with the rows data
        });
      }
    });
  });
};

module.exports.fetchMoiveByYear = (year) => {
  let query = "SELECT * FROM movies WHERE release_year  = ?";
  let param = [year];
  return new Promise((resolve, reject) => {
    db.all(query, param, (err, rows) => {
      if (err) {
        reject({ error: err.message }); // Reject the promise with an error
      } else {
        resolve({
          message: "success",
          data: rows, // Resolve with the rows data
        });
      }
    });
  });
};
