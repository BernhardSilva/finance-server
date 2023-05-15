import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import kpiRoutes from './routes/kpi.js';
import KPI from './models/KPI.js';
import { kpis } from './data/data.js';

const app = express();


/* CONFIGURATIONS */

dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */

app.use('/kpi', kpiRoutes);

/* MONGOOSE SETUP */

const PORT = process.env.PORT || 9000;
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(async () => {
		app.listen(PORT, () => console.log(`Server Port:${PORT}`));
		// ADD DATA ONE TIME ONLY OR AS NEEDED
		await mongoose.connection.db.dropDatabase();
		// const kpisWithoutId = kpis.map({_id, ...rest});
		// console.log("🚀 ~ file: index.js:43 ~ .then ~ kpisWithoutId:", kpisWithoutId)
		KPI.insertMany(kpis);
	})
	.catch((error) => console.log(`${error}, SERVER ERROR`));
