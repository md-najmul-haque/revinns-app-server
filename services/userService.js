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
