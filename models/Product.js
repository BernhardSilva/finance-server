import mongoose from 'mongoose';
import { usdToNumber } from '../utils/format.js';

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
	{
		price: {
			type: Number,
			set: usdToNumber
		},
		expense: {
			type: Number,
			set: usdToNumber
		},
        transactions: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Transaction",
            },
          ],
	},
	{
		timestamps: true,
		toJSON: { setters: true }
	}
);

const Product = mongoose.model('Product', ProductSchema);

export default Product;
