const { DataTypes } = require('sequelize')
const {db} = require('../database')

module.exports = {
    Admin: db.define('admin', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING({length: 30}),
            allowNull: false
        },
        hashedPass: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}