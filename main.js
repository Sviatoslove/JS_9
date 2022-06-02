/* 
    TASK 5 из прошлого ДЗ
    
    Пользователь вводит многозначное число. 
    Напишите функцию, которая принимает число в качестве аргумента
    и вставляет двоеточие (:) между двумя нечетными числами. 
    Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7.

*/

var num = prompt('Введите многозначное число', 55639217);

function delimiter(num){
  if(isNaN(num) || num < 0) {
    alert('Введённые данные не корректны! Пожалуйста, обновите страницу и попробуйте ещё раз.');
  } else {
    var str = num.toString();
    var result = str[0];
    for(var i=1; i<str.length; i++) {
      if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
        result += ':' + str[i];
      } else {
        result += str[i];
      };
    }
  }
  return result;  
}
console.log(delimiter(num));


/* 
    TASK 1

    Напишите функцию, которая принимает строку и делает первый символ каждого слова в строке заглавным

    Example: 
    на вход: 'это предложение из заглавных букв каждого слова'
    на выход: 'Это Предложение Из Заглавных Букв Каждого Слова'

*/

var text = 'как долго идут часы, но быстро годы пролетают';

function wordUpperCase(str) {
  var textUpper = [];
  var arrText = str.split(' ');
  for(var i = 0; i < arrText.length; i++) {
    arrText.toString(arrText[i]);
    var strWord = arrText[i];
    function strWordUpper(str){
      var wordUpper = '';
      for(var i = 0; i < str.length; i++) {
        if(i == 0) {
          wordUpper += str[i].toUpperCase();
        } else {
          wordUpper += str[i].toLowerCase();
        };
      };
      return textUpper.push(wordUpper);
    };
    strWordUpper(strWord);
  };
  return textUpper.join(' ');
};
var result = wordUpperCase(text);
// console.log(result);


/* 
    TASK 2

    Напишите функцию, которая проверяет текст на наличие плохих слов
    и изменяет каждое такое слово на выражение: 'хорошее слово'.
    на вход: 'это плохоеслово1 из заглавных плохоеслово2 каждого плохоеслово3'
    на выход: это хорошее слово из заглавных хорошее слово каждого хорошее слово'

*/

var text = 'это плохоеслово1 из заглавных плохоеслово2 каждого плохоеслово3 плохоеслово4 плохоеслово5';
function badWordCut(str) {
  var textAdmin = ['плохоеслово1', 'плохоеслово2', 'плохоеслово3', 'плохоеслово4', 'плохоеслово5'];
  var badText = str.split(' ');
  textAdmin.forEach(function(item) {
    for(var i = 0; i < badText.length; i++) {
      if(badText[i] === item) {
        badText.splice(i, 1, 'хорошее слово')
      } else {};
    };
  });
  return badText.join(' ');
};
var result = badWordCut(text);
// console.log(result);

/* 
    TASK 3

    Напишите функцию, которая проверяет длину строки, и если она больше 50ти символов,
    то обрежьте её до 50 символов и вместо последних трех, поставьте "..." (троеточие)
    
*/

var text = 'извлекает часть строки и возвращает новую строку. Принимает два значения: начало и конец части строки которую необходимо';

function CutStr(str) {
  var cutText = '';
  for(var i = 0; i < 50; i++){
    if(i + 1 === 50) {
      cutText = str.slice(0, i + 1);
      var arrCutPoint = cutText.split('');
      arrCutPoint.splice(i - 2,3,'.','.','.');
    } else {};
  };
  return arrCutPoint.join('');
};
var result = CutStr(text);
// console.log(result);


/* 
    TASK 4

    Есть строка : 'Я так сильно люблю программировать'. 
    Необходимо вывести в консоль длину каждого слова. 
    Сделайте это задание, используя методы перебора массива.
    
*/

var text = 'Я так сильно люблю программировать';

function wordLength(str) {
  var arrText = str.split(' ');
  arrText.forEach(function(item) {
    // console.log(item.length);
  });
} 
wordLength(text);


