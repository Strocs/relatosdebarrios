import {nav, navContainer, navLogo} from './';

const navFixed = () => {
    
    window.onscroll = function(){
        let top = window.scrollY;

        top > 0 ? 	(nav.classList.add('nav__fixed', 'bgBlue'), 
                    navContainer.classList.add('nav__container-fixed'),
                    navLogo.classList.add('nav__logo-imgFixed')
                    ) 
                : 
                    (nav.classList.remove('nav__fixed', 'bgBlue'),
                    navContainer.classList.remove('nav__container-fixed'),
                    navLogo.classList.remove('nav__logo-imgFixed')
                    );

  };
}

export default navFixed