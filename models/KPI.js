import mongoose from 'mongoose';
import { usdToNumber } from '../utils/format.js';

const Schema = mongoose.Schema;

const daySchema = new Schema(
	{
		date: String,
		revenue: {
			type: Number,
			set: usdToNumber
		},
		expenses: {
			type: Number,
			set: usdToNumber
		}
	},
	{
		toJSON: { getters: true }
	}
);

const montSchema = new Schema(
	{
		month: String,
		revenue: {
			type: Number,
			set: usdToNumber
		},
		expenses: {
			type: Number,
			set: usdToNumber
		},
		operationalExpenses: {
			type: Number,
			set: usdToNumber
		},
		nonOperationalExpenses: {
			type: Number,
			set: usdToNumber
		}
	},
	{
		toJSON: { getters: true }
	}
);

const KPISchema = new Schema(
	{
		totalProfit: {
			type: Number,
			set: usdToNumber
		},
		totalRevenue: {
			type: Number,
			set: usdToNumber
		},
		totalExpenses: {
			type: Number,
			set: usdToNumber
		},
		expensesByCategory: {
			type: Map,
			of: {
				type: Number,
				set: usdToNumber
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
