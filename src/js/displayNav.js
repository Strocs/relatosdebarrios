import { navMenu, navList, navBtn, navBtnDisplay } from './'

const displayNav = () => {

    navBtn.addEventListener('click', () => {

        navMenu.classList.toggle('setHeight')

    })

    navBtnDisplay === 'none'
    ?   null   
    :   navList.forEach(list => list.addEventListener('click', () => {
                nav.classList.remove('setHeight')
            })
        )
}

export default displayNav