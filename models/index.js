const User = require("./User");
const Creator = require("./Creator");
const Category = require("./Category");
<<<<<<< HEAD
const Location = require("./location");
=======
const Location = require("./Location");
>>>>>>> 2e9a6d846022e729681834436fb6cc41089478a6
const Features = require("./Features");

Category.hasMany(Location, {
  foreignKey: "category_id",
});

Location.belongsTo(Category, {
  foreignKey: "category_id",
});

Features.hasMany(Location, {
  foreignKey: "location_id",
});

module.exports = { User, Creator, Category, Features, Location };
