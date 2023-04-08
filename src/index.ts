// Type Annotation
let isHello: boolean = true

// Debugging here line by line
if (isHello === true) 
 isHello = false
console.log(isHello)

// Default any type
let hell
let number = []

// Setting array type number
let numbers: number[] = []

// Getting all the number method for numbers
numbers.forEach(n => n.toFixed())

// Tuples
// 1, 'Hello'
let arr: [number, string] = [1, 'Hello']

// Enums
// PascalCase
// Setting const on enum generate optimized js
const enum Size { First = 1, Second , Third }
let size: Size = Size.Second
console.log(size)

// Functions
