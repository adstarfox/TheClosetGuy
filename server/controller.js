const { Admin } = require('./models/admins')
const { Request } = require('./models/requests')


module.exports = {
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