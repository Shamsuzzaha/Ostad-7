import mongoose from "mongoose";

// create user info database structure
const userSchema = new mongoose.Schema(
    {
        email: {type: String, unique: true, required: true},
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        mobile: {type: String, required: true},
        password: {type: String, required: true},
        otp:{type: String, default: 0},
    },
    { timestamps: true , versionKey: false}  // timestamps used for createAt and updateAt time autometically
)

// create a user Model
const UsersModel = mongoose.model("users", userSchema); // users is a collection name

export default UsersModel