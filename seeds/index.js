const sequelize = require("../config/connection");
const seedCategories = require("./category-seeds");
const seedLocations = require("./location-seeds");
const seedFeatures = require("./features-seeds");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Database synced");

    // First, seed the categories
    await seedCategories();
    console.log("Categories seeded");

    // Then, seed the locations
    await seedLocations();
    console.log("Locations seeded");

    // Finally, seed the features
    await seedFeatures();
    console.log("Features seeded");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAll();
