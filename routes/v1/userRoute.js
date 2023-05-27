import { createUser, getUser, loginUser } from "../../controllers/userController.js"
import express from "express"

const userRoute = express.Router()

userRoute.route('/user').post(createUser).get(getUser)
userRoute.route('/login').post(loginUser)

export default userRoute