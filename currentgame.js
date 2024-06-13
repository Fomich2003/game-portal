let mainposter = document.querySelector('.mainposter')
let titlegamee = document.querySelector('.titlegame')
let gamedescription = document.querySelector('.gamedescription')
let gamesimg1 = document.querySelector('.gamesimg1')
let gamesimg2 = document.querySelector('.gamesimg2')
let game = localStorage.getItem('current-game')
console.log(game)

async function getgame() {
    let res = await fetch(`https://6661c2aa63e6a0189feb74e0.mockapi.io/allgames?title=${game}`)
    let data = await res.json()
    return data
}
getgame().then(data=>{
    mainposter.src=data[0].poster
    titlegamee.innerHTML=data[0].title
    gamedescription.innerHTML=data[0].description
    gamesimg1.src=data[0].img1
    gamesimg2.src=data[0].img2
})