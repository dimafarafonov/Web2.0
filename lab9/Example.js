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
    if (Hamburger.allowedSizes.indexOf(size))
    {
        throw new HamburgerException("Invalid size");
    }
    if (Hamburger.allowedStuffing.indexOf(stuffing))
    {
        throw new HamburgerException("Invalid stuffing");
    }

    this.size = size;
    this.stuffing = stuffing;

    // initial price
    this.price = 0;
    this.price += size.price;
    this.price += stuffing.price;

    // initial calories
    this.calories = 0;
    this.calories += size.calories;
    this.calories += stuffing.calories;


    // stuff & toppings
    this.taste = {
        cheese: {
            added: false,
            qty: 0
        },
        salad: {
            added: false,
            qty: 0
        },
        potato: {
            added: false,
            qty: 0
        },
        mayo: {
            added: false,
            qty: 0
        },
        spice: {
            added: false,
            qty: 0
        }
    };
}

/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
/* Size */
Hamburger.SIZE_SMALL = { price: 50, calories: 20 };
Hamburger.SIZE_LARGE = { price: 100, calories: 40 };

/* Stuffing */
Hamburger.STUFFING_CHEESE = { price: 10, calories: 20, title: "cheese" };
Hamburger.STUFFING_SALAD = { price: 20, calories: 5, title: "salad" };
Hamburger.STUFFING_POTATO = { price: 15, calories: 10, title: "potato" };

/* Toppping */
Hamburger.TOPPING_MAYO = { price: 20, calories: 5, title: "mayo" };
Hamburger.TOPPING_SPICE = { price: 15, calories: 0, title: "spice" };

Hamburger.allowedToppings = [Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE];
Hamburger.allowedSizes = [Hamburger.SIZE_SMALL, Hamburger.SIZE_LARGE];
Hamburger.allowedStuffing = [Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_POTATO, Hamburger.STUFFING_SALAD];

Hamburger.prototype.addTopping = function(topping) {
    // update qty and status of added toppping's
    if (arguments.length !== 1) {
        throw new HamburgerException("Required one argument, given: " + arguments.length)
    }
    if (Hamburger.allowedToppings.indexOf(topping) < 0)
    {
        throw new HamburgerException("Invalid topping");
    }
    if (this.taste[topping.title].added === true) {
        throw new HamburgerException("Duplicate topping, but I added it!")
    }
    var toppingElement = this.taste[topping.title];
    toppingElement.qty++;
    toppingElement.added = true;

  //  console.log(toppingElement);
    // add price and calories
    this.price += topping.price;
    this.calories += topping.calories;
};

/**
 * Убрать добавку, при условии, что она ранее была
 * добавлена.
 *
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function(topping) {
    if (arguments.length !== 1) {
        throw new HamburgerException("Required one argument, given: " + arguments.length)
    }
    if (Hamburger.allowedToppings.indexOf(topping) < 0)
    {
        throw new HamburgerException("Invalid topping");
    }
    if (this.taste[topping.title].added === false)
    {
        throw new HamburgerException("Hamburger doesn't have given topping");
    }
    var toppingElement = this.taste[topping.title];
    toppingElement.qty--;

    if (toppingElement.qty <= 1) {
        toppingElement.added = false;
        toppingElement.qty = 0;
    }

   // console.log(toppingElement);

    // remove values of price and calories
    this.price -= topping.price;
    this.calories -= topping.calories;
};

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function() {
    var toppingsArray = [];
    if(this.taste.mayo.added === true)
        toppingsArray[toppingsArray.length] = 'Hamburger.TOPPING_MAYO';
    if(this.taste.spice.added === true)
        toppingsArray[toppingsArray.length] = 'Hamburger.TOPPING_SPICE';
    return toppingsArray;
};

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function() {
    return this.size;
};
/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function() {
    return 'Stuffings: ' + this.stuffing.title;
};

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function() {
    return this.price;
};

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function() {
    return this.calories;
};

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
function HamburgerException(message) {
    this.message = message;
}
/////////////////////////////////////////////
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
console.log("Price with spice: %f", hamburger.calculatePrice());
// Проверить, большой ли гамбургер?
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1
