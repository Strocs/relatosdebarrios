import Header from '@templates/header.js'
import Footer from '@templates/footer.js'

const showGenerals = (headerPath) => {
  const header = null || document.getElementsByClassName('header__container')[0];
  const footer = null || document.getElementsByClassName('footer__container')[0];
  header.innerHTML = Header(headerPath);
  footer.innerHTML = Footer();
  document.body.insertAdjacentHTML('afterbegin', Background(headerPath));
  showNav();
  headerBg();
}

export default showGenerals