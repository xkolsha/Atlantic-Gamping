const router = require("express").Router();
const aboutRoutes = require("./about-routes");
const gampRoutes = require("./gamp-routes");
const reviewRoutes = require("./review-routes");
const userRoutes = require("./user-routes");
const locationRoutes = require("./location-routes");

// api routes
router.use("/about", aboutRoutes);
router.use("/gamp", gampRoutes);
router.use("/review", reviewRoutes);
router.use("/user", userRoutes);
router.use("/location", locationRoutes);

module.exports = router;
