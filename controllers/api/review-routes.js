const router = require("express").Router();
const Review = require("../../models/Review");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // specify the folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // create a unique filename
  },
});

const upload = multer({ storage: storage });

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

// Endpoint to post a review for a specific location by ID
router.post(
  "/locations/:id/reviews",
  upload.single("image"),
  async (req, res) => {
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
  }
);

// Endpoint to update a review for a specific location by ID
router.put(
  "/locations/:locationId/reviews/:reviewId",
  upload.single("image"),
  async (req, res) => {
    try {
      const reviewId = req.params.reviewId;
      const locationId = req.params.locationId;
      const { content, rating } = req.body;
      const image = req.file ? req.file.filename : null;

      const review = await Review.findByPk(reviewId);
      if (!review) {
        return res.status(404).send("Review not found");
      }

      review.content = content;
      review.rating = rating;
      review.image = image; // Update image if provided
      await review.save();

      res.redirect(`/api/locations/${locationId}`); // Redirect back to the location detail
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred while updating the review");
    }
  }
);

module.exports = router;
