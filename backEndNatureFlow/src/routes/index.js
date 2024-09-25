import RouteUser from '../routes/user.route.js'
import RouteFootPrint from '../routes/footPrint.js'
import RouteChallenge from '../routes/challenge.js'
import express from 'express'
const route = express.Router()
route.use('/footprint', RouteFootPrint)
route.use('/user', RouteUser)
route.use('/challenge', RouteChallenge)


export default route
