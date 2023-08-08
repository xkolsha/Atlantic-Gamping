const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("test", { pageTitle: "Home" });
});

module.exports = router;
