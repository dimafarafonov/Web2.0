"use strict";

/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
function Hamburger(size, stuffing) {
    if (arguments.length < 2) {
        throw new HamburgerException("Required two arguments, given: " + arguments.length)
    }
    if (Hamburger.allowedSizes.indexOf(size) < 0)
    {
        throw new HamburgerException("Invalid size");
    }
    if (Hamburger.allowedStuffing.indexOf(stuffing) < 0)
    {
        throw new HamburgerException("Invalid stuffing");
    }

    this.size = size;
    this.stuffing = stuffing;
}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {
    'price': 50,
    'calories': 20
};
Hamburger.SIZE_LARGE = {
    'price': 50,
    'calories': 20
};
Hamburger.STUFFING_CHEESE = {
    'price': 50,
    'calories': 20
};
Hamburger.STUFFING_SALAD = {
    'price': 50,
    'calories': 20
};
Hamburger.STUFFING_POTATO = {
    'price': 50,
    'calories': 20
};
Hamburger.TOPPING_MAYO = {
    'price': 50,
    'calories': 20
};
Hamburger.TOPPING_SPICE = {
    'price': 50,
    'calories': 20
};

/* Разрешенные свойства */
Hamburger.allowedToppings = [Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE];
Hamburger.allowedSizes = [Hamburger.SIZE_SMALL, Hamburger.SIZE_LARGE];
Hamburger.allowedStuffing = [Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_POTATO, Hamburger.STUFFING_SALAD];

/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function (topping) {
    if (arguments.length != 1) {
        throw new HamburgerException("Required one argument, given: " + arguments.length)
    }
    if (Hamburger.allowedToppings.indexOf(topping) < 0)
    {
        throw new HamburgerException("Invalid topping");
    }
    if (!("toppings" in this)) {
        this.toppings = [];
    } else if (this.toppings.indexOf(topping) >= 0) {
        throw new HamburgerException("Duplicate topping")
    }
    this.toppings.push(topping);
}

/**
 * Убрать добавку, при условии, что она ранее была
 * добавлена.
 *
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (topping) {
    if (arguments.length != 1) {
        throw new HamburgerException("Required one argument, given: " + arguments.length)
    }
    if (Hamburger.allowedToppings.indexOf(topping) < 0)
    {
        throw new HamburgerException("Invalid topping");
    }
    if (this.toppings.indexOf(topping) < 0)
    {
        throw new HamburgerException("Hamburger doesn't have given topping");
    }
    delete this.toppings[topping];
}

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function () {
    return this.toppings;
}

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () {
    return this.size;
}

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () {
    return this.stuffing;
}

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.getPrice = function () {
    var size = this.getSize();
    var price = size['price'];

    var toppings = this.getToppings();
    toppings.forEach(function(item) {
        price += item['price'];
    });

    var stuffing = this.getStuffing();
    price += stuffing['price'];

    return price;
}

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.getCalories = function () {
    var size = this.getSize();
    var calories = size['calories'];

    var toppings = this.getToppings();
    toppings.forEach(function(item) {
        calories += item['calories'];
    });

    var stuffing = this.getStuffing();
    calories += stuffing['calories'];

    return calories;
}

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
function HamburgerException (message) {
    this.message = message;
}

// маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Calories: %f", hamburger.getCalories());
// сколько стоит
console.log("Price: %f", hamburger.getPrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// А сколько теперь стоит?
console.log("Price with sauce: %f", hamburger.getPrice());
// Проверить, большой ли гамбургер?
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1