const router = require("express").Router();

// about route api/about
router.get("/", async (req, res) => {
  res.render("about", { pageTitle: "About" });
});

module.exports = router;
