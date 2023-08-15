const router = require("express").Router();
// const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  res.render("index", { pageTitle: "Home" });
});

router.get("/about", async (req, res) => {
  res.render("about", { pageTitle: "About" });
});

router.get("/login", async (req, res) => {
  res.render("login", { pageTitle: "Login" });
});

router.get("/gamp", async (req, res) => {
  console.log("Gamp");
});

router.get("/settings", async (req, res) => {
  res.render("settings", { pageTitle: "Settings" });
});

// Gets one location with Authorization helper. This allows the user to view that location ONLY if they are logged in.
// Use withAuth in all of your get requests!!
router.get("/location/:id", async (req, res) => {
  try {
    const dbLocationData = await Location.findByPk(req.params.id, {
      include: [
        {
          model: Location,
          attributes: [
            "id",
            "city",
            "province",
            "page_url",
            "img_url",
            "title",
            "description",
            "short_desc",
            "price",
          ],
        },
      ],
    });
    const location = dbLocationData.get({ plain: true });
    res.render("location", { location, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get User with auth
router.get("/user", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["username", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      users,
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/user", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("user");
});

router.get("/", async (req, res) => {
  try {
    const locations = await Location.findAll();
    // res.json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching locations");
  }
});

module.exports = router;
