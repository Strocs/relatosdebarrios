

const parallaxScroll = () => {
    const video = document.querySelector('.header__video')
    const text = document.querySelector('.header__title')

    window.addEventListener('scroll', function() {
        let value = window.scrollY;
        video.style.top = value * 0.6 + 'px'
        text.style.top = value * 0.4 + 'px'
    })
}

export default parallaxScroll;