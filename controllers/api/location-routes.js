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

// Endpoint to post a review for a specific location by ID
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
    res.redirect(`/api/locations/${locationId}`); // Redirect back to the location detail
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while submitting the review");
  }
});

router.put(
  "/:LocationId/reviews/:reviewId",
  upload.single("image"),
  async (req, res) => {
    try {
      console.log("Request body:", req.body); // Log the request body
      console.log("Request params:", req.params); // Log the request params
      const reviewId = req.params.reviewId;
      const locationId = req.params.locationId;
      const { content, rating } = req.body;
      const image = req.file ? req.file.filename : null;
      await Review.update(
        { content, rating, image },
        { where: { id: reviewId } }
      );
      const review = await Review.findOne({ where: { id: reviewId } });
      console.log(review);
      if (!review) {
        return res.status(404).send("Review not found");
      }
      res.send(review).status(200);
    } catch (err) {
      console.error(err); // Log the error
      res.status(500).send("An error occurred while updating the review");
    }
  }
);

module.exports = router;
