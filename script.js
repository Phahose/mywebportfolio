const header = document.getElementById('header');
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    if (window.scrollY > 50 || window.pageYOffset > 50) {
        header.classList.add("header-bar")
      }
      else{
        header.classList.remove("header-bar")
      }
}