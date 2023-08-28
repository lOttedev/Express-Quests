require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

const port = process.env.APP_PORT ?? 5000;

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


const { validateMovie } = require("./validateMovie.js");

app.post("/api/movies", validateMovie, postMovie);
app.put("/api/movies/:id", validateMovie, putMovie);

const { getUsers, getUserById, postUsers, putUser, updateUser, deleteUser } = require("./userHandlers.js");

app.get("/api/users", getUsers);
app.get("/api/users/:id", getUserById);
app.post("/api/users", postUsers);
app.put("/api/users/:id", putUser);
app.delete("/api/users/:id", deleteUser)


const { validateUser } = require("./validateUser.js");

app.post("/api/users", validateUser, postUsers);
app.put("/api/users/:id", validateUser, putUser);

const { hashPassword } = require("./auth.js");

app.post("/api/users", hashPassword, postUsers);
app.put("/api/users/:id", hashPassword, updateUser);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
