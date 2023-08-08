const router = require("express").Router();

// Setup Routes for api and home routes
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
