import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: [3, "product title must be atleast 3 letters"],
        maxLength: [20, "product title must be maximum 20 letters"],
        trim: true,
    },
    desc: {
        type: String,
        minLength: [20, "description must be atleast 20 letters"],
        maxLength: [100, "description must be maximum 100 letters"],
        trim: true,
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: 'categorie',
        required: true,
    },
    subCategoryId: [{
        type: mongoose.Types.ObjectId,
        ref: 'subCategorie',
        required: true,
    }], // نتناقش هل البرودكت ينفع يكون تحت اكتر من سب كاتجوري ولا لأ
    brandId: {
        type: mongoose.Types.ObjectId,
        ref: 'brand',
    },
    price: {
        type: Number,
        required: true,
    },
    onSale: {
        type: Boolean,
        default: false,
    },
    priceAfterSale: {
        type: Number,
        required: function(){
            return this.onSale
        },
    },
    priceAfterCupon: {
        type: Number,
        default: this.price
    },
    hasColors: {
        type: Boolean,
        default: false,
    },
    colors: {
        type: [String],
        required: function(){
            return this.onSale
        },
    },
    imageCover: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
        validate: {
            validator: (v)=> {
                return v.length >= 1 && v.length <= 5
            }
        }
    },
    avrageReviews: {
        type: Number,
        // required: true,
        // حساب الافردج هيكون ازاي وفين
    },
    isConfirmed: {
        type: Boolean,
        default: false,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },

}, {
    timestamps: true
})

export const productModel = mongoose.model('categorie', productSchema)