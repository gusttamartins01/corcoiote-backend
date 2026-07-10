import type { Invoice } from '../types.ts';

export const invoices: Invoice[] = [
	{
		id: 1,
		value: 'R$ 10.000,00',
		customer_id: 1,
		status: 'Paid',
		created_at: '2026-07-09',
	},
	{
		id: 2,
		value: 'R$ 2.500,00',
		customer_id: 2,
		status: 'Pending',
		created_at: '2026-07-08',
	},
	{
		id: 3,
		value: 'R$ 7.300,00',
		customer_id: 3,
		status: 'Paid',
		created_at: '2026-07-07',
	},
];
