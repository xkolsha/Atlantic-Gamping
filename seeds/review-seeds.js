const { Review } = require("../models");

const reviewData = [
  {
    content: "Great place to stay!",
    rating: 4,
    location_id: 1,
  },
  {
    content: "Amazing experience!",
    rating: 5,
    location_id: 2,
  },
  {
    content:
      "A bit warm for my taste, and the sulfur aroma won't be making it into my top 10 favorite scents. But the staff was on fire! Literally. 🔥",
    rating: 1,
    location_id: 32,
  },
  {
    content:
      "I must have been dreaming! The clouds were as soft as pillows, and the harp music was a nice touch. Can't wait to go back someday! 😉",
    rating: 5,
    location_id: 33,
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
