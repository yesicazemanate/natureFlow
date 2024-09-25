import express from 'express'
import { createChallenge } from '../controller/challenge.controller.js'
const route = express.Router()

route.post('/', createChallenge)

export default route