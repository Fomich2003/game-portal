let slider_list = document.querySelector('.hero-slider__list')
let slider_dots = document.querySelectorAll('.slider-dots li')
let total_slides = 7
let slide_position = 0
let play_slides = setInterval(()=>{
    remove_active_class(slider_dots,'active')
    slide_position++
    if(slide_position===7) {
        slide_position=0
    }
    slider_dots[slide_position].classList.add('active')
    slider_list.style.left=`-${slide_position*100}%`
},3500)

slider_dots.forEach(dot=>{
    dot.addEventListener('click',()=>{
        remove_active_class(slider_dots,'active')
        slider_list.style.left=`-${+dot.dataset.id*100}%`
        dot.classList.add('active')
        clearInterval(play_slides)
    } )
}) 
function remove_active_class (selector,active_class) {
   selector.forEach(el=>el.classList.remove(active_class))
}

//2section

let gamesBtn = document.querySelectorAll('.games li')
let gameImg = document.querySelectorAll('.games img')

gamesBtn.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        remove_active_class(gamesBtn,'active')
        remove_active_class(gameImg,'active')
    gamesBtn[index].classList.add('active')
    gameImg[index].classList.add('active')
    })
})

//4section

let randombtn = document.querySelector('.random-btn')
let randomimg = document.querySelector('.random-game img')
let randomp = document.querySelector('.random-game p')

let gamesImg = [
    {
        title:'Minecraft',
        img:'./img/image 21.png'
    },
    {
        title:'Rust',
        img:'./img/Rust.png'
    },
    {
        title:'Pubg',
        img:'./img/Pubg.png'
    },
    {
        title:'Red Dead Redemption 2',
        img:'./img/image 18.png'
    },
    {
        title:'Horizon',
        img:'./img/image 1.png'
    },
    {
        title:'Need for Speed',
        img:'./img/ed6f5-16069157093599-800.avif'
    },
    {
        title:'Stray',
        img:'./img/Stray.png'
    },
]

function random () {
    let number = Math.floor(Math.random() * 7)
    console.log(gamesImg[number])
   randomimg.src=gamesImg[number].img
   randomp.innerHTML=gamesImg[number].title
}
randombtn.addEventListener('click', random)
