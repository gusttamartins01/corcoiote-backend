import type { Request, Response } from 'express';
import type {
	CreateInvoice,
	UpdateInvoice
} from '../schemas/invoice.schema.ts';
import * as InvoiceService from '../services/invoice.service.ts';
import type { Page } from '../types.ts';

export function getAllInvoices(request: Request, response: Response): void {
	const page = request.query.page as unknown as Page;

	const invoices = InvoiceService.findAllInvoices(page);

	response.status(200).json(invoices);
}

export function getInvoicesById(request: Request, response: Response): void {
	const id = +request.params.id;

	const invoice = InvoiceService.findInvoiceById(id);

	response.status(200).json(invoice);
}

export function createInvoices(request: Request, response: Response): void {
	const body = request.body as CreateInvoice;

	const invoice = InvoiceService.insertInvoice(body);

	response.status(201).json(invoice);
}

export function updateInvoices(request: Request, response: Response): void {
	const id = +request.params.id;
	const body = request.body as UpdateInvoice;

	const invoice = InvoiceService.modifyInvoice(id, body);

	response.status(200).json(invoice);
}

export function deleteInvoices(request: Request, response: Response): void {
	const id = +request.params.id;

	InvoiceService.removeInvoice(id);

	response.status(204).send();
}
