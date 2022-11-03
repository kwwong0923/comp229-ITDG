const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        googleID: {
            type: String,
        },
        data: {
            type: Date,
            default: Date.now,
        },
        // local login part
        email: {
            type: String,
        },
        password: {
            type: String,
            minLength: 8,
            maxLength: 1024,
        },
    }
);