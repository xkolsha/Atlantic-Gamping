const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("index", { pageTitle: "Home" });
});

router.get("/gamp", async (req, res) => {
  console.log("Gamp");
});

router.get("/user", async (req, res) => {
  res.render("user-settings", { pageTitle: "User Settings" });
});

router.get("/creator", async (req, res) => {
  res.render("creator-settings", { pageTitle: "Creator Settings" });
});


module.exports = router;
