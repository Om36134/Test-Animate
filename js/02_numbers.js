// 1 Number

// const num = 42 //integer целое число
// const float = 42.42 // float десятичное число
// const pow = 10e3 // 10 возводим в 3 степень = 1000

// console.log(num)
// console.log(float)
// console.log(pow)
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2, 53) - 1)  // 2 возводим в 53 степень и вычитаем 1
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2/0', 2 / 0) //infinity
// console.log('NaN', Number.NaN) //Not A Number
// console.log(typeof NaN)
// const weird = 2/undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))
//
// const stringInt = '40'
// const stringFloat = '50.42'
// console.log(Number.parseInt(stringInt) + 2) //функция parseInt-приводит строковое значение к числу
// console.log(parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)
//
// console.log(parseInt(stringFloat) + 2) //функция parseInt-не работает с десятичными числами, т.к. она убирает их десятичную часть
// console.log(parseFloat(stringFloat) +2)
// console.log(parseFloat(stringFloat) + 2)
// console.log(Number(stringFloat) + 2)
// console.log(+stringFloat + 2)

// console.log(0.4+0.2) // 0.6000000000000001
// console.log((2/5)+(1/5)) //0.6000000000000001
// console.log((0.4+0.2).toFixed(1)) //toFixed просто отсекает остаток Ю не округляя
// console.log(+(0.4+0.2).toFixed(1))
// console.log(parseFloat((0.4+0.2).toFixed(1)))

// 2 BigInt
// console.log(9007199254740991999999n - 90071992547409919999n)
// console.log(-9007199254740991999999n )
// console.log(-9007199254740991999999.222n ) //error с десятичными числами не работает
// console.log(10n - 4) //error
// console.log(parseInt(10n) - 4) //преобразуем BigInt в integer
// console.log(10n - BigInt(4)) //преобразуем 4 в BigInt
// console.log(5n /2n) //2 т.к убирает остаток

//3 Math
// console.log(Math.E) //2.718281828459045
// console.log((Math.PI)) //3.141592653589793
//
// console.log(Math.sqrt(25, 2)) // извлечение корень из 25 = 5
// console.log(Math.pow(5, 3) ) //возведение 5 в степень 3
// console.log(Math.abs(-42)) //показывает модуль числа -42 = 42
// console.log(Math.max(42, 23, 4, 111)) //выводит самое большое число из списка
// console.log(Math.min(42, 23, 4, 111)) //выводит самое маленькоее число из списка
// console.log('floor', Math.floor(4.526)) //округление вниз. Округляет аргумент до ближайшего меньшего целого.
// console.log('ceil', Math.ceil(4.5)) //округление вверх. Округляет аргумент до ближайшего большего целого.
// console.log('round', Math.round(4.9295)) // возвращает число, округлённое к ближайшему целому.
// console.log('trunc', Math.trunc(4.5)) // возвращает целую часть числа путём удаления всех дробных знаков.
// console.log('random', Math.random())

//4 Example

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min)
}
console.log(getRandomBetween(10, 42))