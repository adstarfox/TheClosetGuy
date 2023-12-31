const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()
const PORT = process.env.PORT
const { db } = require('./database')
const { Admin } = require('./models/admins')
const { Request } = require('./models/requests')
const { isAuthenticated } = require('./Authentication/isAuthenticated')

const app = express()

app.use(express.json())
app.use(cors())

Admin.hasMany(Request)
Request.belongsTo(Admin)

const { addRequest, addAdmin, adminLogin, getRequests, markContacted, deleteRequest } = require('./controller')

app.post('/AddAdmin', addAdmin)
app.post('/quote', addRequest)
app.post('/login', adminLogin)

app.get('/requests', isAuthenticated, getRequests)

app.put('/contacted/:id', isAuthenticated, markContacted)

app.delete('/admin-page/:id', isAuthenticated, deleteRequest)

db.sync()
    .then(() => {
        app.listen(PORT, console.log(`We chillin' on ${PORT}`))
    })
    .catch(err => console.log(err))