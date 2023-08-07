const { Location } = require("../models");

const seedLocations = () => Location.bulkCreate(locationData);

const locationData = [
  {
    city: "Heaven",
    province: "NB",
    page_url: "https://example.com/heaven",
    img_url: "https://example.com/img/heaven.jpg",
    title: "Peaceful Heaven",
    description: "An ethereal place of tranquility and joy.",
    short_desc: "Heaven, NB",
    price: 555,
    category_id: 1,
  },
  {
    city: "Hell",
    province: "NB",
    page_url: "https://example.com/hell",
    img_url: "https://example.com/img/hell.jpg",
    title: "Thrilling Hell",
    description: "An intense and exciting burning adventure destination.",
    short_desc: "Hell, NB",
    price: 666,
    category_id: 2,
  },
];

module.exports = seedLocations;
