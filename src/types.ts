export type Customer = {
	id: number;
	name: string;
	email: string;
	imageUrl: string | null;
	created_at: Date;
};

export type ValidationFieldError = {
	field: string;
	message: string;
};
