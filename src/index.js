import '@styles/home.css'

window.onscroll = function(){
    let top = window.scrollY;
    let header = document.getElementsByClassName('header')[0];

    top > 0 ? header.style.visibility = 'visible' : header.style.visibility = 'hidden'

};