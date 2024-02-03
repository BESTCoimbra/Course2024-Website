const navbarPhone = document.querySelector(".options-phone");
const optionsPhone = document.querySelectorAll('.nav-option2');

var btn = document.querySelector(".btn");
btn.addEventListener('click', function() {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
    this.classList.add('not-active');
    navbarPhone.style.display = "none";
  } else {
    this.classList.remove('not-active');
    this.classList.add('active');
    navbarPhone.style.display = "flex";
  }
});

optionsPhone.forEach(option => {
  option.addEventListener('click', function() {
    console.log('atão');
    btn.classList.remove('active');
    btn.classList.add('not-active');
    navbarPhone.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const navbar = document.querySelector("header");
  const homepageLimit = document.querySelector(".home-page").offsetHeight;

  const onScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > homepageLimit) {
      navbar.style.background = "white"; 
    } else {
      navbar.style.background = "";
    }
  };

  window.addEventListener("scroll", onScroll);
});