require("dotenv").config();

const port = process.env.APP_PORT ?? 5000;

const express = require("express");

const app = express();

app.use(express.json());

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const { getMovies, getMovieById, postMovie, putMovie, deleteMovie } = require("./movieHandlers.js");

app.get("/api/movies", getMovies);
app.get("/api/movies/:id", getMovieById);
app.post("/api/movies", postMovie);
app.put("/api/movies/:id", putMovie);
app.delete("/api/movies/:id", deleteMovie)

const { getUsers, getUserById, postUsers, putUser, deleteUser } = require("./userHandlers.js");

app.get("/api/users", getUsers);
app.get("/api/users/:id", getUserById);
app.post("/api/users", postUsers);
app.put("/api/users/:id", putUser);
app.delete("/api/users/:id", deleteUser)

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
