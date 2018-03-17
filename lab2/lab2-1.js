function isInteger(num) {
    if(parseInt(num)===num)
        return "true";
    else return "false";
}
function findPrimes(a,b) {
    if(b>=3)
        console.log(3);
    for (var i = a; i <= b; i++) {

        for (var j = 2; j <= i; j++) {
            if (i % j == 0 || i%(j+1) == 0)
                break;
            else
                console.log(i);
        }

    }
}