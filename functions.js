//function - named sequence of code, repeat, resue
//simplify problems, late

console.log('Code started')

//always start with a lowercase letter
function doStuff() {
console.log('Inside doStuff')
}

function sayHi(name) {//parameter
    console.log(`Hi there ${name}`)
}
sayHi('Alice') //argument
sayHi('Bob')
sayHi('Carol')



let clickMeEl = document.getElementById('clickme')
let clickCount = 0
function hasBeenClicked(){
    console.log('You clicked the text')
    clickCount = clickCount + 1
    console.log(`ClickCount: ${clickCount}`)
}

clickMeEl.addEventListener('click', hasBeenClicked)


console.log('Code ended')