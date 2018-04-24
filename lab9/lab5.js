/**

 * Класс, объекты которого описывают параметры гамбургера.

 *

 * @constructor

 * @param size Размер

 * @param stuffing Начинка

 * @throws {HamburgerException} При неправильном использовании

 */

function Hamburger(size, stuffing) {  }

/* Размеры, виды начинок и добавок */

Hamburger.SIZE_SMALL = ;

Hamburger.SIZE_LARGE = ;

Hamburger.STUFFING_CHEESE = ;

Hamburger.STUFFING_SALAD = ;

Hamburger.STUFFING_POTATO = ;

Hamburger.TOPPING_MAYO = ;

Hamburger.TOPPING_SPICE = ;

/**

 * Добавить добавку к гамбургеру. Можно добавить несколько

 * добавок, при условии, что они разные.

 *

 * @param topping Тип добавки

 * @throws {HamburgerException} При неправильном использовании

 */

Hamburger.prototype.addTopping = function (topping) {};

    /**

     * Убрать добавку, при условии, что она ранее была

     * добавлена.

     *

     * @param topping Тип добавки

     * @throws {HamburgerException} При неправильном использовании

     */

    Hamburger.prototype.removeTopping = function (topping) {};

    /**

     * Получить список добавок.

     *

     * @return {Array} Массив добавленных добавок, содержит константы

     * Hamburger.TOPPING_*

     */

    Hamburger.prototype.getToppings = function () {};

    /**

     * Узнать размер гамбургера

     */

    Hamburger.prototype.getSize = function () {};

    /**

     * Узнать начинку гамбургера

     */

    Hamburger.prototype.getStuffing = function () {};

    /**

     * Узнать цену гамбургера

     * @return {Number} Цена в тугриках

     */

    Hamburger.prototype.calculatePrice = function () {};

    /**

     * Узнать калорийность

     * @return {Number} Калорийность в калориях

     */

    Hamburger.prototype.calculateCalories = function () {};

    /**

     * Представляет информацию об ошибке в ходе работы с гамбургером.

     * Подробности хранятся в свойстве message.

     * @constructor

     */

    function HamburgerException () { }




// маленький гамбургер с начинкой из сыра

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка из майонеза

hamburger.addTopping(Hamburger.TOPPING_MAYO);

// спросим сколько там калорий

console.log("Calories: %f", hamburger.calculateCalories());

// сколько стоит

console.log("Price: %f", hamburger.calculatePrice());

// я тут передумал и решил добавить еще приправу

hamburger.addTopping(Hamburger.TOPPING_SPICE);

// А сколько теперь стоит?

console.log("Price with sauce: %f", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?

console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку

hamburger.removeTopping(Hamburger.TOPPING_SPICE);

console.log("Have %d toppings", hamburger.getToppings().length); // 1

// не передали обязательные параметры

var h2 = new Hamburger(); // => HamburgerException: no size given

// передаем некорректные значения, добавку вместо размера

var h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE);

// => HamburgerException: invalid size 'TOPPING_SAUCE'

// добавляем много добавок

var h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

// HamburgerException: duplicate topping 'TOPPING_MAYO'