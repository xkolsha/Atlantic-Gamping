const sequelize = require("../config/connection");
const seedCategories = require("./category-seeds");
const seedLocations = require("./location-seeds");
const seedFeatures = require("./features-seeds");
const seedUsers = require("./user-seeds");
const seedCreators = require("./creator-seeds");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Database synced");

    await seedCategories();
    console.log("Categories seeded");

    await seedLocations();
    console.log("Locations seeded");

    await seedFeatures();
    console.log("Features seeded");

    await seedUsers();
    console.log("Users seeded");

    await seedCreators();
    console.log("Creators seeded");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAll();
