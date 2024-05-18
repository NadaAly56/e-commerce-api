import mongoose from "mongoose";

const brandSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: [3, "brand name must be atleast 3 letters"],
        maxLength: [20, "brand name must be maximum 20 letters"],
    },
    bio: {
        type: String,
        minLength: [20, "bio name must be atleast 20 letters"],
        maxLength: [100, "bio name must be maximum 100 letters"],
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: 'categorie',
        required: true,
    },
    subCategoryId: {
        type: mongoose.Types.ObjectId,
        ref: 'subCategorie',
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timstamps: true
})

export const brandModel = mongoose.model('brand', brandSchema)