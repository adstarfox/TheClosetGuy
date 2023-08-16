require('dotenv').config()
const { CONNECTION_STRING } = process.env
const Sequelize = require('sequelize')

const db = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres'
})

module.exports = {
    db
}