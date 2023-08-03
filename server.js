// Import necessary packages
const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Import sequelize connection
const sequelize = require("./config/connection");

// Initialize Express.js App
const app = express();
const PORT = process.env.PORT || 3001;

//ToDo - Set up session with sequelize store *for the README - https://www.npmjs.com/package/connect-session-sequelize
//ToDo - Set up Express.js middleware *for the README - https://expressjs.com/en/resources/middleware/session.html
