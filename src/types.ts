export type Customer = {
	id: number;
	name: string;
	email: string;
	status: boolean;
};

export type ValidationFiledError = {
	field: string;
	message: string;
};
