/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("nav_bar").style.top = "0";
  } else {
    document.getElementsByClassName("nav_bar").style.top = "-5000px";
  }
  prevScrollpos = currentScrollPos;
};
