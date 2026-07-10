export type Customer = {
	id: number;
	name: string;
	email: string;
	status: boolean;
};

export type CreateCustomer = Pick<Customer, 'name' | 'email'>;
export type UpdateCustomer = Partial<Omit<Customer, 'id'>>;

export type Invoices = {
	id: number;
	value: string;
	customer_id: number;
	status: 'Paid' | 'Pending';
	created_at: string;
};
