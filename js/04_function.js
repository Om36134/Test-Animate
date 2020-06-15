// 1 Функция
// //Function Declaretion - фызвать эту функцию можно в любой момент
// function greet(name) {
//     console.log('Привет', name)
// }
//
// //Function Expression
// const greet2 = function greet2(name){
//     console.log('Привет 2', name)
// }
// // greet('Лена')
// // greet2('Лена2')
//
// // console.log(typeof greet)
// // console.dir(greet)

// 2 Анонимные функции
//
// var counter = 0
// const interval = setInterval(function () {
//     if (counter === 5){
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// 3 Стрелочные функции

// function greet(name) {
//     console.log('Привет', name)
// }
// greet('Marsim')
//
// const arrow = (name) => {
//     console.log('Привет', name)
// }
// arrow('Vlad')
//
// const pow2 = num => {
//     return num ** 2
// }
//
// console.log(pow2(5))

// 4 Параметры по умолчанию

// const sum = (a, b=1) => a + b
// console.log(sum(41, 1));
// console.log(sum());
//
// function sumAll(...all) {
//    let result = 0
//     for (let num of all){
//    result += num
//    }
//    return result
// }
//
// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res);

// 5 Замыкание
//
// function createMember(name) {
//     return function(lastName) {
//         console.log(name + lastName);
//     }
// }
//
// const logWithLastName = createMember('Vlad ')
// console.log(logWithLastName('Minin'));
// console.log(logWithLastName('Volkov'));

