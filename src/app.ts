import express, { Application } from 'express';
import cors from 'cors';
import router from './app/routes/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFoundErrorHandler from './app/middleware/notFoundErrorHandler';

const app: Application = express();

// cors
app.use(cors());

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

// Global error handler
app.use(globalErrorHandler);
app.use(notFoundErrorHandler);

export default app;
