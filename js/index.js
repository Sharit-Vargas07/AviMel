const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});

document.addEventListener('DOMContentLoaded', function() {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
  
    menu.addEventListener('click', function() {
      menu.classList.toggle('bx-x');
      navbar.classList.toggle('.open');
    });
  });
  
  