//All Games

let allgamescontainer = document.querySelector('.games-list')

async function getallgames() {
    let res = await fetch('https://6661c2aa63e6a0189feb74e0.mockapi.io/allgames')
    let data = await res.json()
    return data
}

function renderallgames(data) {
allgamescontainer.innerHTML=''
data.forEach(element=>{
    allgamescontainer.innerHTML+=`  <div class="games-list-item" data-id='${element.title}'>
    <img src="${element.poster}" alt="">
    <div class="games-list-item-description">
        <h2>${element.title}</h2>
        <p>${element.description}</p>
        <a href="./minecraft.html">Детальніше</a>
    </div>
</div>`
})
}
getallgames().then(data=>{renderallgames(data)})

allgamescontainer.addEventListener('click', (event)=>{
let clickedcard = event.target.closest('a')
if(clickedcard) {
    localStorage.setItem('current-game', clickedcard.parentElement.parentElement.dataset.id)
}
} )

let modal = document.querySelector('.modal')
let modalclose = document.querySelector('#modal-close')
let modaladd = document.querySelector('.games-header button')

modaladd.addEventListener('click', ()=>{
    modal.classList.add('active')
})

modalclose.addEventListener('click', ()=>{
    modal.classList.remove('active')
})

let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')
let input3 = document.querySelector('#input3')
let input4 = document.querySelector('#input4')
let input5 = document.querySelector('#input5')
let form = document.querySelector('form')

form.addEventListener('submit', (event)=>{
    event.preventDefault()

    let newgame = {
        poster: input1.value,
        title: input2.value,
        description: input3.value,
        img1: input4.value,
        img2: input5.value
    }

     postGame(newgame).then(data => {
        if (data) {
            modal.classList.remove('active')
            getallgames().then(data => { renderallgames(data) })
        }
     })
})

async function postGame(newgame) {
    let res = await fetch('https://6661c2aa63e6a0189feb74e0.mockapi.io/allgames', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newgame)
    } )
    let data = await res.json()
    return data
}

