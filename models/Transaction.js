import mongoose from 'mongoose';
import { stringToDollar } from '../utils/formatCurrency.js';

const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
	{
		buyer: {
			type: String,
			required: true
		},
		amount: {
			type: Number,
			set: stringToDollar
		},
		productIds: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Product'
			}
		]
	},
	{ timestamps: true, toJSON: { setters: true } }
);

const Transaction = mongoose.model('Transaction', TransactionSchema);

export default Transaction;
