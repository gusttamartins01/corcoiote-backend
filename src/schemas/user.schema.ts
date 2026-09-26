import { z } from 'zod';

export const createUserSchema = z.object({
	name: z
		.string('Entrada inválida: Esperava-se um texto')
		.min(1, 'Muito curto: esperava-se um texto com ao menos 1 caractere'),
	email: z.email('Endereço de e-mail inválido'),
	password: z.string('Entrada inválida: Esperava-se um texto')
});

export const updateUserSchema = createUserSchema.partial();

export type CreateUser = z.infer<typeof createUserSchema>;
export type UpdateUser = z.infer<typeof updateUserSchema>;
