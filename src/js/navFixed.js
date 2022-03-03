const navFixed = () => {
  const bar = document.querySelector('.nav')
  const container = document.querySelector('.nav__container')    
  const logo = document.querySelector('.nav__logo-img')
    
    window.onscroll = function(){
        let top = window.scrollY;

        top > 0 ? 	(bar.classList.add('nav__fixed', 'bgBlue'), 
                    container.classList.add('nav__container-fixed'),
                    logo.classList.add('nav__logo-imgFixed')
                    ) 
                : 
                    (bar.classList.remove('nav__fixed', 'bgBlue'),
                    container.classList.remove('nav__container-fixed'),
                    logo.classList.remove('nav__logo-imgFixed')
                    );

  };
}

export default navFixed