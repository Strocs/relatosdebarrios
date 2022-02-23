const navFixed = () => {
    
    window.onscroll = function(){
        let top = window.scrollY;
        const bar = document.querySelector('.nav')
        const container = document.querySelector('.nav__container')    
        const logo = document.querySelector('.nav__logo-img')

        top > 0 ? 	(bar.classList.add('nav__fixed'), 
                    container.classList.add('nav__container-fixed'),
                    logo.classList.add('nav__logo-imgFixed')
                    ) 
                    : 
                    (bar.classList.remove('nav__fixed'),
                    container.classList.remove('nav__container-fixed'),
                    logo.classList.remove('nav__logo-imgFixed')
                    );

  };
}

export default navFixed