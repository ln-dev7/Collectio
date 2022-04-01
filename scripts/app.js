window.addEventListener('load', () => {
    const count = document.querySelector('.loader-count')
    // Incremente le count jusqu'a 100 pendant 10 secondes
    const interval = setInterval(() => {
        count.textContent = parseInt(count.textContent) + 1
        if (parseInt(count.textContent) >= 100) {
            clearInterval(interval)
            document.querySelector('.loader').classList.add('loader-end');
        }
    }, 10)
})




















