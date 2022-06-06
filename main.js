/* 
    TASK 1

    Необходимо создать пустой объект.
    Пускай это будет объект вашего любимого актера. 
    Добавьте в объект свойства через точечную запись: 
    имя, возраст, пол, фильмы(массив), семейное положение(boolean).
    А потом извне удалите последнее свойство.

*/

var actor = {};

actor.name = 'Zender Mendelson';
actor.age = 34;
actor.gender = 'male';
actor.movies = ['Погреб у озера', 'Побег из тоннеля', 'Апокалипсдрон', 'Фермер не в поле', 'Турникмэн и блинчики'];
actor.married = false;

console.log(actor); 
delete actor.married;
console.log(actor);



/* 
    TASK 2

    Необходимо написать функцию, которая проверяет является ли объект пустым или нет.

*/

var mostPeople = {};

function isEmptyObj(obj){
    for(key in obj) {
        return false;
    }
    return true;
};

var result = isEmptyObj(mostPeople);
console.log(result);


/* 
    TASK 3

    var staff = {
        'Ivan' : 2000,
        'Andrey' : 1440,
        'Marina' : 5187,
        'Oleg' : 3309,
        'Anna' : 2304,
    };

    Дан объект. Напишите функцию, которая вернёт имя самого высокооплачиваемого работника. 
    
*/

var staff = {
    'Ivan' : 2000,
    'Andrey' : 1440,
    'Marina' : 5187,
    'Oleg' : 3309,
    'Anna' : 2304,
};


function highPaidStaff(obj) {
    var highPaidStaff = ('');
    var highPay = 0;
    for(key in obj) {
        if(highPay < obj[key]) {
            highPay = obj[key];
        }else {
            highPay += 0
        };
    };
    for(key in obj) {
        if(highPay === obj[key]) {
            highPaidStaff += key;
        }else {};
    }
    return highPaidStaff;
};

var result = highPaidStaff(staff);
console.log(result);


/* 
    TASK 4
    var staffWithGender = {
        'Ivan' : {salary: 2000, gender: 'male'},
        'Andrey' : {salary: 1440, gender: 'male'},
        'Marina' : {salary: 5187, gender: 'female'},
        'Oleg' : {salary: 3309, gender: 'male'},
        'Anna' : {salary: 2304, gender: 'female'},
    };
    Необходимо написать МЕТОД , который будет находить женщин
    и в качестве премии прибавит им 10 процентов к зарплате.
    В итоге исходный объект и его свойства должны измениться с учетом премий. 
    
*/

var staffWithGender = {
    'Ivan' : {salary: 2000, gender: 'male'},
    'Andrey' : {salary: 1440, gender: 'male'},
    'Marina' : {salary: 5187, gender: 'female'},
    'Oleg' : {salary: 3309, gender: 'male'},
    'Anna' : {salary: 2304, gender: 'female'},
    method : function () {
        for(key in this){
            var percent = 10;
            if(this[key].gender === 'female') {
                this[key].salary += Math.round(this[key].salary/100*percent);
            }else{};
        };
    }
};

staffWithGender.method()
console.log(staffWithGender);


/* 
    TASK 5

    Создайте объект. Пускай это будет объект вашего любимого музыкального исполнителя.
    Внутри объекта опишите этого испольнителя
    (Имя, пол, возраст, рост,список самых популярных песен),
    и создайте внутри объекта метод. 
    Этот метод должен выводить в консоль всю информацию об этом артисте.
    Каждое свойство должно выводиться на отдельной строке.

*/


var harmonist = {
    name: 'Иувал',
    gender: 'male',
    age: 36,
    growth: 185,
    albom: 'Мирская любовь',
    list: ['Иди домой', 'Подожди, постой', 'Уйди не мешай', 'Ты не дождёшься', 'Тебя никто не звал'],
    info: function() {
        for(key in this) {
            if(typeof this[key] !== 'function' && typeof this[key] !== 'object') {
            console.log(key + ': ' + this[key]);
            }if(Array.isArray(this[key])) {
                console.log(key + ': ' + this[key].join('\n      '));
            }
            else {};
        };
    }
};

harmonist.info();