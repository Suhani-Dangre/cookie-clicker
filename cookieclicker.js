let cookieEl=document.getElementById('cookie')
let scoreEl= document.getElementById('score')
let clickCount= 0
let doublerButton= document.getElementById('doubler')
let countChange = 1
let triplerButton= document.getElementById('tripler')
let congratsEl=document.getElementById('congrats')
let autoButton=document.getElementById('auto')
let tenCount = clickCount % 10
let bodyEl= document.getElementById('body') 
let cookieEl2= document.getElementById('cookie2')
let spaceCookieButton= document.getElementById('spaceCookie')
let infoEl = document.getElementById('info')



function cookieClicked(){
    clickCount = clickCount + countChange
    scoreEl.innerHTML = clickCount
    if (clickCount === 10) {

        if(countChange <= 1){
            doublerButton.classList.remove('remove')
        }
        
    
    }
    if (clickCount >= 30) {

        if(countChange === 2){
            triplerButton.classList.remove('remove')
        }

    }
    if (clickCount >= 50){
        if(countChange === 3){
            spaceCookieButton.classList.remove('remove')
        }
    }
     if (clickCount % 10 === 0){
        congratsEl.classList.remove('remove')
        
}
    if (clickCount % 10 != 0){
        congratsEl.classList.add('remove')
    
    }
}


function buyDoubler(){
    clickCount= clickCount - 10
    scoreEl.innerHTML= clickCount
    doublerButton.classList.add('remove')
    countChange = 2
    console.log(`${countChange}`)
}
doublerButton.addEventListener('click', buyDoubler)

function buyTripler(){
    clickCount= clickCount - 30
    scoreEl.innerHTML= clickCount
    triplerButton.classList.add('remove')
    cookieEl.classList.add('filter')
    countChange = 3
}
triplerButton.addEventListener('click', buyTripler)


//shrink + grow on click + Change Background color

function shrink() {
    cookieEl.classList.add('shrink')
    bodyEl.classList.remove('background')
}
function grow() {
cookieEl.classList.remove('shrink')
bodyEl.classList.add('background')
}
cookieEl.addEventListener('click', cookieClicked)
cookieEl.addEventListener('mousedown', shrink)
cookieEl.addEventListener('mouseup', grow)


//display none


let showButton= document.getElementById('show')

let removeButton= document.getElementById('remove')

 

function hideCookie(){

    cookieEl.classList.add('hide') 
    showButton.classList.remove('remove')
    removeButton.classList.add('remove')
}

function showCookie(){
    cookieEl.classList.remove('hide') 
    showButton.classList.add('remove')
    removeButton.classList.remove('remove')
}
showButton.addEventListener('click', showCookie)
removeButton.addEventListener('click', hideCookie)
showButton.classList.add('remove')


//Second cookie code 

function buySpaceCookie(){
    clickCount= clickCount - 30
    scoreEl.innerHTML= clickCount
    countChange = 4
    spaceCookieButton.classList.add('remove')
    cookieEl2.classList.remove('remove')
    infoEl.classList.remove('remove')
}
spaceCookieButton.addEventListener('click', buySpaceCookie)


document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        
    cookieEl2.classList.add('shrink')
    bodyEl.classList.remove('background')
    if (clickCount % 10 === 0){
        congratsEl.classList.remove('remove')
        
}
    if (clickCount % 10 != 0){
        congratsEl.classList.add('remove')
    
    }
    }
}
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        clickCount = clickCount + countChange
    scoreEl.innerHTML = clickCount
        cookieEl2.classList.remove('shrink')
        bodyEl.classList.add('background')
        infoEl.classList.add('remove')
        
        if (clickCount % 10 === 0){
            congratsEl.classList.remove('remove')
            
    }
        if (clickCount % 10 != 0){
            congratsEl.classList.add('remove')
        
        }
    }
}

/* Challenges:
0. Display a celebration message any time the user passes a score that is a multiple of 10

1. Alternate the page background color back and forth between two options on each click

2. Allow the user to purchase a second cookie, that can be "clicked" by pressing the spacebar instead of the mouse. 
   Remeber to tell the user what to do

3. Allow the user to purchase a cookie autoclicker (hint: reserch and use setInterval) */
