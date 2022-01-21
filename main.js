const menuBtn = document.querySelector('.menu-btn');
const menuBar = document.querySelector('.menu-bar');
const newsBtn = document.querySelector('.news-btn');
const newsSection = document.getElementById('news');
const midSection = document.getElementById('mid');
const nameBtn = document.querySelector('.web-name');
const menuLinks = document.querySelectorAll('.menu-a');
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

menuLinks.forEach(link => {
  let letters = link.textContent.split("");
  link.textContent = "";
  letters.forEach((letter, i) => {
    i += 1;
    let span = document.createElement("span");
    let delay = i / 20;
    if (i % 2 === 0) {
      delay -= 0.1;
    } else {
      delay += 0.05;
    }
    let letterOut = document.createElement("span");
    letterOut.textContent = letter;
    letterOut.style.transitionDelay = `${delay}s`;
    letterOut.classList.add("out");
    span.append(letterOut);
    let letterIn = document.createElement("span");
    letterIn.textContent = letter;
    letterIn.style.transitionDelay = `${delay}s`;
    letterIn.classList.add("in");
    span.append(letterIn);
    link.append(span);
  });
});

