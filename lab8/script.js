navigator.geolocation.getCurrentPosition(
    function(position) {
        alert('Координати користувача: ' +
            position.coords.latitude + ", " + position.coords.longitude);
    }
);

var notify = new Notification("Дозвіл");
notify.onerror = function(){
};
Notification.requestPermission( newMessage );

function newMessage(permission) {
    if( permission != "granted" ) return false;
    var permissionNotification = new Notification("Інформування дозволене");
}

function getHiddenProp(){
    if ('hidden' in document) return 'hidden';
    return null;
}

function isHidden() {
    var prop = getHiddenProp();
    if (!prop) return false;
    return document[prop];
}

window.addEventListener("load", function notifyDemo() {
    var visProp = getHiddenProp();
    if (visProp) {
        var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
        document.addEventListener(evtname, visChange);
    }

    function visChange() {
        setTimeout(showNotification, 60000);
    }

    function showNotification() {
        if (isHidden()) {
            var leaveNotification = new Notification("Інформування", {
                body : "Ви пішли зі сторінки"
            });
        }
    }
});

var statusDisplay = document.getElementById("status");
var searchButton = document.getElementById("searchButton");
var primeContainer = document.getElementById("primeContainer");
primeContainer.innerHTML = '';

function doSearch() {
    var fromNumber = document.getElementById("from").value;
    var toNumber = document.getElementById("to").value;
    fromNumber = Number(fromNumber);
    toNumber = Number(toNumber);
    localStorage.setItem("to", toNumber);
    if(localStorage.getItem("iterator") != null) fromNumber = localStorage.getItem("iterator");
    if(localStorage.getItem("to") != null) toNumber = localStorage.getItem("to");
    if(localStorage.getItem("mylist") != null) primeContainer.innerHTML = localStorage.getItem("mylist").toString();
    searchButton.disabled = true;
    worker = new Worker("PrimeWorker.js");
    worker.onmessage = receivedWorkerMessage;
    worker.onerror = workerError;
    worker.postMessage(
        { from: fromNumber,
            to: toNumber
        }
    );
    statusDisplay.innerHTML = "Пошук простих чисел от "+
        fromNumber + " до " + toNumber + "...";
}

function workerError(error) {
    statusDisplay.innerHTML = error.message;
}

function cancelSearch() {
    worker.terminate();
    worker = null;
    statusDisplay.innerHTML = "Зупинено";
    searchButton.disabled = false;
}

var worker = new Worker("PrimeWorker.js");
function receivedWorkerMessage(event) {
    var primes = event.data;
    localStorage.setItem("mylist", primes);
    var primeList = " ";
    for (var i = 0; i < primes.length; i++) {
        primeList += primes[i];
        if (i != primes.length - 1) primeList += ", ";
    }
    primeContainer.innerHTML += primeList;
    if (primeList.length == 0) {
        statusDisplay.innerHTML = "Помилка пошуку";
        searchButton.disabled = false;
        var searchNotification = new Notification("Інформування", {
            body : "Помилка пошуку"
        });
    }
    else {
        statusDisplay.innerHTML = "Прості числа знайдені";
        searchButton.disabled = false;
        var searchNotification = new Notification("Інформування", {
            body : "Прості числа знайдені"
        });
    }
}
