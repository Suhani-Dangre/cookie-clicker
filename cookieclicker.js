let cookieEl=document.getElementById('cookie')
let scoreEl= document.getElementById('score')
let clickCount= 0
let doublerButton= document.getElementById('doubler')
let countChange = 1
let triplerButton= document.getElementById('tripler')


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


 








//shrink + grow on click

function shrink() {
    cookieEl.classList.add('shrink')
}
function grow() {
cookieEl.classList.remove('shrink')
}
cookieEl.addEventListener('click', cookieClicked)
cookieEl.addEventListener('mousedown', shrink)
cookieEl.addEventListener('mouseup', grow)



//display none//x

 

let showButton= document.getElementById('show')

let removeButton= document.getElementById('remove')

 

function hideCookie(){

    cookieEl.classList.add('hide') /* change this to 'hide' so the space is preserved */
    showButton.classList.remove('remove')
    removeButton.classList.add('remove')
}

 

function showCookie(){
    cookieEl.classList.remove('hide') /* change this to 'hide' so the space is preserved*/
    showButton.classList.add('remove')
    removeButton.classList.remove('remove')
}
showButton.addEventListener('click', showCookie)
removeButton.addEventListener('click', hideCookie)
showButton.classList.add('remove')