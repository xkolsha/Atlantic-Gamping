const { Category } = require("../models");

const seedCategories = () => Category.bulkCreate(categoryData);

const categoryData = [
  {
    categoryName: "Tent",
  },
  {
    categoryName: "Cabin",
  },
  {
    categoryName: "Dome",
  },
  {
    categoryName: "Treehouse",
  },
  {
    categoryName: "Yurt",
  },
  {
    categoryName: "Trailer",
  }
];

module.exports = seedCategories;
