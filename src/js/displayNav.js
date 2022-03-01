const displayNav = () => {
    const btn = document.querySelector('.nav__toggle-btn')
    const nav = document.querySelector('.nav__menu')
    const bar = document.querySelector('.nav')

    btn.addEventListener('click', () => {
        nav.style.marginTop == '-60vh' 
        ? (nav.style.marginTop = '0vh',
            bar.classList.add('nav__fixed'))
        : (nav.style.marginTop = '-60vh',
            bar.classList.remove('nav__fixed'))
    })

}

export default displayNav