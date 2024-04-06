interface ILotItem {
	id: string;
	title: string;
	category: string;
	description?: string;
	image: string;
	price: string | number;
}

interface IAppState {
	catalog: ILotItem[];
	basket: string[];
	order: IOrder | null;
}

interface IOrderForm {
	payment: string;
	email: string;
	phone: string;
	address: string;
	total: number;
	items: string[];
}

interface IContactForm {
	email: string;
	phone: string;
}

interface IOrder extends IOrderForm {
	total: number;
	items: string[];
}