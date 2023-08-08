const router = require("express").Router();
const aboutRoutes = require("./about-routes");

// api routes
router.use("/about", aboutRoutes);

module.exports = router;
