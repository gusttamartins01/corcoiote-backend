import { z } from 'zod';

export const createCustomerSchema = z.object({
	name: z
		.string('Entrada inválida: Esperava-se um texto')
		.min(1, 'Muito curto: esperava-se um texto com ao menos 1 caractere'),
	email: z.email('Endereço de e-mail inválido')
});

export const updateCustomerSchema = z.object({
	name: z
		.string('Entrada inválida: Esperava-se um texto')
		.min(1, 'Muito curto: esperava-se um texto com ao menos 1 caractere')
		.optional(),
	email: z.email('Endereço de e-mail inválido').optional(),
	status: z.boolean('Entrada inválida: esperava-se um booleano').optional()
});

export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;
export type UpdateCustomerInput = z.infer<typeof updateCustomerSchema>;
