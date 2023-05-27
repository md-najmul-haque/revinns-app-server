import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Provide a valid Email"],
        trim: true,
        lowercase: true,
        unique: [true, "email already exist"]
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
    confirmPassword: {
        type: String,
        require: true,
        trim: true,
    }
},
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)

export default User;