const router = require("express").Router();
const { Location, Features } = require("../../models");
const express = require("express");

router.get("/", async (req, res) => {
  try {
    const featuresData = await Features.findAll();

    res.json(featuresData);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching locations");
  }
});

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

module.exports = router;
