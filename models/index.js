const User = require("./User");
const Category = require("./Category");
const Location = require("./Location");
const Features = require("./Features");
const Review = require("./Review");

Location.hasMany(Review, { foreignKey: "location_id" });
Review.belongsTo(Location, { foreignKey: "location_id" });

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

module.exports = { User, Category, Location, Features, Review };
