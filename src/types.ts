export type Customer = {
	id: number;
	name: string;
	email: string;
	status: boolean;
};

export type CreateCustomer = Pick<Customer, 'name' | 'email'>;
export type UpdateCustomer = Partial<Omit<Customer, 'id'>>;

export type Invoice = {
	id: number;
	value: string;
	customer_id: number;
	status: 'Paid' | 'Pending';
	created_at: string;
};

export type CreateInvoice = Pick<Invoice, 'value' | 'customer_id'>;
export type UpdateInvoice = Partial<Omit<Invoice, 'id'>>;
