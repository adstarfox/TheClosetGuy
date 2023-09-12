const { DataTypes } = require('sequelize')
const { db } = require('../database')

module.exports = {
    Request: db.define('request', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING({length: 50}),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING({length: 50}),
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING({length: 15}),
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING({length: 500}),
            allowNull: true
        }
    })
}