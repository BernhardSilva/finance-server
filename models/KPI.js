import mongoose from 'mongoose';
import { stringToDollar } from '../utils/formatCurrency.js';

const Schema = mongoose.Schema;

const daySchema = new Schema(
	{
		date: String,
		revenue: {
			type: Number,
			set: stringToDollar
		},
		expenses: {
			type: Number,
			set: stringToDollar
		}
	},
	{
		toJSON: { setters: true }
	}
);

const montSchema = new Schema(
	{
		month: String,
		revenue: {
			type: Number,
			set: stringToDollar
		},
		expenses: {
			type: Number,
			set: stringToDollar
		},
		operationalExpenses: {
			type: Number,
			set: stringToDollar
		},
		nonOperationalExpenses: {
			type: Number,
			set: stringToDollar
		}
	},
	{
		toJSON: { setters: true }
	}
);

const KPISchema = new Schema(
	{
		totalProfit: {
			type: Number,
			set: stringToDollar
		},
		totalRevenue: {
			type: Number,
			set: stringToDollar
		},
		totalExpenses: {
			type: Number,
			set: stringToDollar
		},
		expensesByCategory: {
			type: Map,
			of: {
				type: Number,
				set: stringToDollar
			}
		},
		dailyData: [daySchema],
		monthlyData: [montSchema]
	},
	{
		timestamps: true,
		toJSON: { setters: true }
	}
);

const KPI = mongoose.model('KPI', KPISchema);

export default KPI;