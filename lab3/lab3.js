//1
var obj = {
    className: "open menu"
};
addClass(obj, "please");
addClass(obj, "menu");
console.log("Завдання 1: ", obj.className);
//2
var str = "-background-color, list-style-image, -webkit-transition";
str = camelize(str);
console.log("Завдання 2: " + str);
//3
var obj2 = {
    className: "my menu open menu"
};
removeClass(obj2, 'menu');
console.log("Завдання 3: ", obj2.className);
//4
var arr = [5, 3, 8, 1, 10, 4, 6, 9];
filterRangeInPlace(arr, 1, 6);
console.log("Завдання 4: " + arr);
//5
var arr2 = [3, 10, -7, 6, -4, 5, 0, 1];
reverseSort(arr2);
console.log("Завдання 5: " + arr2);
//6
var arr3 = ["HTML", "JavaScript", "CSS"];
var arrSorted = arraySort(arr3);
console.log("Завдання 6: " + arr3 + " || " + arrSorted);

//7
var arr4 = [1, 2, 3, 4, 5];
randomSort(arr4);
console.log("Завдання 7: " + arr4);
//8
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };
var people = [vasya, masha, vovochka];
ageSort(people);
console.log("Завдання 8: ", people);
//9
var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
console.log("Завдання 9.1: ");
printList(list);
console.log("Завдання 9.2: ");
printListRec(list);
console.log("Завдання 9.3: ");
printReverseListRec(list);
console.log("Завдання 9.4: ");
printReverseList(list);
//10
var strings = ["C++", "C#", "C++", "C#",
    "C", "C++", "JavaScript", "C++", "JavaScript"
];
console.log("Завдання 10: " + unique(strings));
