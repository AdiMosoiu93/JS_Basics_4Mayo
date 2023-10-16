// V1 of functions
function sayHello (name) {
    for(i=0;i<10;i++) {
        console.log('Hello ' + name + " " + i)
    }
}

sayHello('Adi');


setTimeout(function() {
    console.log('sal')
}, 2000)


// V2 of functions
const tellMe = function () {
    console.log('V2')
}
tellMe();

// V3 of functions
const tellme1 = (food) => {console.log('V3')}
tellme1('praji')

// V4 functions
const sum = (x, y) => x+y
console.log(sum(3, 5))