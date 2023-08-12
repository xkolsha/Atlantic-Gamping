const { User } = require("../models");
const bcrypt = require("bcrypt");

const userData = [
  {
    userName: "Kethchup Chips Woman",
    isCreator: "true",
    email: "ketchupchipswoman@example.com",
    password: "password123",
  },
  {
    userName: "Maple Man",
    isCreator: "false",
    email: "mapleman@example.com",
    password: "password456",
  },
];

const seedUsers = async () => {
  const hashedUsers = userData.map((user) => {
    user.password = bcrypt.hashSync(user.password, 10);
    return user;
  });

  return User.bulkCreate(hashedUsers);
};

module.exports = seedUsers;
