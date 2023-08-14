const express = require("express");
const multer = require("multer");
const { Location, Review } = require("../../models");
const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Endpoint to list all locations
router.get("/", async (req, res) => {
  try {
    const locations = await Location.findAll();
    res.render("location", { locations });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching locations");
  }
});

// Endpoint to view a specific location by ID
router.get("/:id", async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id, {
      include: [{ model: Review }],
    });
    if (!location) {
      return res.status(404).send("Location not found");
    }
    const locationPlain = location.get({ plain: true });
    const hasReviews =
      locationPlain.reviews && locationPlain.reviews.length > 0;
    res.render("location-detail", {
      location: locationPlain,
      hasReviews,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching the location");
  }
});

// Endpoint to submit a review for a specific location
router.post("/:id/reviews", upload.single("image"), async (req, res) => {
  try {
    const locationId = req.params.id;
    const { content, rating } = req.body;
    const image = req.file ? req.file.filename : null;
    await Review.create({
      content,
      rating,
      image,
      location_id: locationId,
    });
    res.redirect(`/locations/${locationId}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while submitting the review");
  }
});

module.exports = router;
