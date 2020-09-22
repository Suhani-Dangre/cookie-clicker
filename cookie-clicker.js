let clickCount = 0
let clickCountEl = document.getElementById('clickCount')
let cookieEl = document.getElementById('cookie')

function updateCount(){
    clickCount = clickCount + 1
    clickCountEl.innerHTML = clickCount
}
function shrink() {
        cookieEl.classList.add('shrink')
}
function grow() {
    cookieEl.classList.remove('shrink')
}
 


cookieEl.addEventListener('click', updateCount)
cookieEl.addEventListener('mousedown', shrink)
cookieEl.addEventListener('mouseup', grow)

// click code
let showButton = document.getElementById('show')
let removeButton = document.getElementById('remove')

function showCookie() {
    cookieEl.classList.remove('remove')
}

function hideCookie() {
    cookieEl.classList.add('remove')
}

showButton.addEventListener('click', showCookie)
removeButton.addEventListener('click', hideCookie)






