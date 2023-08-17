const user = require('../../../week_2/movieRater/server/Controller/models/user')
const { Admin } = require('./models/admins')
const { Request } = require('./models/requests')
const bcrypt = require('bcrypt')


module.exports = {
    addAdmin: async (req, res) => {
        try {
            const hashedPass = await bcrypt.hash(req.body.password, 10)

            await Admin.create({username: req.body.username, hashedPass})
            res.sendStatus(201)
        } catch (error) {
            console.log('Error in addAdmin')
            console.log(error)
            res.sendStatus(500)
        }

    },
    addRequest: async (req, res) => {
        try{
            const {name, email, phone, notes} = req.body
            await Request.create({ name, email, phone, notes })
            res.sendStatus(201)
        } catch (error){
            console.log('Error in addRequest')
            console.log(error)
            res.status(400).send('Please check your info')
        }
    },
    adminLogin: async (req, res) => {
        const { username, password } = req.body
        let foundUser = await Admin.findOne({where: {username:username}})
        // console.log(foundUser)

        if(foundUser === null){
            return res.status(401).send('Invalid username')
        }

        try {
            if (await bcrypt.compare(password, foundUser.hashedPass)){
                console.log('Admin Found')
                res.sendStatus(200)
            }else {
                res.status(401).send('Invalid Password')
            }
        }catch (error){
            console.log("Error in adminLogin")
            console.log(error)
            res.status(401)
        }
    },
    getRequests: async (req, res) => {
        try{
            const data = await Request.findAll()
            res.status(200).send(data)
        }catch (error) {
            console.log('Error in getRequests')
            console.log(error)
            res.sendStatus(404)
        }
    }
}