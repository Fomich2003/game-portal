//burger

let burgerBtn = document.querySelector('.burger')
let navTag = document.querySelector('nav')

burgerBtn.addEventListener('click', toggleNav)

function toggleNav () {
    burgerBtn.classList.toggle('active')
    navTag.classList.toggle('active')
}