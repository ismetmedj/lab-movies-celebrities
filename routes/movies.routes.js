// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.models");
const Celebrity = require("../models/Celebrity.model");

/*
 * All the routes are prefixed with /movies
 */

router.get("/", async (req, res, next) => {
  try {
    const allMovies = await Movie.find();
    res.render("movies/movies", { allMovies });
  } catch (error) {
    next(error);
  }
});

router.get("/create", async (req, res, next) => {
  const allCelebrity = await Celebrity.find();
  res.render("movies/new-movie", { allCelebrity });
});

router.post("/create", async (req, res, next) => {
  const title = req.body.title;
  console.log(title);
  //   const name = req.body.name;
  if (title === "") {
    // console.log(name, occupation, catchPhrase);
    return res.render("../views/movies/new-movie", {
      errorMessage:
        "You need to fill a title in order to create a movie ! Try again",
    });
  }
  const movie = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    cast: req.body.cast,
  };
  try {
    const createdMovie = await Movie.create(movie);
    // console.log(createdCelebrity);
    res.redirect("/movies");
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    //   const celebrities = await Celebrity.find()
    const movieId = await Movie.findById(req.params.id).populate("cast");
    // movieId.populate("cast");
    res.render("movies/movie-details", { movieId });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
