const { Features } = require("../models");

const seedFeatures = () => Features.bulkCreate(featuresData);

const featuresData = [
  {
    num_guests: 2,
    num_beds: 1,
    wifi: true,
    cell_service: true,
    fireplace: false,
    kitchen: true,
    electricity: true,
    shower: true,
    waterfront: true,
    category_id: 1,
    location_id: 1, // Corresponding to Heaven
    description:
      "Heavenly stay with unlimited cloud storage (literally clouds) and angelic room service. Warning: Harp music may cause extreme relaxation!",
  },
  {
    num_guests: 666,
    num_beds: 0,
    wifi: false,
    cell_service: false,
    fireplace: true, // Always on!
    kitchen: false,
    electricity: false,
    shower: false,
    waterfront: false,
    category_id: 2,
    location_id: 2, // Corresponding to Hell
    description:
      "Hell's Resort: Now featuring eternal inferno heating and brimstone aromatherapy! Bring your own pitchfork. Sunscreen strongly recommended.",
  },
];

module.exports = seedFeatures;
