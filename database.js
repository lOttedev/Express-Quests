require("dotenv").config();
const mysql = require("mysql2/promise");

const database = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const getMovies = (req, res) => {
  database
    .query("SELECT * FROM movies")
    .then(([movies]) => {
      res.status(200).json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Error retrieving data from database" });
    });
};

const getUsers = (req, res) => {
  database
    .query("SELECT * FROM users")
    .then(([users]) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Error retrieving data from database" });
    });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("SELECT * FROM users WHERE id = ?", [id])
    .then(([user]) => {
      if (user.length === 0) {
        res.status(404).json({ message: "Not Found" });
      } else {
        res.status(200).json(user[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Error retrieving data from database" });
    });
};

module.exports = {
  getMovies,
  getUsers,
  getUserById,
};
