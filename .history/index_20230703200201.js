import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { kpis, products, transactions } from './data/data.js';
import KPI from './models/KPI.js';
import Product from './models/Product.js';
import Transaction from './models/Transaction.js';
import kpiRoutes from './routes/kpi.js';
import productRoutes from './routes/product.js';
import transactionRoutes from './routes/transaction.js';

const app = express();

/* CONFIGURATIONS */

dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */

app.use('/kpi', kpiRoutes);
app.use('/product', productRoutes);
app.use('/transaction', transactionRoutes);

/* MONGOOSE SETUP */

const PORT = process.env.PORT || 9000;
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(async () => {
		app.listen(PORT, () => console.log(`Server Port:${PORT}`));

		const collections = await mongoose.connection.db.listCollections().toArray();
		const kpisCollectionExists = collections.some((collection) => collection.name === 'kpis');
		const productsCollectionExists = collections.some(
			(collection) => collection.name === 'products'
		);
		const transactionsCollectionExists = collections.some(
			(collection) => collection.name === 'transactions'
		);

		const productsCount = await Product.countDocuments();
		const kpisCount = await KPI.countDocuments();
		const transactionsCount = await Transaction.countDocuments();

		let insertedData = [];

		const insertedDataMessage = 'inserted succesfully!';

		try {
			let dropDB = false;

			if (dropDB) {
				console.log('DB DROPPED!!!');
			}

			// Create table and inject dummy data if db.table.name doesn't exist or if doesn't has any data

			if (!kpisCollectionExists || kpisCount === 0) {
				await KPI.insertMany(kpis);
				insertedData.push('Kpis');
			}
			if (!productsCollectionExists || productsCount === 0) {
				await Product.insertMany(products);
				insertedData.push('Products');
			}
			if (!transactionsCollectionExists || transactionsCount === 0) {
				await Transaction.insertMany(transactions);
				insertedData.push('Transactions');
			}

			if (insertedData.length !== 0) {
				console.log(`${insertedData} ${insertedDataMessage}`);
			}
		} catch (error) {
			console.log(error);
		}
	})
	.catch((error) => console.log(`${error}, SERVER ERROR`));
