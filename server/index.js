const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()
const PORT = process.env.PORT
const { db } = require('./database')
const { Admin } = require('./models/admins')
const { Request } = require('./models/requests')

const app = express()

app.use(express.json())
app.use(cors())

Admin.hasMany(Request)
Request.belongsTo(Admin)

const { addRequest } = require('./controller')

app.post('/quote', addRequest)

db.sync()
    .then(() => {
        app.listen(PORT, console.log(`We chillin' on ${PORT}`))
    })
    .catch(err => console.log(err))