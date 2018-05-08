var buttonCalc = document.querySelector('#calculate');
buttonCalc.addEventListener('click', calculateParams);

function calculateParams() {
    var hSize = document.getElementById("size").value.toUpperCase();
    hSize = Hamburger[hSize.toString()];
    var hStuffing = document.getElementById('stuffing').value.toUpperCase();
    hStuffing = Hamburger[hStuffing.toString()];
    var hamburger = new Hamburger(hSize, hStuffing);
    var hToppings = document.querySelectorAll('input[type="checkbox"]:checked');
    if (hToppings !== undefined) {
        for (var i = 0; i < hToppings.length; i++)
            hamburger.addTopping(Hamburger[hToppings[i].value.toUpperCase()]);
    }
    document.getElementById('calories').value = hamburger.calculateCalories();
    document.getElementById('price').value = hamburger.calculatePrice();
}