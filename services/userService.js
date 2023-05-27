import bcrypt from "bcrypt"

export const createUserService = async (data) => {
    const { name, email, password, confirmPassword } = data

    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt)

    const doc = new User({
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    })

    const user = await doc.save()

    return user;

}