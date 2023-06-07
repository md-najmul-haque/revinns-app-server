import { createUser, getUser, loginUser, updatePassword } from "../../controllers/userController.js"
import express from "express"

const userRoute = express.Router()

userRoute.route('/user').post(createUser).get(getUser)
userRoute.route('/login').post(loginUser)
userRoute.route('/changePassword').patch(updatePassword)

export default userRoute