import { NotFoundError } from '../errors/index.ts';
import prisma from '../lib/prisma.ts';
import type { CreateUser, UpdateUser } from '../schemas/user.schema.ts';
import type { User } from '../types.ts';

export async function findAllUsers(): Promise<User[]> {
	return await prisma.user.findMany();
}

export async function findUsersById(id: number): Promise<User> {
	const user = await prisma.user.findUnique({
		where: { id }
	});

	if (!user) throw new NotFoundError(`Usuário de id ${id} não encontrada.`);

	return user;
}

export async function insertUsers(data: CreateUser): Promise<User> {
	return await prisma.user.create({
		data
	});
}

export async function modifyUsers(id: number, data: UpdateUser): Promise<User> {
	await findUsersById(id);

	return await prisma.user.update({
		where: { id },
		data
	});
}

export async function removeUsers(id: number): Promise<void> {
	await findUsersById(id);

	await prisma.user.delete({
		where: { id }
	});
}
