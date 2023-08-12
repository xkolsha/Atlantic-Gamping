const router = require("express").Router();
const withAuth = require('../utils/auth');

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

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Gets one location with Authorization helper. This allows the user to view that location ONLY if they are logged in.
// Use withAuth in all of your get requests!!
router.get('/location/:id', withAuth, async (req, res) => {
    try {
      const dbLocationData = await Location.findByPk(req.params.id, {
        include: [
          {
            model: Location,
            attributes: [
              'id',
              'city',
              'province',
              'page_url',
              'img_url',
              'title',
              'description',
              'short_desc',
              'price'
            ],
          },
        ],
      });
      const location = dbLocationData.get({ plain: true });
      res.render('location', { location, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);


module.exports = router;
