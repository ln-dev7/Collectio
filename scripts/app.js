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




















