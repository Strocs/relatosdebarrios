const displayNav = () => {
    const btn = document.querySelector('.nav__toggle-btn')
    const nav = document.querySelector('.nav__menu')

    btn.addEventListener('click', () => {

        nav.classList.contains('setHeight')
        ?   nav.classList.remove('setHeight')
        :   nav.classList.add('setHeight')

    })


}

export default displayNav