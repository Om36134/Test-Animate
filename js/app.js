const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
const fib = [1, 1, 2, 3, 5, 8, 13]

const people = [
    {name: 'Vlad', budget: 4200},
    {name: 'Margo', budget: 1700},
    {name: 'Dima', budget: 3250}
]
// Function

function addItemToEnd(){

}

//Metod

// cars.push('Reno') //добавляет элемент в конец массива
// const firstItem = cars.shift() //удаляет первый элемент массива и меняет массив и возвращает элемент
// const lastCar = cars.pop() //удаляет последний элемент массива
// console.log(firstItem);
//
//
// console.log(cars.reverse());
// console.log(cars);

// console.log(cars.indexOf('BMW'));
// cars[index] = 'Ford'
// console.log(cars);

// const index = people.findIndex(function (person) {
//     return person.budget === 3250
// })
//
// const person = people.find(function (person) {
//     return person.budget === 3250
// })

// const person = people.find(person => person.budget === 1700)
// console.log(person);
//
// let findedPerson
// for (const person of people) {
//     if(person.budget === 3250)
//         findedPerson = person
// }
//
// console.log(findedPerson);


// console.log(people[index]);
// console.log(person);


cars.includes()

// Exampl - 1
// const text = 'Привет, мы изучаем JS!'
// const reversTExt = text.split('').reverse().join('') //split - метод делит строчку и возвращает массив
// console.log(reversTExt);

const user = {
    name: 'John Ludwig',
    gender: 'Male'
};
const college = {
    primary: 'Mani Primary School',
    secondary: 'Lass Secondary School'
};
const skills = {
    programming: 'Extreme',
    swimming: 'Average',
    sleeping: 'Pro'
};
const summary = {...user, ...college, ...skills};
console.log(user);
console.log(college);
console.log(skills);
console.log(summary);