// This is the table to collect data from a propery user who will create their own listings
// This table includes a username

const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Creator extends Model {
  checkPasswrod(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Creator.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newCreatorData) => {
        newCreatorData.password = await bcrypt.hash(
          newCreatorData.password,
          10
        );
        return newCreatorData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "creator",
  }
);

module.exports = Creator;
