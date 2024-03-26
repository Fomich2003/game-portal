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