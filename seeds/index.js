const sequelize = require("../config/connection");
const seedCategories = require("./category-seeds");
const seedLocations = require("./location-seeds");
const seedFeatures = require("./features-seeds");
const { User } = require('../models');
const userData = require('./userData.json');
const seedReviews = require("./review-seeds");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synced");

    await seedCategories();
    console.log("Categories seeded");

    await seedLocations();
    console.log("Locations seeded");

    await seedFeatures();
    console.log("Features seeded");

    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    await seedReviews();
    console.log("Reviews seeded");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAll();
