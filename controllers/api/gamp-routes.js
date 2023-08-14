const router = require("express").Router();
const { Location, Review } = require("../../models");
const express = require("express");

router.get("/", (req, res) => {
  Location.findAll().then((locData) => {
    res.json(locData);
  });
});

// router.get("/", async (req, res) => {
//   try {
//     const locations = await Location.findAll();
//     res.json();
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("An error occurred while fetching locations");
//   }
// });

// router.get("/", (req, res) => {
//   Location.findAll({
//     where: {
//       province: "NB",
//     },
//     attributes: {
//       exclude: ["img_url"],
//     },
//   }).then((data) => {
//     res.json(data);
//   });
// });

router.get("/", async (req, res) => {
  res.render("index", { pageTitle: "Home" });
  console.log("Gamp");
});

module.exports = router;
