import {headerVideo, headerText} from './'

const parallaxScroll = () => {

    window.addEventListener('scroll', function() {
        let value = window.scrollY;
        headerVideo.style.top = value * 0.6 + 'px'
        headerText.style.top = value * 0.4 + 'px'
    })
}

export default parallaxScroll;