/* 
    TASK 5
    У нас есть массив с языками программирования:
    [
        "php", 
        "kotlin",  
        "php", 
        "css", 
        "css",
        "Kotlin", 
        "python",
        "script", 
        "script", 
        "html", 
        "html", 
        "java", 
        "c++", 
        "Html", 
        "Ruby"
    ];
    Напишите функцию, которая возвращает массив, в котором удалены повторяющиеся элементы из массива.
    "kotlin" и "Kotlin" - это одинаковые языки, регистр не имеет значения.
    
*/

var progLanguages = [
  "php", 
  "kotlin",  
  "php", 
  "css", 
  "css",
  "Kotlin", 
  "python",
  "script", 
  "script", 
  "html", 
  "html", 
  "java", 
  "c++", 
  "Html", 
  "Ruby"
];

function arrFilter(arr) {
  arr.forEach(function(item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] == item) {
        arr.splice(i,1);
      } else{};
    };
  });
  return arr;
};
var result = arrFilter(progLanguages);
// console.log(result)


/* 

    TASK 6
    Напишите функцию, которая принимает первым аргументов начало диапазона, а вторым - конец диапазона
    и возвращает массив високосных лет в заданном диапазоне.
    Example: getLeapYears(2000, 2018) //[2000,2004,2008,2012,2016] 

*/

function getLeapYears(from, to){
  var isLeapYear = [];
  for(var year = from; year <= to; year++) {
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
      isLeapYear.push(year);
    };
  };
  return isLeapYear;
};

var result = getLeapYears(2000, 2018);
// console.log(result);


// Другое решение для примера

// const getLeapYears = function(from, to) {
//   const result = [],
//   isLeapYear = function(y) {
//     return ((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0);
//   };

//   for (let year = from; year <= to; year++) {
//     if (isLeapYear(year)) result.push(year);
//   };
//   return result;
// };
// console.log(getLeapYears(2000, 2018)); // [2000, 2004, 2008, 2012, 2016]
 

/* 
    TASK 7

    Напишите функцию, которая возвращает массив элементов,
    представляющих собой сумму соответствующих элементов заданных массивов.
    То есть, первый элемент первого массива 
    должен складываться с первым элементом второго массива, второй со вторым, и так далее.

    Example:
    [37, 23, 43, 34, 55];
    [40, 533, 601];

    result: [77, 556, 644, 34, 55]

*/

var numbers1 = [40, 533, 601];
var numbers2 = [37, 23, 43, 34, 55];

function sumNumbers(arr1, arr2) {
  var numbers3 = [];
  if(arr2.length > arr1.length){
    numbers3 = arr2.map(function(num, idx) {
      if(arr1[idx] >= 0) {
        return num + arr1[idx];
      } else { 
        return num;
      };
    });
  } else {
    numbers3 = arr1.map(function(num, idx) {
      if(arr2[idx] >= 0) {
        return num + arr2[idx];
      } else { 
        return num;
      };
    });
  };
  return numbers3;  
};
var result = sumNumbers(numbers1, numbers2);
// console.log(result);


/* 
    ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ (ДЕЛАТЬ НЕОБЯЗАТЕЛЬНО)
    TASK 8
    Напишите функцию, которая раскрывает вложенный массив любой глубины. 
    На выходе мы должны получить массив. Используйте метод reduce.

    Example:
    [333, [222,[444,[985]]]] // [333, 222, 444, 985] 
    [298, [855], [22, [[89]]],[10,69]] //  [298, 855, 22, 89, 10, 69]
    
*/

var numbers1 = [333, [222,[444,[985]]]];
var numbers2 = [298, [855], [22, [[89]]],[10,69]];

function makeFlat(arr) {
  return arr.reduce(function (arr, z) {
    if (Array.isArray(z)) {
      arr.push(...makeFlat(z));
    } else {
      arr.push(z);
    };
    return arr;
  }, []);
};

var result = makeFlat(numbers1);
// console.log(result);