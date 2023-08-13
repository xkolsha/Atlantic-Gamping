const router = require("express").Router();
const aboutRoutes = require("./about-routes");
const gampRoutes = require("./gamp-routes");
const { router: reviewRoutes } = require("./review-routes"); // Importing the router
const userRoutes = require("./user-routes");
const locationRoutes = require("./location-routes");

// api routes
router.use("/about", aboutRoutes);
router.use("/gamp", gampRoutes);
router.use("/review", reviewRoutes); // Using the reviewRoutes router
router.use("/users", userRoutes);
router.use("/location", locationRoutes);

module.exports = router;
