
// variables

// bucket that holds one peice of data

//declar - assign a value

// let x = 3
// let y = 4
// let z = x + y // z = 7

// z = z + 10 //now z = 17

// let word = 'this is a string'
// let sentance = "this is a string" 
// let sentance2 = `z is ${z}` // takes the value of variable and displays it in a string

// let name= 'bob'
// console.log(x)
// console.log(`build a string ${x}`)

// console.log(`Hi ${name}`)

// let answer = prompt('Question?')

// console.log(`you answered: ${answer}`)

// Ask user for name, ask for last three test scores,
//0-100, one at a time, then calculate test average, log name +avg

let nameEl = document.getElementById('name')
let averageEl = document.getElementById('average')

console.log(nameEl)



let name = prompt('What is your name?')
console.log(`Name is ${name}`)

nameEl.innerHTML=`Hi ${name}`

let test1 = prompt('First Score')

let test2 = prompt('Second Score')

let test3 = prompt('Third Score')

console.log('test1', test1)
console.log('test2', test2)
console.log('test3', test3)

// type
//number - 3 3.14  x + y
//strings- 'abc' 'a3' '346'

test1 = parseInt(test1, 10)

test2 = parseInt(test2, 10)

test3 = parseInt(test3, 10)

let average = (test1 + test2 + test3) / 3

averageEl.innerHTML= `Your average is ${average}`

console.log(`Hi ${name}. Your average is ${average}`)


