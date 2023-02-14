// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

/*
 * All the routes are prefixed with /celebrities
 */

router.get("/", async (req, res, next) => {
  try {
    const allCelebrity = await Celebrity.find();
    res.render("../views/celebrities/celebrities", { allCelebrity });
  } catch (error) {
    next(error);
  }
});

router.get("/create", (req, res, next) => {
  res.render("../views/celebrities/new-celebrity");
});

router.post("/create", async (req, res, next) => {
  //   console.log(req.body);
  const { name, occupation, catchPhrase } = req.body;
  //   const name = req.body.name;
  if (name === "" || occupation === "" || catchPhrase === "") {
    // console.log(name, occupation, catchPhrase);
    return res.render("../views/celebrities/new-celebrity", {
      errorMessage:
        "You need to fill all section in order to create a celebrity ! Try again",
    });
  }
  const celebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };
  try {
    const createdCelebrity = await Celebrity.create(celebrity);
    // console.log(createdCelebrity);
    res.redirect("/celebrities");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
