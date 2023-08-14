const router = require("express").Router();
const Review = require("../../models/Review");

// Endpoint to edit a review by review ID
router.put("/:reviewId", async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    const { content, rating } = req.body;

    const review = await Review.findByPk(reviewId);
    if (!review) {
      return res.status(404).send("Review not found");
    }

    review.content = content;
    review.rating = rating;
    await review.save();

    res.status(200).send("Review updated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while updating the review");
  }
});

// Endpoint to get a specific review by review ID
router.get("/:reviewId", async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    const review = await Review.findByPk(reviewId);
    if (!review) {
      return res.status(404).send("Review not found");
    }
    res.json(review);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching the review");
  }
});

module.exports = router;
