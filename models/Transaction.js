import mongoose from 'mongoose';
import { usdToNumber } from '../utils/format.js';

const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
	{
		buyer: {
			type: String
		},
		amount: {
			type: Number,
			set: usdToNumber
		},
		productIds: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Product'
			}
		]
	},
	{
		timestamps: true,
		toJSON: { setters: true }
	}
);

const Transaction = mongoose.model('Transaction', TransactionSchema);

export default Transaction;
