import type { ValidationFiledError } from '../types.ts';

export class NotFoundError extends Error {
	statusCode: number;

	constructor(message: string) {
		super(message);
		this.statusCode = 404;
	}
}

export class ValidationError extends Error {
	statusCode: number;
	fields: ValidationFiledError[];

	constructor(message: string, fields: ValidationFiledError[]) {
		super(message);
		this.statusCode = 400;
		this.fields = fields;
	}
}
