import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    rate: {
        type: String,
        min: [1, "Rate should be betwean 1 and 5"],
        max: [5, "Rate should be betwean 1 and 5"],
    },
    feadback: {
        type: String,
        minLength: [5, "feadback name must be atleast 20 letters"],
        maxLength: [100, "feadback name must be maximum 100 letters"],
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'product',
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true
})

export const reviewModel = mongoose.model('review', reviewSchema)