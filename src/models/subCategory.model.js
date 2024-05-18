import mongoose from "mongoose";

const subCategorySchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        minLength: [3, "subCategory name must be atleast 3 letters"],
        maxLength: [20, "subCategory name must be maximum 20 letters"],
    },
    bio: {
        type: String,
        minLength: [20, "bio name must be atleast 20 letters"],
        maxLength: [100, "bio name must be maximum 100 letters"],
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: 'categorie',
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true
})

export const subCategoryModel = mongoose.model('subCategorie', subCategorySchema)