const { Creator } = require("../models");
const bcrypt = require("bcrypt");

const creatorData = [
  {
    username: "john_doe",
    email: "john.doe@example.com",
    password: "password123",
  },
  {
    username: "jane_doe",
    email: "jane.doe@example.com",
    password: "password456",
  },
];

const seedCreators = async () => {
  const hashedCreators = creatorData.map((creator) => {
    creator.password = bcrypt.hashSync(creator.password, 10);
    return creator;
  });

  return Creator.bulkCreate(hashedCreators);
};

module.exports = seedCreators;
