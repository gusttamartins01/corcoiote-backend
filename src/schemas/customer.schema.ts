import { z } from 'zod';

export const createCustomerSchema = z.object({
	name: z
		.string('Entrada inválida: Esperava-se um texto')
		.min(1, 'Muito curto: esperava-se um texto com ao menos 1 caractere'),
	email: z.email('Endereço de e-mail inválido'),
	imageUrl: z.url('URL inválida.').optional()
});

export const updateCustomerSchema = z.object({
	name: z
		.string('Entrada inválida: Esperava-se um texto')
		.min(1, 'Muito curto: esperava-se um texto com ao menos 1 caractere')
		.optional(),
	email: z.email('Endereço de e-mail inválido').optional(),
	imageUrl: z.url('URL inválida.').optional()
});

export type CreateCustomer = z.infer<typeof createCustomerSchema>;
export type UpdateCustomer = z.infer<typeof updateCustomerSchema>;
