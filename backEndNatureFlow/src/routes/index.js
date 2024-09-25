import RouteUser from '../routes/user.route.js'
import RouteFootPrint from '../routes/footPrint.js'
import express from 'express'
const route = express.Router()
route.use('/footprint', RouteFootPrint)
route.use('/user', RouteUser)


export default route
