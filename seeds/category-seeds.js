const { Category } = require("../models");

const seedCategories = () => Category.bulkCreate(categoryData);

const categoryData = [
  {
    categoryName: "Tent",
  },
  {
    categoryName: "Cabins",
  },
];

module.exports = seedCategories;
