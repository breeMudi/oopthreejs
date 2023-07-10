document.body.onclick = moveBar
// window.onclick()
let value = 2

function moveBar() {
    while(value < window.innerWidth - 300){
        value = Math.floor(Math.random() * 200) + 2
        
        document.querySelector('.boxes').style.left = `${value}px`
        console.log('didnt move')
        requestAnimationFrame(moveBar)
    }
}