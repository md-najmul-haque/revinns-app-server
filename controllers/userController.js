import User from "../models/User.js"
import { createUserService, getUserService } from "../services/userService.js";
import bcrypt from "bcrypt"


export const createUser = async (req, res) => {
    try {
        const data = req.body;
        console.log(data)
        const { name, email, password, confirmPassword } = data

        const user = await User.findOne({ name: name })

        if (user) {
            res.status(400).json({
                status: "failed",
                message: "User name already exist. Try different user name"
            })
        } else {

            if (name && email && password && confirmPassword) {
                if (password === confirmPassword) {

                    const user = await createUserService(data)

                    res.status(200).json({
                        status: "success",
                        message: "user created successfully",
                        user: user
                    })

                } else {
                    res.status(400).json({
                        status: "failed",
                        message: "password and confirm password doesn't matched"
                    })
                }
            } else {
                res.status(400).json({
                    status: "failed",
                    message: "All filled are required"
                })
            }


        }

    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "failed to register user"
        })
    }
}


//login user
export const loginUser = async (req, res) => {

    try {
        const data = req.body
        const { name, password } = data

        if (name && password) {

            const user = await User.findOne({ name: name })

            if (user) {
                const isMatch = await bcrypt.compare(password, user.password)

                if ((user.name == name) && isMatch) {

                    //Generate JWT token
                    // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })

                    return res.status(200).json({
                        status: 'success',
                        message: "Login Success",

                    })

                } else {
                    return res.status(400).json({
                        status: 'failed',
                        message: "name and password doesn't matched",

                    })
                }

            }
            else {
                return res.status(400).json({
                    status: 'failed',
                    message: "You are not registered user",

                })
            }

        } else {
            return res.status(400).json({
                status: 'failed',
                message: "All field are required",

            })

        }

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Unable to login",

        })
    }

}


export const getUser = async (req, res) => {

    try {
        const users = await getUserService()

        res.status(200).json({
            status: "success",
            message: "user loaded successfully",
            users: users
        })

    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "failed to get user"
        })
    }


}