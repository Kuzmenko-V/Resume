import './sass/main.scss';
const headerEl = document.getElementById('header');
window.onscroll = function () {
  var scrolled = window.pageYOffset;
  if (scrolled >= 100) {
    headerEl.classList.add('header-site-background');
  } else {
    headerEl.classList.remove('header-site-background');
  }
};
