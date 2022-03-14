import {headerVideo, headerText} from './'

const parallaxScroll = () => {

    window.addEventListener('scroll', function() {
        let value = window.scrollY;
        headerVideo.style.top = value * 0.8 + 'px'
        headerText.style.top = value * 0.5 + 'px'
    })
}

export default parallaxScroll;