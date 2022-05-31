/* 
    TASK 5 из прошлого ДЗ
    
    Пользователь вводит многозначное число. 
    Напишите функцию, которая принимает число в качестве аргумента
    и вставляет двоеточие (:) между двумя нечетными числами. 
    Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7.

*/

// var num = prompt('Введите многозначное число', 55639217);

// function delimiter(num){
//   if(isNaN(num) || num < 0) {
//     alert('Введённые данные не корректны! Пожалуйста, обновите страницу и попробуйте ещё раз.');
//   } else {
//     var str = num.toString();
//     var result = str[0];
//     for(var i=1; i<str.length; i++) {
//       if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
//         result += ':' + str[i];
//       } else {
//         result += str[i];
//       };
//     }
//   }
//   return result;  
// }
// console.log(delimiter(num));


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