const menuBtn = document.querySelector('.menu-btn');
const menuBar = document.querySelector('.menu-bar');
const newsBtn = document.querySelector('.news-btn');
const newsSection = document.getElementById('news');
const midSection = document.getElementById('mid');
const nameBtn = document.querySelector('.web-name');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBar.classList.toggle("fade");
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuBar.classList.toggle("fade");
    menuOpen = false;
  }
});

newsBtn.addEventListener('click', () => {
  newsSection.classList.remove("unfade");
  midSection.classList.remove("fade");
  midSection.classList.add("unfade");
  setTimeout(() => {
    newsSection.style.display = "block";
    midSection.style.display = "none";
    setTimeout(() => {
      newsSection.classList.add("fade");
    }, 350);
  }, 350);
});

nameBtn.addEventListener('click', () => {
  newsSection.classList.remove("fade");
  newsSection.classList.add("unfade");
  setTimeout(() => {
    midSection.style.display = "block";
    newsSection.style.display = "none";
    setTimeout(() => {
      midSection.classList.add("fade");
    }, 350)
  }, 350);
});