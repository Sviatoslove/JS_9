/* 
    TASK 1

    Напишите функцию конструктор, которая создает объект 'comment' со свойствами :
    - id
    - author
    - text

    Создайте с помощью этого конструктора минимум 3 объекта
*/

function Comment(id, author, text) {
  this.id = id;
  this.author = author;
  this.text = text 
};

var comment1 = new Comment(1, 'Иттай', 'Я готов даже умереть с тобой!');
var comment2 = new Comment(2, 'Давид', 'Вам-то что до этого, сыновья Церу́и?');
var comment3 = new Comment(3, 'Авессало́м', 'Лучше бы я оставался там.');

// console.log(comment1);
// console.log(comment2);
// console.log(comment3);


/*
    TASK 2

    var rex = {
      animal: 'dog',
      makeSound: function(){
        console.log('Гав Гав');
      }
    };

    var charlie = {
      animal: 'dog',
      runFast : function() {
        console.log('I can run very fast');
      }
    }

    var martin = {
      animal: 'dog'
    }

    У нас есть три собаки. Собака rex умеет лаять, собака charlie умеет быстро бегать, а вот собака martin к сожалению ничего из этого не может. 
    Научите собаку charlie лаять, а собаку martin и лаять и быстро бегать.

*/

var rex = {
  animal: 'dog',
  makeSound: function(){
    console.log('Гав Гав');
  }
};

var charlie = {
  animal: 'dog',
  runFast : function() {
    console.log('I can run very fast');
  }
}

var martin = {
  animal: 'dog'
}

charlie.__proto__ = rex;
martin.__proto__ = charlie;

// charlie.makeSound();
// martin.makeSound();
// martin.runFast();


/* 
    TASK 3

    Создайте объект работника с именем Евгений, которому 33 года, который работает дизайнером, и у которого зарплата 2500$ в месяц. 
    Сделайте так, чтобы при проверке этого задания я не смог с помощью перебора свойств этого объекта узнать какая зарплата у этого работника.
    Само свойство зарплат, и его значение должно присутствовать в объекте.

*/

var workMan = Object.create({}, {
  name: {
    value: 'Евгений',
    enumerable: true
  },
  age: {
    value: 33,
    enumerable: true
  },
  position: {
    value: 'designer',
    enumerable: true
  },
  salary: {
    value: 2500 + '$'
  }
});


/* 

    TASK 4

    Выведите на экран текущую дату-время в формате '00:00:00 31.12.2010'.
    Также напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014)

*/

var now = new Date();

function addZero(num) {
  if(num > 0 && num < 10) {
    return '0' + num;
  }else{
    return num;
  };
};

// alert (now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + ' ' + addZero(now.getDate()) + '.' + addZero(now.getMonth() + 1) + '.' + now.getFullYear());