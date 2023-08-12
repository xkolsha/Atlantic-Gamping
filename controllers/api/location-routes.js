const express = require("express");
const router = express.Router();
const { Location, Review } = require("../../models"); // Import Review model

// Endpoint to list all locations
router.get("/location", async (req, res) => {
  try {
    const locations = await Location.findAll();
    res.render("location", { locations, pageTitle: "All Locations" });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching locations");
  }
});

// Endpoint to view a specific location by ID
router.get("/location/:id", async (req, res, next) => {
  try {
    const location = await Location.findByPk(req.params.id, {
      include: [{ model: Review }], // Include associated reviews
    });
    if (!location) {
      return res.status(404).send("Location not found");
    }
    res.render("location-detail", {
      location: location.get({ plain: true }),
      pageTitle: location.title,
    });
  } catch (err) {
    next(err); // Pass to centralized error handling
  }
});

module.exports = router;
