const cars = ['Mercedes', 'Audi', 'Dacia']
console.log(cars.length)

cars.push('Renault')
console.log(cars)

cars.forEach(function (car) {
    console.log(  car + " is my car")
})

console.log(cars[2])
console.log(cars[cars.length-1])