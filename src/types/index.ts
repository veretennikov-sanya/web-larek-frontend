// интерфейс карточки товара
interface ILotItem {
	id: string;
	title: string;
	category: string;
	description?: string;
	image: string;
	price: string | number;
}

// интерфейс модели приложения
interface IAppState {
	catalog: ILotItem[];
	basket: string[];
	order: IOrder | null;
}

// Интерфейс для формы заказа
interface IOrderForm {
	payment: string;
	email: string;
	phone: string;
	address: string;
	total: number;
	items: string[];
}

// Интерфейс для контактной формы
interface IContactForm {
	email: string;
	phone: string;
}

//Интерфейс для формы
interface IOrder extends IOrderForm {
	total: number;
	items: string[];
}