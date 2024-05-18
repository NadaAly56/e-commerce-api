import mongoose from "mongoose";

const userShcema = mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        validate: {
            validator: function(){
                return /^[A-Za-z0-9]{4,8}$/
            },
            message: 'password should be A-Z a-z 4-8 characters'
        }
    },
    phone: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    emailConfirmed: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
})
export const userModel = mongoose.model('user', userShcema)