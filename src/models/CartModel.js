const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
},
    { timestamps: true, versionKey: false }
);


const mongoose = require('mongoose');

const cartModel = mongoose.model('carts', cartItemSchema);
module.exports = cartModel; 