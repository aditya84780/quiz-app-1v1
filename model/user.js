const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            // validate:
        },
        password: {
            type: String,
            required: true,
        },
        highscore: {
            type: Number,
            required: false,
        },
        admin: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true}
);

const User = mongoose.model("user", userSchema);

module.exports = User;