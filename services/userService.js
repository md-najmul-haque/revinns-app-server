import bcrypt from "bcrypt"

export const createUserServices = async (data) => {
    const { name, email, password, confirmPassword } = data

    const salt = await bcrypt.genSalt(12)

}