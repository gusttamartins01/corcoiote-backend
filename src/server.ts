import express from 'express';
import CustomerRouter from './routes/customer.router.ts';
import InvoiceRouter from './routes/invoice.router.ts';

const app = express();

app.use(express.json());

app.use('/customers', CustomerRouter);

app.use('/invoices', InvoiceRouter);

app.use((_request, response) => {
	response.status(404).json({
		messege: 'Not found!',
	});
});

const PORT = Number(process.env.PORT) || 3333;

app.listen(PORT, () => {
	console.log(`Server running on port: http://localhost:${PORT}`);
});
