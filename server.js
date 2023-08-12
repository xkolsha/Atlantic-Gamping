// Import necessary packages
const express = require("express");
const path = require("path");
const chalk = require("chalk"); // Import chalk
const PORT = process.env.PORT || 3001;
const routes = require("./controllers");
const { findReviews, router } = require("./controllers/api/review-routes");
const locationRoutes = require("./controllers/api/location-routes");
const sequelize = require("./config/connection");

// Initialize Express.js App
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Added routes through connections
app.use(routes);

// Use the review routes
app.use("/api/reviews", router);

// Use the location routes
app.use("/api", locationRoutes);

// Setup for EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(
      chalk.greenBright.bgWhite.bold(`SERVER LISTENING ON PORT: ${PORT}.... `)
    ); // Use chalk to colorize the log message
  });
});
