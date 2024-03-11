
// This line ignores duplicate values from js file functions
//@ts-ignore


// JS Function
function difff(c, d) {
    return d-c
}

// Calling JS Function
console.log(difff(2, 11))

// #Define Function
function summ(a:number, b:number) {
    return a+b
}
// Calling Function
console.log(summ(2, 11))


// Anonymous Function

const IamAnnon = () =>"I'm Anonymous"
console.log(IamAnnon)

const Shakira = function ()
{
    return 'Shakalala!'
}

// With Multiple Arguments 
const multiply = (annumbe2multiply:number, secondnumbe2multiply:number) => { 
  return annumbe2multiply * secondnumbe2multiply
}; 
console.log(multiply(2, 5)) //


// NO arguments
const printHello = () => { 
    console.log('hello')
}; 
printHello() // => hello

// Single Argument
const priceprint = (price:number) => { console.log("Price : ${price}") }

// Concise arrow function
const multiplaaay = (a:number, b:number) => a * b; 
// => 60 
console.log(multiplaaay(2, 30)); 
