const router = require("express").Router();

// Import API Routes
const aboutRoutes = require("./about-routes");
const gampRoutes = require("./gamp-routes");
const reviewRoutes = require("./review-routes");
const userRoutes = require("./user-routes");
const locationRoutes = require("./location-routes");

// API Routes
router.use("/about", aboutRoutes);
router.use("/gamp", gampRoutes);
router.use("/reviews", reviewRoutes); // Using reviewRoutes
router.use("/user", userRoutes);
router.use("/locations", locationRoutes);

module.exports = router;
