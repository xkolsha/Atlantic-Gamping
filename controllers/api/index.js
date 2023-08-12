const router = require("express").Router();
const aboutRoutes = require("./about-routes");
const gampRoutes = require("./gamp-routes");

// api routes
router.use("/about", aboutRoutes);
router.use("/gamp", gampRoutes);

module.exports = router;
