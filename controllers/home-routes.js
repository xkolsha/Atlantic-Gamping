const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("index", { pageTitle: "Home" });
});

router.get("/gamp", async (req, res) => {
  console.log("Gamp");
});

module.exports = router;
