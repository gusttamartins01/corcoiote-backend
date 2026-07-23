import express, { response } from 'express';
import errorHandler from './middlewares/errorHandler.ts';
import requestLogger from './middlewares/requestLogger.ts';
import CustomerRouter from './routes/customer.router.ts';

const app = express();

app.use(requestLogger);

app.use(express.json());

app.use('/customers', CustomerRouter);

app.use((_request, _response) => {
	response.status(404).json({
		message: 'Págna não encontrada!',
	});
});

app.use(errorHandler);

app.listen(Number(process.env.PORT));
