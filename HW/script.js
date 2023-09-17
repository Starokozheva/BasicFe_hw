// Напишите функцию, которая выводит все числа от 1 до 100. Для чисел, которые кратны 3, вместо числа выведите "Fizz", а для чисел, кратных 5, выведите "Buzz". Если число кратно и 3, и 5, выведите "FizzBuzz".

function outputNumbersWithConditions() {

    let mult3 = "Frizz";
    let muit5 = "Buzz";
    for (let i = 1; i <= 100; i++) {
        if(i % 15 === 0) {
            console.log(mult3 + muit5);
        } else if (i % 3 === 0) {
            console.log(mult3);
        } else if(i % 5 === 0) {
            console.log(muit5);
        } else console.log(i);
    }
}

console.log("Task 1");
outputNumbersWithConditions();



// Создайте объект, представляющий книгу. Каждая книга должна иметь свойства "название", "автор" и "год издания". Выведите информацию о книге в консоль.

let bookItem = {
    name: "Шум и ярость",
    author: "Уильям Фолкнер",
    year: 1710
};
console.log("Task 2");
console.log(bookItem);



// Напишите функцию, которая находит сумму всех чисел от 1 до 100 и выводит ее в консоль.

function sumNumbers() {
    let result = 0;
    for (let i = 1; i <= 100; i++) {
        result += i;
    }
    return result;
}
console.log("Task 3");
console.log(sumNumbers());



// Создайте объект, представляющий человека. У человека должны быть свойства "имя", "возраст" и "пол". Выведите информацию о человеке в консоль.

let person = {
    name: "David",
    age: 25,
    sex: "male",
};
console.log("Task 4");
console.log(person);




// Напишите функцию, которая находит наибольшее число в заданном массиве чисел.

function createRandomArray(){
    let lengthArray = +prompt("Введите длину массива случайных чисел");
    let minNumber = +prompt("Введите минимальное число массива случайных чисел");
    let maxNumber = +prompt("Введите максимальное число массива случайных чисел");
    let randomArray = [];
    for (let i = 0; i < lengthArray; i++) {
        randomArray.push(Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber));
    }
    console.log("Задача 5");
    console.log("Массив случайных чисел");
    console.log(randomArray);
    return randomArray;
}

let randomArray = createRandomArray();

function findMaxNumber(array){
    console.log("Максимальное число массива случайных чисел");
    let max = array[0];
    for (let i = 0; i < array.length + 1; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
console.log(findMaxNumber(randomArray));




// Создайте массив объектов, представляющих различных студентов. Каждый объект должен иметь свойства "имя", "возраст" и "оценка". Выведите информацию о каждом студенте в консоль. 

let students = [
    {
        name: "Nolan",
        age: 25,
        note: 83,
    },
    {
        name: "Alina",
        age: 22,
        note: 59,
    },
    {
        name: "Mariya",
        age: 21,
        note: 76,
    }
];
console.log("Task 6");
// console.log(students);

function outputStudentsInfo(students) {
    for (let student of students) {
        console.log(student.name);
        console.log(student);
    }
}
outputStudentsInfo(students);




// Напишите функцию, которая находит среднее значение всех чисел в заданном массиве.

function getAverageValue(array) {
    let summa = 0;
    for (let i = 0; i < array.length; i++) {
        summa += array[i];
    }
    console.log(array);
    return summa / array.length;
}

console.log(getAverageValue(randomArray));
