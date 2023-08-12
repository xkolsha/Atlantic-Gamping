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

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

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
