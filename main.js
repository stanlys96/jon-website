const menuBtn = document.querySelector('.menu-btn');
const menuBar = document.querySelector('.menu-bar');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuBar.classList.toggle("fade");
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuBar.classList.toggle("fade");
    menuOpen = false;
  }
});