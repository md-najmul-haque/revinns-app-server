import bcrypt from "bcrypt"
import User from "../models/User.js"

export const createUserService = async (data) => {
    const { name, email, password } = data

    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt)

    // const doc = new User(data)

    const doc = new User({
        name: name,
        email: email,
        password: hashedPassword,
    })

    // console.log(doc)
    const user = await doc.save()

    return user;

}

export const getUserService = async () => {
    const users = await User.find({}).select("-password")
    return users
}


//change password

export const updatePasswordService = async (password, id) => {

    const salt = await bcrypt.genSalt(12)
    const hashPassword = await bcrypt.hash(password, salt)

    const result = await User.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                password: hashPassword,
            }

        },
        { upsert: true }
    )

    return result

}

