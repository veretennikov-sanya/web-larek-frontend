import {Model} from "./base/Model";
import {IProduct, IOrder, IDeliveryForm, IAppState, FormErrors, IContactForm} from "../types";

export type CatalogChangeEvent = {
  catalog: IProduct[]
};


export class AppState extends Model<IAppState> {
  catalog: IProduct[];
  basket: IProduct[] = [];
  order: IOrder = {
    payment: 'online',
    address: '',
    email: '',
    phone: '',
    total: 0,
    items: []
  };
  preview: string | null;
  formErrors: FormErrors = {};

  clearBasket() {
    this.basket = [];
    this.updateBasket();
  }

  clearOrder() {
    this.order = {
      payment: 'online',
      address: '',
      email: '',
      phone: '',
      total: 0,
      items: []
    }
  }

  setCatalog(items: IProduct[]) {
    this.catalog = items;
    this.emitChanges('items:changed', { catalog: this.catalog});
  }

  setPreview(item: IProduct) {
    this.preview = item.id;
    this.emitChanges('preview:changed', item);
  }

  addToBasket(item: IProduct){
    if(this.basket.indexOf(item) < 0){
      this.basket.push(item);
      this.updateBasket();
    }
  }

  removeFromBasket(item: IProduct) {
    this.basket = this.basket.filter((it) => it != item);
    this.updateBasket();
  }

  updateBasket(){
    this.emitChanges('counter:changed', this.basket);
    this.emitChanges('basket:changed', this.basket);
  }

  setDeliveryField(field: keyof IDeliveryForm, value: string) {
    this.order[field] = value;
    if(this.validateDelivery()) {
      this.events.emit('delivery:ready', this.order);
    }
  }

  setContactField(field: keyof IContactForm, value: string) {
    this.order[field] = value;
    if(this.validateContact()) {
      this.events.emit('contact:ready', this.order);
    }
  }

  validateDelivery(){
    const errors: typeof this.formErrors = {};
    if (!this.order.address) {
      errors.address = "Необходимо указать адрес"
    }
    this.formErrors = errors;
    this.events.emit('formErrors:change', this.formErrors);
    return Object.keys(errors).length === 0;
  }

  validateContact(){
    const errors: typeof this.formErrors = {};
    if(!this.order.email) {
      errors.email = 'Необходимо указать email';
    }
    if (!this.order.phone) {
      errors.phone = 'Необходимо указать телефон';
    }
    this.formErrors = errors;
    this.events.emit('formErrors:change', this.formErrors);
    return Object.keys(errors).length === 0;
  }

  //общая сумма заказа в корзине
  getBasketTotal() {
		return this.basket.reduce((sum, item) => sum + item.price, 0);
	}
}