import type { InvoiceStatus } from './components/App.tsx';

export function situationLabel(situation: InvoiceStatus) {
	return situation === 'paid' ? 'Paga' : 'Pendente';
}

export function formatCurrency(cents: number): string {
	const formatter = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

	return formatter.format(cents / 100);
}

export function formatDate(date: string): string {
	const formatter = new Intl.DateTimeFormat('pt-BR', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});

	return formatter.format(new Date(`${date}T00:00:00`));
}
