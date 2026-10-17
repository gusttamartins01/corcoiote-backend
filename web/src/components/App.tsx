import { formatCurrency, formatDate, situationLabel } from '../utils.ts';

export type InvoiceStatus = 'paid' | 'pending';

interface Invoice {
	id: number;
	amount: number;
	status: InvoiceStatus;
	issueDate: string;
	dueDate: string;
	customer: {
		id: number;
		name: string;
		email: string;
	};
}

const invoices: Invoice[] = [
	{
		id: 1,
		amount: 753555,
		status: 'paid',
		issueDate: '2026-09-15',
		dueDate: '2026-10-26',
		customer: {
			id: 10,
			name: 'Burguer King',
			email: 'burguerking@bkempresa.com.br',
		},
	},
	{
		id: 2,
		amount: 386385,
		status: 'pending',
		issueDate: '2026-10-15',
		dueDate: '2026-11-24',
		customer: {
			id: 15,
			name: 'Futebol Regatas',
			email: 'futregatas@regatasfutebol.com.br',
		},
	},
	{
		id: 3,
		amount: 986835,
		status: 'paid',
		issueDate: '2026-10-08',
		dueDate: '2026-12-23',
		customer: {
			id: 18,
			name: 'João Motos',
			email: 'motosvendas@vendasmotos.com.br',
		},
	},
];

interface InvoiceRowProps {
	datas: Invoice;
}

function InvoiceRow(props: InvoiceRowProps) {
	return (
		<tr>
			<td>{props.datas.customer.name}</td>
			<td>{formatCurrency(props.datas.amount)}</td>
			<td>{formatDate(props.datas.issueDate)}</td>
			<td>{formatDate(props.datas.dueDate)}</td>
			<td>{situationLabel(props.datas.status)}</td>
		</tr>
	);
}

export default function App() {
	return (
		<>
			<h1>Faturas</h1>
			<table>
				<thead>
					<tr>
						<th>Cliente</th>
						<th>Valor</th>
						<th>Data de emissão</th>
						<th>Data de vencimento</th>
						<th>Situação</th>
					</tr>
				</thead>

				<tbody>
					{invoices.map((invoice) => {
						return <InvoiceRow key={invoice.id} datas={invoice} />;
					})}
				</tbody>
			</table>
		</>
	);
}
