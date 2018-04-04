//1
function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(" ") : [];
    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) return;
    }
    classes.push(cls);
    obj.className = classes.join(" ");
}
//2
function camelize(str) {
    var arr = str.split("-");
    str = arr[0];
    for (var i = 1; i < arr.length; i++)
    {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        str += arr[i];
    }
    return str;
}
//3
function removeClass(obj, cls) {
    var str = obj.className.split(" ");
    for (var i = 0; i < str.length; i++)
    {
        if(str[i] === cls) {
            str.splice(i, 1);
            i--;
        }
    }
    obj.className = str.join(" ");
}
//4
function filterRangeInPlace(arr, a, b) {
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] > b || arr[i] < a) {
            arr.splice(i, 1);
            i--;
        }
    }
}
//5
function reverseSort(arr) {
    arr.sort(function(a, b) {
        if (a > b) return -1;
        if (a < b) return 1;
    });
}
//6
function arraySort(arr) {
    var array = arr.slice();
    array.sort(function (a, b) {

    });
    return array;
}
//7
function randomSort(arr){
    arr.sort(function() {
        if(Math.random() > 0.5) return 1;
        if(Math.random() < 0.5) return -1;
    });
}
//8
function ageSort(people) {
    people.sort(function (a, b) {
        if(a.age > b.age) return 1;
        if(a.age < b.age) return -1;
    });
}
//9.1
function printList(list) {
    while (list) {
        console.log(list.value);
        list = list.next;
    }
}
//9.2
function printListRec(list) {
    console.log(list.value);
    if (list.next) {
        printListRec(list.next);
    }
}
//9.3
function printReverseListRec(list) {
    if (list.next) {
        printReverseListRec(list.next);
    }
    console.log(list.value);
}
//9.4
function printReverseList(list) {
    var arr = [];
    var c = list;
    while (c) {
        arr.push(c.value);
        c = c.next;
    }
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
//10
function unique(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
