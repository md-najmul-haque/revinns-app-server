import { createUser, getUser } from "../../controllers/userController.js"
import express from "express"

const userRoute = express.Router()

userRoute.route('/').post(createUser).get(getUser)

export default userRoute