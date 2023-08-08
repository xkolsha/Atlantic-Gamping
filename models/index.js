const User = require("./User");
const Creator = require("./Creator");
const Category = require("./Category");
const Location = require("./location");
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
