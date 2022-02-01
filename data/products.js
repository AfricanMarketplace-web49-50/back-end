'use strict';
const {Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    class Products extends Model {
    }

    Products.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(12, 2),
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        subcategory: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        countrycodelong: {
            type: DataTypes.STRING(3),
            allowNull: false
        },
        countrycodeshort: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
        countryname: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
    }, {
        tableName: 'products',
        schema: 'marketplace',
        sequelize,
        modelName: 'Products',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    return Products
};