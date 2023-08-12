const router = require("express").Router();
const aboutRoutes = require("./about-routes");
const gampRoutes = require("./gamp-routes");
const userRoutes = require('./user-routes');

// api routes
router.use("/about", aboutRoutes);
router.use("/gamp", gampRoutes);
router.use('/users', userRoutes);

module.exports = router;
