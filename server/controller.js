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
    }
}