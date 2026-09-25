import { Router } from 'express';
import * as InvoiceController from '../controllers/invoice.controller.ts';
import validate from '../middlewares/validate.ts';
import {
	createInvoiceSchema,
	updateInvoiceSchema
} from '../schemas/invoice.schema.ts';

const router = Router();

router.get('/', InvoiceController.getAllInvoices);
router.get('/:id', InvoiceController.getInvoicesById);
router.post(
	'/',
	validate(createInvoiceSchema),
	InvoiceController.createInvoices
);
router.put(
	'/:id',
	validate(updateInvoiceSchema),
	InvoiceController.updateInvoices
);
router.delete('/:id', InvoiceController.deleteInvoices);

export default router;
