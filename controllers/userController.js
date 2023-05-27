import User from "../models/User.js"


export const createUser = async (req, res) => {
    try {
        const data = req.body;
        const { name, email, password, confirmPassword } = data

        const user = await User.findOne({ email: email })

        if (user) {
            res.status(400).json({
                status: "failed",
                message: "user already exist"
            })
        } else {
            if (name && email && password && confirmPassword) {
                if (password === confirmPassword) {

                    const user = await createUserServices(data)

                    res.status(200).json({
                        status: "success",
                        message: "user created successfully"
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
            message: "fail to register user"
        })
    }
}