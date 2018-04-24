var fromNumber = document.getElementById("from").value;
var toNumber = document.getElementById("to").value;
var statusDisplay = document.getElementById("status");
var searchButton = document.getElementById("searchButton");
var primeContainer = document.getElementById("primeContainer");
primeContainer.innerHTML = '';
function doSearch() {
    // Отключаем кнопку запуска вычислений, чтобы пользователь не мог
    // запускать несколько процессов поиска одновременно
    searchButton.disabled = true;

    // Получаем начальное и конечное число диапазона поиска


    // Создаем поток
    worker = new Worker("PrimeWorker.js");

    // Подключаем функцию к событию onMessage, чтобы получать
    // сообщения от потока
    worker.onmessage = receivedWorkerMessage;
    worker.onerror = workerError;

    worker.postMessage(
        { from: fromNumber,
            to: toNumber
        }
    );

    // Информируем пользователя, что вычисления выполняются
    statusDisplay.innerHTML = "Фоновый поток ищет простые числа (от "+
        fromNumber + " до " + toNumber + ") ...";
}

function workerError(error) {
    statusDisplay.innerHTML = error.message;
}
function cancelSearch() {
    worker.terminate();
    worker = null;
    statusDisplay.innerHTML = "Поток остановлен.";
    searchButton.disabled = false;
}


var worker = new Worker("PrimeWorker.js");

function receivedWorkerMessage(event) {
    // Получаем список простых чисел
    var primes = event.data;

    // Отображаем список в соответствующей области страницы
    var primeList = "";
    for (var i=0; i<primes.length; i++) {
        primeList += primes[i];
        if (i != primes.length-1) primeList += ", ";
    }

    primeContainer.innerHTML = primeList;

    if (primeList.length == 0) {
        statusDisplay.innerHTML = "Ошибка поиска.";
    }
    else {
        statusDisplay.innerHTML = "Простые числа найдены!";
    }

    // Разблокируем кнопку запуска поиска
    searchButton.disabled = false;
}
