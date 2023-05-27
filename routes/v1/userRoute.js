import { createUser } from "../../controllers/userController.js"
import express from "express"

const userRoute = express.Router()

userRoute.route('/').post(createUser)

export default userRoute