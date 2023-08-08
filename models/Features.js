const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Features extends Model {}

Features.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        num_guests: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        num_beds: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        wifi: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        cell_service: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        fireplace: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        kitchen: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        electricity: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        shower: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        waterfront: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            },
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id',
                },
            },
        },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'features',
    }
);

module.exports = Features;
