const router = require("express").Router();

// Setup Routes for api and home routes
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const locationRoutes = require("./api/location-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/locations", locationRoutes); // Handles both listing all locations and viewing a specific location by ID

module.exports = router;
