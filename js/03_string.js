// const name = 'Vlad'
// const age = 26
//
// function getAge(){
//     return age
// }
// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет'
// const output =`Привет, меня зовут  ${name} и мой возраст ${age}`
// const output = `
// <div>This is div</div>
//     <p>this is p</p>
// `
// console.log(output)

const name = 'Влад'
//
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLocaleLowerCase())
// console.log(name.charAt(1)) //показывает порядковый индекс , счет ведет с '0'
// console.log(name.indexOf('ла'))
// console.log(name.toUpperCase().startsWith('ВЛАД'))
// console.log(name.startsWith('влад'))
// console.log(name.startsWith('Влад'))
// console.log(typeof name)
// console.log(name.repeat(3)) //repeat этот метод дублирует точто в переменной
// const string ='     password'
// console.log(string.trim()) //trim этот метод убирает все пробелы
// console.log(string.trimLeft())
// console.log(string.trimRight())

function infoPerson(s, name, age) {
   if(age < 0){
       age ='Еще не родился'
   }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Mina'
const personAge = 26

const personName2 = 'Dima'
const personAge2 = -2


const output = infoPerson`Имя: ${personName}, Возраст ${personAge}!`
const output2 = infoPerson`Имя: ${personName2}, Возраст ${personAge2}!`
console.log(output)
console.log(output2)