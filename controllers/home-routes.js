const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("index", { pageTitle: "Home" });
});

router.get("/login", async (req, res) => {
  res.render("login", { pageTitle: "Login" });
});

router.get("/gamp", async (req, res) => {
  console.log("Gamp");
});

router.get("/user", async (req, res) => {

  res.render("user-settings", { pageTitle: "Settings" });
});

router.get("/creator", async (req, res) => {
  res.render("creator-settings", { pageTitle: "Settings" });
});

module.exports = router;
