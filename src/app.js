const crosshair = document.querySelector('.cursor')
const target = document.querySelector('.target')

window.onload = () => {
    respawn()
}

document.addEventListener('mousemove', (e) => {
    crosshair.style.left = `${e.clientX}px`
    crosshair.style.top = `${e.clientY}px`
})

const respawn = () => {
    const top = Math.floor(Math.random() * window.innerHeight)
    const left = Math.floor(Math.random() * window.innerWidth)
    target.style.top = `${top}px`
    target.style.left = `${left}px`
}

target.addEventListener('click', () => {
    respawn();
} )