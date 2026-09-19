import { z } from 'zod';

export const createInvoiceSchema = z.object({
	amount: z
		.number('Entrada inválida: esperava-se um número.')
		.positive('Entrada inválida: o número precisa maior que zero.'),
	status: z.enum(['PENDING', 'PAIDE']),
	date: z.coerce.date('Entrada inválida: precisa ser informado uma data.'),
	customerId: z
		.number('Entrada inválida: esperava-se um número.')
		.positive('Entrada inválida: o número precisa maior que zero.')
});

export const updateInvoiceSchema = createInvoiceSchema.partial();

export type CreateInvoice = z.infer<typeof createInvoiceSchema>;
export type UpdateInvoice = z.infer<typeof updateInvoiceSchema>;
