//yay, Javascript!
let Adj1 = prompt('Enter an adjective')
console.log('Adjective', Adj1)
let Adj1El = document.getElementById('Adj1')

let nationality1 = prompt('Enter a nationality')
console.log('nationality', nationality1)
let nationalityEl = document.getElementById('nationality1')

let person1 = prompt('Enter a name')
console.log('person', person1)
let person1El = document.getElementById('person1')

let noun1 = prompt('Enter a noun')
console.log('noun', noun1)
let noun1El = document.getElementById('noun1')

let Adj2 = prompt('Enter an adjective')
console.log('Adjective', Adj2)
let Adj2El = document.getElementById('Adj2')

let noun2 = prompt('Enter a noun')
console.log('noun', noun2)
let noun2El = document.getElementById('noun2')

let Adj3 = prompt('Enter an adjective')
console.log('Adjective', Adj3)
let Adj3El = document.getElementById('Adj3')

let Adj4 = prompt('Enter an adjective')
console.log('Adjective', Adj4)
let Adj4El = document.getElementById('Adj4')

let nounP1 = prompt('Enter a plural noun')
console.log('noun', nounP1)
let nounP1El = document.getElementById('nounP1')

let noun3 = prompt('Enter a noun')
console.log('noun', noun3)
let noun3El = document.getElementById('noun3')

let number = prompt('Enter a number')
console.log('number', number)
let numberEl = document.getElementById('number')

let shape = prompt('Enter a plural shape')
console.log('shape', shape)
let shapeEl = document.getElementById('shape')

let food = prompt('Enter a food')
console.log('food', food)
let foodEl = document.getElementById('food')

let number2 = prompt('Enter a number')
console.log('number', number2)
let number2El = document.getElementById('number2')

let sport = prompt('Enter a sport')
console.log('sport', sport)
let sportEl = document.getElementById(sport)

//Final Story
Adj1El.innerHTML=`Pizza was invented by a ${Adj1} ${nationality1} chef named ${person1}.
 To make pizza, you need to take a lump of ${noun1}, and make a thin, round ${Adj2} ${noun2}.
 Then you cover it with ${Adj3} sauce, ${Adj4} cheese, and fresh chopped ${nounP1}.
 When it is done, cut it into ${number} ${shape}. Some kids like ${food} pizza. Many people
 after a long day of ${sport}. If I could, I would eat pizza ${number2} times a day!`