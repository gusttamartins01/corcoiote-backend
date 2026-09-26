import type { Request, Response } from 'express';
import type { CreateUser, UpdateUser } from '../schemas/user.schema.ts';
import * as UserService from '../services/user.service.ts';

export function getAllUsers(_request: Request, response: Response): void {
	const users = UserService.findAllUsers();

	response.status(200).json(users);
}

export function getUserById(request: Request, response: Response): void {
	const id = +request.params.id;

	const user = UserService.findUsersById(id);

	response.status(200).json(user);
}

export function createUser(request: Request, response: Response): void {
	const body = request.body as CreateUser;

	const user = UserService.insertUsers(body);

	response.status(201).json(user);
}

export function updateUser(request: Request, response: Response): void {
	const id = +request.params.id;
	const body = request.body as UpdateUser;

	const user = UserService.modifyUsers(id, body);

	response.status(200).json(user);
}

export function deleteUSer(request: Request, response: Response): void {
	const id = +request.params.id;

	UserService.removeUsers(id);

	response.status(204).send();
}
