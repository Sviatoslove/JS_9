/* 
    TASK 1

    Необходимо найти факториал числа 5 с помощью рекурсии

*/
var f = 1;

function getFactorial(n) {
  if(n === 1) {
    return f;
  }else {
    f = f * n;
  }
  return getFactorial(n - 1);
};

var result = getFactorial(5);
// console.log(result);


/*
    TASK 2

    Напишите функцию customSetInterval(funcToExecute, interval)
    с помощью рекурсии и setTimeout,
    которая будет повторять функционал встроенного метода setInterval
    встроенный метод setInterval принимает два аргумента:
    первый аргумент - это функция, которая выполняется через заданный интервал времени
    второй аргумент - это временной интервал в миллисекундах.

    функция для вызова:
    function executeMe() {
        console.log('123')
    }

    пример вызова вашей функции:  
    customSetInterval(executeMe, 1000)
    в результате в консоли каждую секунду будет выводиться строка 123
*/

function executeMe() {
  console.log('123');
};

function customSetInterval(funcToExecute, interval) {
  var timerId = setTimeout(function init() {
    funcToExecute();
    timerId = setTimeout(init, interval);
  }, interval);
};

// customSetInterval(executeMe, 1000);


/* 
    TASK 3

    Необходимо сделать часы с помощью setInterval и объекта Date. 
    Они должны быть в формате ЧАСЫ:МИНУТЫ:СЕКУНДЫ.
    И если у нас сейчас 1 час ночи, то должно показываться 01, а не просто 1. 
    Если сейчас время один час пять минут, 
    то у вас должно выводиться 01:05, а не 1:5

*/

function initTime() {
  var now = new Date();
  function addZero(num) {
    if(num >= 0 && num < 10) {
      return '0' + num;
    }else{
      return num;
    };
  };
  console.log(addZero(now.getHours()) + ':' + addZero(now.getMinutes()) + ':' + addZero(now.getSeconds()));
}

// setInterval(initTime, 1000);


/* 

    TASK 4
    Создайте рекурсивную функцию, 
    которая принимает в качестве параметра целое положительное число n,
    введённое с клавиатуры,
    и возвращает сумму всех чисел от 1 до n.

*/

var sum = 0;

function initSum(n) {
  if(n < 1){
    return sum;
  }else {
    sum += n;
  };
  return initSum(n - 1);
};

var result = initSum(1000);
// console.log(result);


/* 
    TASK 5
    Напишите функцию, которая будет выводить Имя и Фамилию юзера.
    Функция должна быть одна, а юзеров - пять. 
    Функция должна быть без параметров.
    
*/

function printFullName () {
  console.log(this.firstName + ' ' + this.lastName);
};

function CreateUser(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

CreateUser.prototype.printFullName = printFullName;

var maria = new CreateUser('Maria', 'Pupkina');
var alex = new CreateUser('Alex', 'Ushkin');
var gavriil = new CreateUser('Gavriil', 'Saint');
var johny = new CreateUser('Johny', 'Bravo');
var kris = new CreateUser('Kris', 'Kozin');

// maria.printFullName();
// alex.printFullName();
// gavriil.printFullName();
// johny.printFullName();
// kris.printFullName();