const User = require("./User");
const Creator = require("./Creator");
const Category = require("./Category");
const Location = require("./Location");
const Features = require("./Features");
const Review = require("./Review");

Category.hasMany(Location, {
  foreignKey: "category_id",
});
Location.belongsTo(Category, {
  foreignKey: "category_id",
});

// A Location has many Reviews
Location.hasMany(Review, {
  foreignKey: "location_id",
});

// A Review belongs to a Location
Review.belongsTo(Location, {
  foreignKey: "location_id",
});

module.exports = { User, Creator, Category, Location, Features, Review };
