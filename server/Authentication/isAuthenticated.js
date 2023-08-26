require('dotenv').config()
const jwt = require('jsonwebtoken')
const {SECRET} = process.env

module.exports = {
    isAuthenticated: (req, res, next) => {
        const headerToken = req.get('Authorization')

        if(!headerToken) {
            console.log('Error in isAuthenticated')
            res.sendStatus(401)
        }

        let token

        try {
            token = jwt.verify(headerToken, SECRET)

            req.body.username = token.username
            // console.log(req.body)
        } catch (error) {
            error.statusCode = 500
            throw error
        }

        if (!token) {
            console.log('Not Authenticated')
            res.sendStatus(401)
        }

        next()
    }
}