const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("index", { pageTitle: "Home" });
  console.log("Gamp");
});

module.exports = router;
