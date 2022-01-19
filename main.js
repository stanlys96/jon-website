const menuBtn = document.querySelector('.menu-btn');
const menuBtnBurgerTop = document.querySelector('.menu-btn__burger-top');
const menuBtnBurgerMid = document.querySelector('.menu-btn__burger-mid');
const menuBtnBurgerBtm = document.querySelector('.menu-btn__burger-btm');
const menuBar = document.querySelector('.menu-bar');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    // menuBtn.classList.add('open');
    menuBtnBurgerTop.classList.add('open');
    menuBtnBurgerMid.classList.add('open');
    menuBtnBurgerBtm.classList.add('open');
    menuBar.classList.toggle("fade");
    menuOpen = true;
  } else {
    // menuBtn.classList.remove('open');
    menuBtnBurgerTop.classList.remove('open');
    menuBtnBurgerMid.classList.remove('open');
    menuBtnBurgerBtm.classList.remove('open');
    menuBar.classList.toggle("fade");
    menuOpen = false;
  }
});