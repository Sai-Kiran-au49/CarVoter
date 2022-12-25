const {Router} = require('express')

const {signupPost , login , logout} = require('../controllers/authcontroller')

const authRouter = Router();

authRouter.post('/signup', signupPost)

authRouter.post('/login', login)

authRouter.get('/api/logout', logout)



module.exports = authRouter

