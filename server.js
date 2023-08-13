// Import necessary packages
const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const path = require("path");
const chalk = require("chalk");
const PORT = process.env.PORT || 3001;
const routes = require("./controllers");
const { findReviews, router } = require("./controllers/api/review-routes");
const locationRoutes = require("./controllers/api/location-routes");

// Initialize Express.js App
const app = express();

// Import sequelize connection
const sequelize = require("./config/connection");

// Set up sessions with cookies
const sess = {
  secret: process.env.COOKIE_SECRET,
  cookie: {
    // Stored in milliseconds
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
  },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Added routes through connections
app.use(routes);

// Setup for EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("*", (req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(
      chalk.greenBright.bgWhite.bold(`SERVER LISTENING ON PORT: ${PORT}.... `)
    );
  });
});
