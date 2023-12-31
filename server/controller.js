const user = require('../../../week_2/movieRater/server/Controller/models/user')
const { Admin } = require('./models/admins')
const { Request } = require('./models/requests')
const bcrypt = require('bcrypt')
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken')


const generateToken = (info) => {
    return jwt.sign(
        {
            username: info.username,
            password: info.password
        },
        SECRET,
        {
            expiresIn: '24h'
        }
    )
}


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
        console.log(req.body)

        const { username, password } = req.body

        let foundUser = await Admin.findOne({where: {username:username}})

        if(foundUser === null){
            return res.status(401).send('Invalid username')
        }
        // console.log(foundUser.hashedPass)
        let newBody = {
            username: username,
            password: foundUser.hashedPass
        }
        
        
        try {
            if (await bcrypt.compare(password, foundUser.hashedPass)){
                let token = generateToken(newBody)
                // console.log('Token:', token)
                res.status(200).send(token)
            }else {
                res.status(401).send('Invalid Password')
            }
        }catch (error){
            console.log("Error in adminLogin")
            console.log(error)
            res.status(500)
        }
    },
    getRequests: async (req, res) => {
        try{
            const data = await Request.findAll({
                include: Admin,
                order: [
                    ['createdAt',
                    'DESC']
                ]
            })
            res.status(200).send(data)
        }catch (error) {
            console.log('Error in getRequests')
            console.log(error)
            res.sendStatus(404)
        }
    },
    markContacted: async (req, res) => {
        const {username} = req.body
        // console.log(req.params)
        const {id} = req.params
        try {
            const adminId = await Admin.findOne({
                where: {username:username}
            })
            await Request.update({adminId:adminId.id}, {
                where: {id: id}
            })
            res.sendStatus(200)
        } catch (error) {
            console.log('Error in markContacted')
            console.log(error)
            res.sendStatus(400)
        }
    },
    deleteRequest: async (req, res) => {
        try {
            // console.log(+req.params.id)
            await Request.destroy({
                where: {id: req.params.id}
            })
            res.sendStatus(200)
        } catch (error) {
            console.log('Error in deleteRequest')
            console.log(error)
            res.sendStatus(400)
        }
    }
}