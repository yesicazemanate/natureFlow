import { register } from "../controller/user.controller.js";
import express from 'express'
const route = express.Router()

route.post('/register', register)

export default route