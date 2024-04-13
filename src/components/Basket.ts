import {Component} from "./base/Component";
import {createElement, ensureElement} from "./../utils/utils";
import { IBasketView, IProductInBasket } from "../types";
import {EventEmitter} from "./base/events";

export class Basket extends Component<IBasketView> {
    protected _list: HTMLElement;
    protected _total: HTMLElement;
    protected _button: HTMLButtonElement;

    constructor(container: HTMLElement, protected events: EventEmitter) {
        super(container);

        this._list = ensureElement<HTMLElement>('.basket__list', this.container);
        this._total = this.container.querySelector('.basket__price');
        this._button = this.container.querySelector('.basket__button');

        if (this._button) {
            this._button.addEventListener('click', () => {
                events.emit('order:open');
            });
        }

        this.items = [];
        this._button.disabled = true;
    }

    set items(items: HTMLElement[]) {
      if (items.length) {
        this._list.replaceChildren(...items);
      } else {
        this._list.replaceChildren(createElement<HTMLParagraphElement>('p', {
            textContent: 'Корзина пуста'
        }));
      }
    }
    set selected(items: string[]) {
      if (items.length) {
        // Если в корзине есть товары, разблокируем кнопку оформления заказа
        this.setDisabled(this._button, false);
      } else {
        // Если корзина пуста, блокируем кнопку оформления заказа
        this.setDisabled(this._button, true);
      }
    }
  
    // Сеттер для установки итоговой суммы корзины
    set total(total: number) {
      if (this._total) {
        this.setText(this._total, `${total} синапсов`);
      }
    }
}

interface IProductBasketActions {
	onClick: (event: MouseEvent) => void;
}

export class ProductInBasket extends Component<IProductInBasket> {
	protected _index: HTMLElement;
	protected _title: HTMLElement;
	protected _price: HTMLElement;
	protected _button: HTMLButtonElement;

	constructor(container: HTMLElement, actions?: IProductBasketActions) {
		super(container);
		this._title = container.querySelector(`.card__title`);
		this._index = container.querySelector(`.basket__item-index`);
		this._price = container.querySelector(`.card__price`);
		this._button = container.querySelector(`.card__button`);

		if (this._button) {
			this._button.addEventListener('click', (evt) => {
				this.container.remove();
				actions?.onClick(evt);
			});
		}
	}

	set title(value: string) {
		this.setText(this._title, value);
	}

	set index(value: number) {
		this.setText(this._index, value);
	}

	set price(value: number) {
		this.setText(this._price, value + ' синапсов');
	}
}