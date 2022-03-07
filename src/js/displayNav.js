const displayNav = () => {
    const btn = document.querySelector('.nav__toggle-btn')
    const btnDisplay = window.getComputedStyle(btn).display
    const nav = document.querySelector('.nav__menu')
    const menu = document.querySelectorAll('.nav__menu-section')

    btn.addEventListener('click', () => {

        nav.classList.contains('setHeight')
        ?   nav.classList.remove('setHeight')
        :   nav.classList.add('setHeight')

    })

    btnDisplay === 'none'
    ?   null   
    :   menu.forEach(list => list.addEventListener('click', () => {
                nav.classList.remove('setHeight')
            })
        )
}

export default displayNav