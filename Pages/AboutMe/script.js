//TOGGLE MENU BAR
const toggle = document.getElementById('toggle');
const navBar = document.getElementById('navBar');

toggle.onclick = function () {
  toggle.classList.toggle("active");
  navBar.classList.toggle("active");
}