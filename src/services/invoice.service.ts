import { invoices } from './../mocks/invoice.mock.ts';
import type { CreateInvoice, Invoice, UpdateInvoice } from '../types.ts';

export function findAllInvoices(): Invoice[] {
	return invoices;
}

export function findInvoiceById(id: number): Invoice {
	const invoice = invoices.find((i) => i.id === id);

	if (!invoice) throw new Error('Fatuera não encontrada.');

	return invoice;
}

export function insertInvoice({ value, customer_id }: CreateInvoice): Invoice {
	const invoice: Invoice = {
		id: invoices[invoices.length - 1].id + 1,
		value: value,
		customer_id: customer_id,
		status: 'Pending',
		created_at: '2026-07-09',
	};

	invoices.push(invoice);

	return invoice;
}

export function modifyInvoice(
	id: number,
	{ value, customer_id, status, created_at }: UpdateInvoice,
): Invoice {
	const invoice = invoices.find((i) => i.id === id);

	if (!invoice) throw new Error('Fatuera não encontrada.');

	if (value) invoice.value = value;
	if (customer_id) invoice.customer_id = customer_id;
	if (status) invoice.status = status;
	if (created_at) invoice.created_at = created_at;

	return invoice;
}

export function removeInvoice(id: number): void {
	const index = invoices.findIndex((i) => i.id === id);

	if (index === -1) throw new Error('fatura não encontarda');

	invoices.splice(index, 1);
}
