Hamburger.SIZE_SMALL = {price: 50, calories: 20};
Hamburger.SIZE_LARGE = {price: 100, calories: 40};
Hamburger.STUFFING_CHEESE = {price: 10, calories: 20};
Hamburger.STUFFING_SALAD = {price: 20, calories: 5};
Hamburger.STUFFING_POTATO = {price: 15, calories: 10};
Hamburger.TOPPING_MAYO = {price: 20, calories: 5};
Hamburger.TOPPING_SPICE = {price: 15, calories: 0};

function Hamburger(hambSize, hambStuffing) {

    if (arguments.length !== 2)
        throw new SyntaxError("Недостаточно параметров");
    if (hambSize !== Hamburger.SIZE_LARGE && hambSize !== Hamburger.SIZE_SMALL)
        throw new SyntaxError("Вид указан неправильно");
    if (hambStuffing !== Hamburger.STUFFING_CHEESE && hambStuffing !== Hamburger.STUFFING_SALAD && hambStuffing !== Hamburger.STUFFING_POTATO)
        throw new SyntaxError("Начинка указана неправильно");
    var size = hambSize;
    var stuffing = hambStuffing;
    var toppings = [];
    this.getSize = function () {
        return size;
    };

    this.getToppings = function () {
        return toppings;
    };

    this.removeTopping = function (oldTopping) {
        if (toppings.indexOf(oldTopping) === -1) {
            throw new SyntaxError("Попытка удаления несуществующего элемента");
        }
        else
            toppings.splice(toppings.indexOf(oldTopping), 1);
    };

    this.addTopping = function (newTopping) {
        if (toppings.indexOf(newTopping) !== -1) {
            throw new SyntaxError("Попытка дупликации");
        }
        else
            toppings.push(newTopping);
    };

    this.getStuffing = function () {
        return stuffing;
    };

    this.calculatePrice = function () {
        var fullPrice = size.price + stuffing.price;
        for (var i = 0; i < toppings.length; i++)
            fullPrice += toppings[i].price;
        return fullPrice;
    };

    this.calculateCalories = function () {
        var allCalories = size.calories + stuffing.calories;
        for (var i = 0; i < toppings.length; i++)
            allCalories += toppings[i].calories;
        return allCalories;
    };
}
