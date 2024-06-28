'use strict'
// обратные кавычки позволяют делать штуки ниже
//мы можем обращаться к переменной внутри другой строки

let textHi = 'Привет!';
let textAll = `${textHi} Я строка!`;
console.log(textAll);
//так же можем вызывать функцию внутри строки 

function someSum(a,b){
    return a + b;
};
console.log(`Сумма: ${someSum(4,5)}`);

// позволяет делать многочтрочную запись 

let dicr = `Привет
я лох
как дела`;
console.log(dicr);
//перевод текста \n  \t табуляция   \\ чтобы написать обратный слеш пишем их две штуки 
// чтобы написать кавычки пишем их через \"\"

let text = 'privet\n ya\n ebaniy lox';
console.log(text);


// РАБОТА СО СТРОКАМИ 
// длина строки length получаем колво символов в строке 
console.log(text.length);

//получаем символы строки во второй переменной получаем последний символ строки 
let firstSymbol = text[0];
let lastSymbol = text[text.length - 1];
console.log(firstSymbol);
console.log(lastSymbol);
// получаем каждый символ строки 
let hi = 'Privet';
for(const char of hi){
    console.log(char);
};
//изменить регистр toUpperCase/ toLowerCase
let a = 'Privet';
console.log(a.toLowerCase());
console.log(a.toUpperCase());
// поиск подстроки indexOf()
console.log(a.indexOf('riv'));
//поиск подстроки но с 3 позиции 
console.log(a.indexOf('riv', 3));


// методы incLudes/ startsWith/ endsWith инклюдес вощвращает либо тру либо фалс

let c = 'Привет!';
console.log(c.includes('рив'));
console.log(c.includes('рив', 3));
console.log(c.startsWith('рив'));
console.log(c.endsWith('!'));

//slice получение части строки по сути возвращает отрезанный от строки кусок
let b = 'Привет!';
console.log(b.slice(1,2));
console.log(b.slice(-2,-1));
console.log(b.slice(1));

//Алфавитный порядок
console.log("А" > "Б");
console.log("а" > "Б");

//Алфавитный порядок
console.log('Скрипт' > 'Скрипка');

//Кол-во символов
console.log('Слайдер' > 'Слайд');

//Регистр
console.log('Фрилансер' > 'фрилансер');

/*
Алгоритм сравнения двух строк довольно прост:
1.	Сначала сравниваются первые символы строк.
2.	Если первый символ первой строки больше(меньше),
	чем первый символ второй, то первая строка
больше(меньше) второй.Сравнение завершено.
3.	Если первые символы равны, то таким же образом
сравниваются уже вторые символы строк.
4.	Сравнение продолжается, пока не закончится одна из строк.
5.	Если обе строки заканчиваются одновременно,
	то они равны.Иначе, большей считается более длинная строка*/