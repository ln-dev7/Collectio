// Loader
window.addEventListener('load', () => {
    const count = document.querySelector('.loader-count')
    const interval = setInterval(() => {
        count.textContent = parseInt(count.textContent) + 1
        if (parseInt(count.textContent) >= 100) {
            clearInterval(interval)
            document.querySelector('.loader').classList.add('loader-end');
        }
    }, .1)
})

// Menu Burger
const open = document.querySelector('.nav-open')
const close = document.querySelector('.nav-close')
const menu = document.querySelector('.menu')

open.addEventListener('click', (e) => {
   menu.classList.add('active') 
})

close.addEventListener('click', (e) => {
   menu.classList.remove('active') 
})


















