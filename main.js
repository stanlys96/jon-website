const menuBtn = document.querySelector('.menu-btn');
const menuBar = document.querySelector('.menu-bar');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    setTimeout(() => {
      menuBar.style.visibility = "visible";
    }, 400);
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    setTimeout(() => {
      menuBar.style.visibility = "hidden";
    }, 400);
    menuOpen = false;
  }
});