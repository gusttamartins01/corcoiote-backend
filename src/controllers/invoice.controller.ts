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

export async function getInvoicesById(
	request: Request,
	response: Response
): void {}

export async function createInvoices(
	request: Request,
	response: Response
): void {}

export async function updateInvoices(
	request: Request,
	response: Response
): void {}

export async function deleteInvoices(
	request: Request,
	response: Response
): void {}
