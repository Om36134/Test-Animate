// // 1 переменные
//
// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020
//
// const isFullAge = currentYear - birthYear >= fullAge


// // 2 простая функция
// function calculateAge(year) {
//     return 2020 - year
// }
//
// function infoAbout(name, year) {
//     const age = calculateAge(year) // 3 функция в функции
//
//     if (age > 0) {
//         console.log("Тебя зовут:" + name + "Твой возраст:" + age)
//     } else {
//         console.log('что-то не так')
//     }
//
// }
//
// infoAbout('Vera ', 2022)
// infoAbout('Dima ', 1990)


// 4 Массивы
// const cars =['car1' , 'car2', 'car3']
// // const cars = new Array('car1' , 'car2', 'car3')
// console.log(cars)
// // console.log(cars[0])
//
// cars[0] = 'avto'
// console.log(cars[0])
//
// cars[3] = 'cars4'
// cars[cars.length] = 'cars5'
// console.log(cars)

// 5 Циклы
// const cars =['Мазда' , 'ВАЗ', 'Lanos']
//
// for(var i = 0; i < cars.length; i++){
//    const car = cars[i]
//     console.log(car)
// }

// for (var car of cars) {
//     console.log(car)
// }

// 6 Объекты
const person = {
    firstName: 'Vlad',
    lastName: 'Minin',
    year: 1993,
    lang: ['Ru', 'En', 'De'],
    hasWife: false,
    greet: function () {
        console.log('greet')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'lang'
console.log(person[key])
person.hasWife = true
console.log(person)
person.isWork = true
person.greet()
console.log(person)