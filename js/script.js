/* Hamburger menu */

const dropdownMenu = document.querySelector('nav');
const menuButton = document.querySelector('.fa-bars');


let menuOpen = false;
menuButton.addEventListener('click', () => {
  if(!menuOpen) {
    menuButton.classList.add('open');
    menuOpen = true;
    dropdownMenu.style.display = "block";
  } else {
    menuButton.classList.remove('open');
    menuOpen = false;
    dropdownMenu.style.display = "none";
  }
});
