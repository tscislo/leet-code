var cars = ["BMW", "Mazda", "Volvo"];


for (var i = 0; i < cars.length; i++) {
    setTimeout(() => {
        console.log(i) // 3, 3, 3 it is 3 because by the time setTimeout executes loop reaches end + 1, which is cars.length = 2 ++ -> 3
        console.log(cars[i]); // because var has function scope and in setTimeout there is a closure, each iteration gets the same value -> 3
    }, 100)
}


// with 'let' it is a block scope so each iteration gets its own copy of i with correctly incremented value
for (let i = 0; i < cars.length; i++) {
    setTimeout(() => {
        console.log(cars[i]);
    }, 100)
}

// here with IIFE each setTimeout execution has its own copy of i and it is correctly incremented
for (var i = 0; i < cars.length; i++) {
    (function (i) {
        setTimeout(() => {
            console.log(cars[i]);
        }, 100)
    })(i)
}