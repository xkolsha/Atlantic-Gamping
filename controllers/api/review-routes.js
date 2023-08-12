const router = require("express").Router();
const Review = require("../../models/Review");

// Function to find all reviews
const findReviews = () => {
  return new Promise((resolve, reject) => {
    Review.findAll()
      .then((reviews) => resolve(reviews))
      .catch((err) => reject(err));
  });
};

router.get("/location/:locationId", async (req, res) => {
  try {
    const locationId = req.params.locationId;
    const reviews = await Review.findAll({
      where: { location_id: locationId },
    });
    res.render("test", { pageTitle: "Reviews", reviews: reviews });
  } catch (err) {
    res.status(500).send("An error occurred");
  }
});

// Exporting both the findReviews function and the router
module.exports = {
  findReviews,
  router,
};
