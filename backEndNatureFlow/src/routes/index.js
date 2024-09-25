import RouteUser from '../routes/user.route.js'
import express from 'express'
const route = express.Router()

route.use('/user', RouteUser)

export default route
