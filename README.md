# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

# Документация

## Классы 👍

- Класс Api отвечает за отправку запросов серверу:
   Методы
     "get" – получить данные с сервера;
     "post" – отправить данные на сервер;
     "handleResponse" – обработчик ответа сервера;

- Класс EventEmitter - Брокер событий который имеет возможность:
   "on" - Установить обработчик на событие;
   "off" - Снять обработчик с события;
   "emit" - Инициировать событие с данными;
   "onAll" - Слушать все события;
   "offAll" - Сбросить все обработчики;
   "trigger" - Сделать коллбек триггер, генерирующий событие при вызове;


## Интерфейсы 😎
 Основные интерфейсы находятся в каталоге src/components/types/index.ts;

- "ILotItem" - интерфейс карточки товара;

- "IAppState" - интрефейс модели приложения;

- "IOrderForm" - интерфейс для формы заказа;

- "IContactForm" - интерфейс для контактной формы;

- "IOrder" - интерфейс формы;


## Компоненты данных 👐

- Класс AppData содержит состояние корзины, каталога товаров, заказа и ошибок валидации;

- Класс Basket предназначен для вывода контента в модальном окне Корзины;

- Класс Form предназначен для форм приложения;

- Класс Modal отвечает за работу модальных окон и вывод в них контента;

- Класс Success предназначен для отображения окна с уведомлением об успешном заказе;

- Класс Card предназначен вывода данных о товаре на страницу;

- Класс OrderForm предназначен для работы с формой "order";

- Класс ContactForm предназначен для работы с формой "contacts";

- Класс Page предназначен вывода основных данных на страницу;


## Описание работы приложения 🔜

Изначально с сервера получаем данные о карточках. После этого карточки отображаются на странице.
При клике на карточку открывается модальное окно с подробной информацией о карточке.
При нажатии кнопки "в корзину" в открытом модальном окне карточки, происходит добавление этой карточки в поле "basket" класса "AppData" , а затем модальное окно закрывается.
При нажатии на иконку корзины в верхнем правом углу страницы открывается модальное окно корзины.
При нажатии на иконку удаления карточки в модальном окне корзины - карточка удаляется из корзины.
При нажатии кнопки "Оформить" в открытом модальном окне корзины - открывается модальное окно "Order".
При выборе способа оплаты через кнопки "Онлайн" и "При получении" в модальном окне "Order" - данные формы обновляются.
При вводе адреса доставки в поле "address" в модальном окне "Order" - происходит проверка на валидность поля ввода.
При правильном заполнении способа оплаты и адреса доставки и кнопка "Далее" становится активной.
При нажатии кнопки "Далее" - открывается модальное окно "сontacts".
При вводе электронной почты в поле "email" в модальном окне "сontacts" - происходит обновление данных формы и проверка на валидность.
При вводе номера телефона в поле "phone" в модальном окне "сontacts" - происходит проверка на валидность поля ввода.
При правильном заполнении электронной почты и телефона - кнопка "Оплатить" становится активной.
При нажатии кнопки "Оплатить" - открывается модальное окно с подтверждением покупки.