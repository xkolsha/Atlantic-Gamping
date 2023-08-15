const express = require("express");
const multer = require("multer");
const { Location, Review } = require("../../models");
const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Endpoint to list all locations
router.get("/", async (req, res) => {
  try {
    const locations = await Location.findAll();
    // res.json(locations);
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

router.post("/search", async (req, res) => {
  try {
    console.log("Search endpoint hit. Form data received:", req.body);

    const {
      f1: guests,
      f2: beds,
      f3: waterfront1,
      f4: wifi,
      f5: cellService,
      f6: fireplace,
      f7: kitchen,
      f8: electricity,
      f9: shower,
      f10: waterfront2,
    } = req.body;

    // Create a filter object based on the provided criteria.
    let whereCriteria = {};

    // Assuming your Location model has corresponding columns for these filters.
    if (guests) whereCriteria.guests = guests;
    if (beds) whereCriteria.beds = beds;
    if (wifi === "on") whereCriteria.wifi = true;
    if (cellService === "on") whereCriteria.cellService = true;
    if (fireplace === "on") whereCriteria.fireplace = true;
    if (kitchen === "on") whereCriteria.kitchen = true;
    if (electricity === "on") whereCriteria.electricity = true;
    if (shower === "on") whereCriteria.shower = true;
    if (waterfront1 === "on" || waterfront2 === "on")
      whereCriteria.waterfront = true;

    console.log("Using the following filter criteria:", whereCriteria);

    // Fetch all matching locations based on the criteria.
    const matchingLocations = await Location.findAll({
      where: whereCriteria,
    });

    console.log(`Found ${matchingLocations.length} matching locations.`);

    // If no matching locations, render the locations-detail with no location.
    if (matchingLocations.length === 0) {
      console.log(
        "No matching locations found. Rendering 'locations-detail' view without a location."
      );
      return res.render("locations-detail", { location: null });
    }

    // Select a random location from the matching locations.
    const randomLocation =
      matchingLocations[Math.floor(Math.random() * matchingLocations.length)];
    console.log(`Selected random location with ID: ${randomLocation.id}`);

    // Redirect to the detailed view of the random location.
    res.redirect(`/api/locations/${randomLocation.id}`);
  } catch (err) {
    console.error("Error in /search endpoint:", err);
    res.status(500).send("An error occurred while processing the search");
  }
});

module.exports = router;
