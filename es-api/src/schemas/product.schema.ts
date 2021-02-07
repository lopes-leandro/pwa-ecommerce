import * as mongoose from 'mongoose';

export const ProductsSchema = new mongoose.Schema({
    _id: String,
    name: String,
    images: Array,
    category: String,
    salePrice: Number,
    price: Number,
    description: String
});