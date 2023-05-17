import mongoose from 'mongoose';
import { stringToDollar } from '../utils/formatCurrency.js';

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
	{
		price: {
			type: Number,
			set: stringToDollar
		},
		expense: {
			type: Number,
			set: stringToDollar
		},
		transactions: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Transaction'
			}
		]
	},
	{
		timestamps: true,
		toJSON: { setters: true }
	}
);

const Product = mongoose.model('Product', ProductSchema);

export default Product;